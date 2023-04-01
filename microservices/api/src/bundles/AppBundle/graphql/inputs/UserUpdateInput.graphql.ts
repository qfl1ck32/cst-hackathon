export default /* GraphQL */ `
  input UserUpdateInput {
    isEnabled: Boolean
    roles: [UserRole]
  }
`;
