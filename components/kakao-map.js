import { Map, MapMarker } from "react-kakao-maps-sdk"

function KakaoMap() {
  return (
    <Map
      center={{ lat: 37.28592349356621, lng: 127.05954738814944 }}
      style={{ width: "100%", height: "100%" }}
    >
      <MapMarker position={{ lat: 37.28592349356621, lng: 127.05954738814944 }}>
        <div style={{ color: "#000" }}>수원컨벤션센터</div>
      </MapMarker>
    </Map>
  )
}

export default KakaoMap;