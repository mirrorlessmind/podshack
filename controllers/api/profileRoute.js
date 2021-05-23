const { Client } = require('podcast-api');
const router = require('express').Router();

// If api_key is null, the sdk will connect to a mock server that'll
// return fake data for testing purpose
const client = Client({
    apiKey: process.env.LISTEN_API_KEY || null,
});

router.delete('/:id', async (req,res) => {
    try {
      const playlist = await playlist.destroy({
        where: {
          id: req.params.id,
  
        },
      }); 
      if (!playlist) {
        res.status(404).json({ message: 'No playlist found'});
        return;
      } 
      res.status(200).json(playlist);
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;