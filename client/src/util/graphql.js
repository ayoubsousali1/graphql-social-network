import gql from "graphql-tag";

export const FETCH_POSTS_QUERY = gql`
{
    getPosts {
        likeCount
        commentCount
        id
        body
        username
        createdAt
        comments {
        body
        username
        createdAt
        }
        likes {
        username
        }
    
  }
}
`;