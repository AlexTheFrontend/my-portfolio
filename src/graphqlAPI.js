export const GRAPHQL_API = "http://localhost:3333";

export const GET_POSTS_QUERY = `
query Post{
    allPost{
      _id,
      title,
      slug{
        current
      }
      mainImage{
        asset{
          _id,
          url,
          altText
        }
      }
    }
  }
`;
