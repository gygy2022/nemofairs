import { useEffect } from "react";


export default function KakaoMap( {title} ) {

  useEffect(() => {

    kakao.maps.load(() => {
        var container = document.getElementById('map');
        var options = {
                  center: new window.kakao.maps.LatLng(37.28592349356621, 127.05954738814944),
                  level: 3
              };
      
        var map = new window.kakao.maps.Map(container, options);
        var markerPosition  = new kakao.maps.LatLng(37.28592349356621, 127.05954738814944); 

        var marker = new kakao.maps.Marker({
          position: markerPosition
      });

      marker.setMap(map);

      var iwContent = `<div style="padding:5px;" className="marker-title">${title}</div>`; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    content : iwContent
});

// 마커에 마우스오버 이벤트를 등록합니다
kakao.maps.event.addListener(marker, 'mouseover', function() {
  // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
    infowindow.open(map, marker);
});

// 마커에 마우스아웃 이벤트를 등록합니다
kakao.maps.event.addListener(marker, 'mouseout', function() {
    // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
    infowindow.close();
});
  
    })
    
  }, []);

  return (
    <>
    <div id="map"/>

    <style jsx>
      {`
      #map{
        width: 100%;
        height: 100%;
      }

      `}
    </style>
    </>
  )
}