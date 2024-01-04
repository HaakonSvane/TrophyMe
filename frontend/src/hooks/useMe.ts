import { graphql, useLazyLoadQuery } from "react-relay";

export const useMe = () => {
    return useLazyLoadQuery(
        graphql`
            query useMeQuery {
                me {
                    id
                }
            }
        `,
        {},
        { fetchPolicy: "store-only" },
    );
};
