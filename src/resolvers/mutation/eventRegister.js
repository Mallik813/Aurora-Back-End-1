const { ApolloError, AuthenticationError } = require('apollo-server-express');
const ObjectId = require('mongodb').ObjectID;

const eventRegister = async (_, args, context) => {
  const { isValid, db, client } = context;
  let userId = context.id;
  let { eventId } = args;
  let teamId;
  userId = ObjectId(userId);
  eventId = ObjectId(eventId);
  if (isValid) {
    const singleEvent = await db
      .collection('events')
      .find({ _id: eventId })
      .toArray();
    if (singleEvent.length === 0) throw new ApolloError('wrong Event Details');
    const verifyRegister = await db
      .collection('teams')
      .find({ event: eventId, 'members.0': userId })
      .toArray();
    if (verifyRegister.length === 0) {
      const user = await db
        .collection('users')
        .find({ _id: userId })
        .toArray();
      const session = client.startSession({
        defaultTransactionOptions: {
          readConcern: { level: 'local' },
          writeConcern: { w: 'majority' },
          readPreference: 'primary',
        },
      });
      try {
        await session.withTransaction(async () => {
          const usersCollection = db.collection('users');
          const teamsCollection = db.collection('teams');
          const team = await teamsCollection.insertOne(
            {
              name: user[0].name,
              event: eventId,
              members: [userId],
              paymentStatus: false,
              pendingInvitations: [],
            },
            { session }
          );
          teamId = team.insertedId;
          await usersCollection.updateOne(
            { _id: userId },
            { $push: { teams: { teamId } } },
            { session }
          );
        });
      } catch (err) {
        throw new ApolloError('Something went wrong', 'TRX_FAILED');
      }
      return {
        code: 200,
        success: true,
        message: 'User registered successfully',
        team: { id: teamId, paymentStatus: false },
      };
    }
    throw new Error('You are already registered for this event');
  }
  throw new AuthenticationError('User is not logged in');
};
module.exports = eventRegister;
