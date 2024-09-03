import { gql } from '@apollo/client';

// Mutation to delete a dining table by ID
export const DELETE_DINING_TABLE = gql`
  mutation deleteDiningTable($id: ID!) {
    deleteDiningTable(id: $id) {
      data {
        id
      }
    }
  }
`;
