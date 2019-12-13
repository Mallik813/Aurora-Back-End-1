const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    user: User!
    allUsers(limit: Int, page: Int, sortBy: String, sortDir: Int): UserQueryRes
    allTeams(limit: Int, page: Int, sortBy: String, sortDir: Int): TeamQueryRes
    eventTeams(eventId: Int, limit: Int, page: Int, sortBy: String, sortDir: Int): TeamQueryRes
  }

  type UserQueryRes {
    total: Int!
    users: [User!]
  }

  type TeamQueryRes {
    total: Int!
    teams: [Team!]
  }

  type Event {
    id: Int!
    name: String!
    maxSize: Int!
    isNameRequired: Boolean!
    fee: Int!
    parentEvent: String
  }

  type User {
    id: String!
    email: String!
    name: String!
    college: String!
    gender: String!
    city: String!
    phone: String!
    displayPic: String!
    isVerified: Boolean!
    accommodation: Boolean!
    teams: [Team!]
    teamInvitations: [TeamInvitation!]
    timeSt: String!
  }

  type Team {
    id: String!
    name: String
    event: Event!
    members: [User!]!
    paymentStatus: Boolean!
    pendingInvitations: [User!]
  }

  type TeamInvitation {
    team: Team!
    invitedBy: User!
  }

  type Mutation {
    login(email: String!, password: String!): String
    signup(
      email: String!
      password: String!
      name: String!
      college: String!
      gender: String!
      city: String!
      phone: String!
    ): UserResponse
    verifyRegister(token: String!): MutationResponse
    eventRegister(eventId: Int!): EventResponse
    sendInvite(teamId: String!, arId: String!): EventResponse
    cancelInvite(teamId: String!, arId: String!): EventResponse
    acceptInvite(teamId: String!): EventResponse
    declineInvite(teamId: String!): UserResponse
    removeMember(teamId: String!, arId: String!): EventResponse
    leaveTeam(teamId: String!): UserResponse
    pay(teamId: String!): UserResponse
    contactUs(name: String!, email: String!, subject: String, message: String!): MutationResponse
    forgotPassword(arIdOrEmail: String!): MutationResponse
    resetPassword(token: String!, password: String!): MutationResponse
    setTeamName(teamId: String!, name: String!): EventResponse
    generateEventOrder(teamIds: [String!]!): OrderResponse
    verifyEventOrder(orderId: String!, paymentId: String!, signature: String!): UserResponse
  }

  type EventResponse {
    code: String!
    success: Boolean!
    message: String
    team: Team!
  }

  type MutationResponse {
    code: String
    success: Boolean!
    message: String
  }

  type UserResponse {
    code: String
    success: Boolean!
    message: String
    user: User!
  }

  type OrderResponse {
    order_id: String!
    key: String!
    amount: String!
  }
`;

module.exports = typeDefs;
