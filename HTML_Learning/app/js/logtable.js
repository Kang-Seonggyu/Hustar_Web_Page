window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
    }
});

//
function warning_Write (whatSignal, log_index, warning_value){
    const warningLog_input = document.getElementById('log_input');

    // 새로운 로그 라인 정의하기
    let new_logLine = document.createElement('tr');
        // 인덱스들 정의
        let new_logName = document.createElement('td');
        let new_logPhone = document.createElement('td');
        let new_logWarning = document.createElement('td');
        let new_logDate = document.createElement('td'); 
        let new_logAge = document.createElement('td');
        let new_logPosit = document.createElement('td');
            
    // 정의한 개체 생성하기 
    warningLog_input.insertBefore(new_logLine, warningLog_input.firstChild);
        new_logLine.appendChild(new_logName);
        new_logLine.appendChild(new_logPhone);
        new_logLine.appendChild(new_logWarning);
        new_logLine.appendChild(new_logDate);
        new_logLine.appendChild(new_logAge);
        new_logLine.appendChild(new_logPosit);

    // 개체에 값 집어넣기
    new_logName.innerHTML = workers[log_index].name
    new_logPhone.innerHTML = workers[log_index].phone;
    
    // 시간 집어넣기.
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1).padStart(2,"0");
    const day = String(date.getDate()).padStart(2,"0");
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    new_logDate.innerHTML = `${year}/${month}/${day} - ${hour}:${minute}:${second}`

    new_logAge.innerHTML = workers[log_index].age
    new_logPosit.innerHTML = '-'

    let whatSignalName = ""
    if(whatSignal == 1){
        whatSignalName = "심박수"
    }
    if(whatSignal == 2){
        whatSignalName = "혈압"
    }
    if(whatSignal == 3){
        whatSignalName = "산소포화도"
    }
    if(whatSignal == 4){
        whatSignalName = "스트레스"
    }
    new_logWarning.innerHTML = `<warningLogLight>●</warningLogLight>위험 - ${whatSignalName} : ${warning_value}`
}


function caution_Write (whatSignal, log_index, caution_value){
    const cautionLog_input = document.getElementById('log_input');

    // 새로운 로그 라인 정의하기
    let new_logLine = document.createElement('tr');
        // 인덱스들 정의
        let new_logName = document.createElement('td');
        let new_logPhone = document.createElement('td');
        let new_logWarning = document.createElement('td');
        let new_logDate = document.createElement('td'); 
        let new_logAge = document.createElement('td');
        let new_logPosit = document.createElement('td');
            
    // 정의한 개체 생성하기 
    cautionLog_input.insertBefore(new_logLine, cautionLog_input.firstChild);
        new_logLine.appendChild(new_logName);
        new_logLine.appendChild(new_logPhone);
        new_logLine.appendChild(new_logWarning);
        new_logLine.appendChild(new_logDate);
        new_logLine.appendChild(new_logAge);
        new_logLine.appendChild(new_logPosit);

    // 개체에 값 집어넣기
    new_logName.innerHTML = workers[log_index].name
    new_logPhone.innerHTML = workers[log_index].phone;

    // 시간 집어넣기.
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1).padStart(2,"0");
    const day = String(date.getDate()).padStart(2,"0");
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    new_logDate.innerHTML = `${year}/${month}/${day} - ${hour}:${minute}:${second}`

    // 나이 집어넣기
    new_logAge.innerHTML = workers[log_index].age

    // 비고란.
    new_logPosit.innerHTML = '-'

    let whatSignalName = ""
    if(whatSignal == 1){
        whatSignalName = "심박수"
    }
    if(whatSignal == 2){
        whatSignalName = "혈압"
    }
    if(whatSignal == 3){
        whatSignalName = "산소포화도"
    }
    if(whatSignal == 4){
        whatSignalName = "스트레스"
    }
    new_logWarning.innerHTML = `<cautionLogLight>●</cautionLogLight>주의 - ${whatSignalName} : ${caution_value}`
}