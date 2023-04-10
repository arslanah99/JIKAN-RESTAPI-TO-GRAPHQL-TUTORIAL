const axios = require('axios');

const resolvers = {
    Query: {
        anime: async (parent, {id}) => {
            const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`)
            const animeData = response.data.data;

            const genres = animeData.genres.map((genre) => ({
                mal_id: genre.mal_id,
                name: genre.name
            }))

            return {
                mal_id: animeData.mal_id,
                title: animeData.title,
                images: animeData.images,
                episodes: animeData.episodes,
                synopsis: animeData.synopsis,
                genres: genres,
            }
        }
    }
}

module.exports = resolvers;