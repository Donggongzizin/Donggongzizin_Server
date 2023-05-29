const express = require('express');
const findPlaceByKeyword = require('../js/findPlaceByKeyword');
const getMylocationFromMobius = require('../js/getMylocationFromMobius');
const postDirectionUrl = require('../js/postDirectionUrl');

const router = express.Router();


router.get('/earthquake/:container/:resourceName', async (req, res, next) => {
    try {
        const myLocation = await getMylocationFromMobius(req.params.container, req.params.resourceName);
        const parsedData = JSON.parse(myLocation);
        const resource = parsedData["m2m:cin"];
        const latlng = resource["con"];
        console.log('my latlng' , latlng)
        //const [lat,lng] = latlng.split(','); //string 형식일때
        findPlaceByKeyword(latlng.lat,latlng.lng)
            .then(response => {
                res.send('hi');
                console.log('response data' , response.minPlaceName);
                postDirectionUrl(latlng.lat,latlng.lng ,response.minDistancelat, response.minDistancelng, response.minPlaceName);
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

router.get('/', (req,res) => {
    res.send('hi');
})

module.exports = router;