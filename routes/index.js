const express = require('express');
const findPlaceByKeyword = require('../js/findPlaceByKeyword');
const getMylocationFromMobius = require('../js/getMylocationFromMobius');
const postDirectionUrl = require('../js/postDirectionUrl');

const router = express.Router();


router.get('/earthquake', async (req, res, next) => {
    try {
        const myLocation = await getMylocationFromMobius();
        const parsedData = JSON.parse(myLocation);
        const resource = parsedData["m2m:cin"];
        const latlng = resource["con"];
        console.log('my latlng' , latlng)
        const [lat, lng] = latlng.split('||'); 
        findPlaceByKeyword(lat,lng)
            .then(response => {
                res.send('Ack');
                postDirectionUrl(lat,lng ,response.minDistancelat, response.minDistancelng, response.minPlaceName);
            })
            .catch(error => {
                console.error(error);
                next(error);
            });
        } catch (error) {
            console.error(error);
            next(error);
        }        
});

module.exports = router;