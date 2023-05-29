const request = require('request');
const smalletDistance = require('./smallestDistance');
const {newShelter} = require('./checkdistance');

module.exports = async(lat,lng) => {   
        return new Promise((resolve, reject) => {
            var options = {
                'method': 'GET',
                'url': 'https://dapi.kakao.com/v2/local/search/keyword.json?',
                'headers': {
                  'Authorization': 'KakaoAK 931d130f161065118bab283061a1dc18',
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                form: {
                  'query': '지진대피소',
                  'x' : lng,
                  'y' : lat,
                  'radius' : 20000
                }
            };   
            request(options, async function (error, response, body) {
                if (error) {
                    reject(error);
                } else {
                    jsonData = JSON.parse(body);
                    var documents = jsonData.documents;
                    const checkedShelter = newShelter(lat,lng);
                    documents.push(...checkedShelter);
                    console.log(documents);
                    const smallest = await smalletDistance(documents);                  
                    resolve(smallest);
                }
            });
        });
}