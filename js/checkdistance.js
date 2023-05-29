const {shelter} = require('./shelter')


function getDistance(lat1, lon1, lat2, lon2) {
    const earthRadius = 6371; // 지구 반지름 (단위: km)
  
    const degToRad = (deg) => {
      return deg * (Math.PI / 180);
    };
  
    const dLat = degToRad(lat2 - lat1);
    const dLon = degToRad(lon2 - lon1);
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degToRad(lat1)) *
        Math.cos(degToRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;
  
    return distance;
}

const newShelter = (startLat,startLng) => {
    return shelter.map(item => {
    const distance = Math.floor(getDistance(startLat, startLng, item.y, item.x) * 1000);

    return {
      ...item,
      distance: distance
    };
  })
}

module.exports = {
  newShelter,
}

