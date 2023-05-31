/** Shelter information that meets the conditions */

module.exports = async(shelter) => {
    let minDistance = parseInt(shelter[0].distance, 10);
    let minDistancelat = shelter[0].y;
    let minDistancelng = shelter[0].x;
    let minPlaceName = shelter[0].place_name;

    for (let i = 1; i < shelter.length; i++) {
        const currentDistance = parseInt(shelter[i].distance, 10);
        if (currentDistance < minDistance) {
            minDistance = currentDistance;
            minDistancelat= shelter[i].y;
            minDistancelng = shelter[i].x;
            minPlaceName = shelter[i].place_name;
        }
    }
    return {minDistancelat,minDistancelng,minPlaceName}
}