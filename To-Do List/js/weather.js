function onGeoOk(position){

    console.log("You live in")
}

function onGeoError(){
    alert("날씨를 알려드릴 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);