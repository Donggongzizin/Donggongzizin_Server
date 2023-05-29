const request = require('request');

module.exports = async(startinglat,startinglng,endlat,endlng,place_name) => {
    return new Promise((resolve,reject) =>{
        const options = {
            'method': 'POST',
            'url': 'http://203.253.128.177:7579/Mobius/KETIDGZ/mylocation',
            'headers': {
              'Accept': 'application/json',
              'X-M2M-RI': '12345',
              'X-M2M-Origin': '{{aei}}',
              'Content-Type': 'application/vnd.onem2m-res+json; ty=4'
            },
            body: `{\n    "m2m:cin": {\n        "con": "kakaomap://route?sp=${startinglat},${startinglng}&ep=${endlat},${endlng}&by=FOOT || https://map.kakao.com/link/to/${place_name},${endlat},${endlng}"\n    }\n}`         
          };
          request(options, function (error, response) {
            if (error) {
                reject(error);
            } else {
                resolve(response.body)
            }
        });
    });
}