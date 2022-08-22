const weather = document.querySelector("#weather");
const where = document.querySelector("#where");
const humid = document.querySelector("#humid");
const API_KEY = "916677328d9c582c4848e517f8a6c942";

function getSuccess(position) {
    const lat = position.coords.latitude;   // 현재 나의 위도
    const lon = position.coords.longitude;  // 현재 나의 경도

    // 날씨 Api를 얻는 페이지 : https://api.openweathermap.org
    // &units=metric 이 없으면 화씨 온도값이 나옴
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    // fetch는 url을 직접 열지 않고 그 파일을 대신 열어주는 JS의 기능 
    // 'F12'를 누르고 'Network'란의 'weather...'요소 클릭 후 Preview에 그 내용 확인 가능. 
    // fetch는 응답을 기다려야함. 그 구문이 '.then(response => 기능)'
    fetch(url)  
        .then((response) => response.json())    // 응답한 것을 json파일로 처리. => 내용 추출
        .then((data) => {                       // 추출한 내용에서 Data 선택
            where.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp} / ${data.sys.country}` ;
            humid.innerText = `${data.main.humidity} %`;
        });
}

function getFail() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(getSuccess, getFail);