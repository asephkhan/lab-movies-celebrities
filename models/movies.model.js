const { Schema, model} = require('mongoose');
 

const moviesSchema = new Schema(
    {
        title: String,
        genre: String,
        plot: String,
      //  cast:  [{ type: Schema.Types.objectId, ref: 'Celebrity' }]  of celeb ids.
    },
    {
        timestamps: true,
    }
);

const movies = model('Movies', moviesSchema);

module.exports = Movies;