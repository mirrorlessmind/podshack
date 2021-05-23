const { Client } = require('podcast-api');
const router = require('express').Router();

// If api_key is null, the sdk will connect to a mock server that'll
// return fake data for testing purpose
const client = Client({
    apiKey: process.env.LISTEN_API_KEY || null,
});

router.get('/genre', (req, res) => {
    client.fetchBestPodcasts({ 
        genre_id: 93,
        page: 2, 
        region: 'us' 
    })
    .then(genreDB => res.json(genreDB))
    .catch(err => {
        console.log(err);
        res.json(500).json(err);
    })
});
  



module.exports = router;