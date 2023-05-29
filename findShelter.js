var ps = new kakao.maps.services.Places(); 

// 키워드로 장소를 검색합니다
ps.keywordSearch('지진대피소', placesSearchCB,{location: new kakao.maps.LatLng(mylat, mylng)}); 

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB (data, status, pagination) {
    try{if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        for (var i=0; i<data.length; i++) {
            displayMarker(data[i]);    
            totalDistance[data[i].id] = data[i].distance;
        }                     
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        console.log(totalDistance);
    }
    }catch(error) {
        console.error(error);
    }
}