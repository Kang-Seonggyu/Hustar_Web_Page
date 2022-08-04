const clock = document.querySelector("#clock");
const lastUpdate = document.querySelector("#lastUpdate");

function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock.innerHTML = `${hour}:${minute}:${second}`;
}

function lastinfoUpdate() {
    const info_date = new Date();
    const info_month = String(info_date.getMonth()+1);
    const info_day = String(info_date.getDay());
    const info_hour = String(info_date.getHours()).padStart(2,"0");
    const info_minute = String(info_date.getMinutes()).padStart(2,"0");
    const info_second = String(info_date.getSeconds()).padStart(2,"0");
    lastUpdate.innerHTML = `<strong>Last Update : ${info_month}/${info_day} ${info_hour}:${info_minute}:${info_second}</strong>`;
}

// 시간 나타내기
getClock(); // 처음 시간 나타내기
setInterval(getClock, 1000); // 1000ms 마다 -> 1초 마다 갱신

lastinfoUpdate();
setInterval(lastinfoUpdate, 60000);