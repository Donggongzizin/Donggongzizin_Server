const request = require('request');

module.exports = async() => {
    return new Promise((resolve,reject) =>{
            const options = {
            method: 'GET',
            url: `http://203.253.128.177:7579/Mobius/KETIDGZ/mylocation/latest`,
            headers: {
                'Accept': 'application/json',
                'X-M2M-RI': '12345',
                'X-M2M-Origin': 'SOrigin'
            }
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