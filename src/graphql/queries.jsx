import { gql } from '@apollo/client';

export const GetDiningTable_id_or_sku = gql`
  query GetDiningTable_id_or_sku($id: ID, $sku: String) {
    diningTables(filters: { 
        or: [
            { id: { eq: $id } }, 
            { sku: { eq: $sku } }
        ]
    }) 
    {
        data {
            id
            attributes {
                sku
                description
                images {
                    data {
                    attributes {
                        url
                    }
                    }
                }
            }
        }
    }
  }
`;
