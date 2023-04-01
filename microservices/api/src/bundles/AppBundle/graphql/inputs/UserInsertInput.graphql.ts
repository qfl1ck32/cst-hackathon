export default /* GraphQL */ `
  input UserInsertInput {
    isEnabled: Boolean!
    roles: [UserRole]!
  }
`;
