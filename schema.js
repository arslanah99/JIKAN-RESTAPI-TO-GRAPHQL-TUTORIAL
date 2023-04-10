const {gql} = require('apollo-server-express');

const typeDefs = gql`
type Anime {
    mal_id: ID!
    title: String
    images: AnimeImages
    episodes: Int
    synopsis: String
    genres: [Genre]
}
type AnimeImages {
    jpg: AnimeImage
    webp: AnimeImage
  }
  
  type AnimeImage {
    image_url: String
    small_image_url: String
    large_image_url: String
  }
  
  type Genre {
    mal_id: ID!
    name: String
  }

  type Query {
    anime(id: ID!): Anime
  }

`

module.exports = typeDefs;