workersMount = localStorage.getItem("workersMount")

function lightUpdate() {
    for (i = 0; i < workersMount*4; i++)  {
    
        let index = parseInt(i/4);
        let no_light = parseInt(i%4+1);
        let w_write = document.getElementById(`w${i+1}`);
        let writeValue = 0;
        
        if (no_light == 1) {
            writeValue = workers[index].w1;
            light1(writeValue, w_write)
        }
        else if (no_light == 2) {
            writeValue = workers[index].w2;
            light2(writeValue, w_write)
        }
        else if (no_light == 3) {
            writeValue = workers[index].w3;
            light3(writeValue, w_write)
        }
        else {
            writeValue = workers[index].w4;
            light4(writeValue, w_write)
        }
    
        w_write.innerHTML = writeValue;
    }   
}

//심박수 신호 제어
function light1(heartRate, WantToChangeSingal) {
    if (heartRate>=150) {
        WantToChangeSingal.style.background = 'red';
    }
    else if (heartRate>=120) {
        WantToChangeSingal.style.background = 'orange';
    }
    else if (heartRate>=80) {
        WantToChangeSingal.style.background = 'rgb(16, 242, 16)';
    }
    else if (heartRate>=55) {
        WantToChangeSingal.style.background = 'orange';
    }
    else {
        WantToChangeSingal.style.background = 'red';
    }
    
}

// 혈압 신호 제어
function light2(BloodPressure, WantToChangeSingal) {
    if (BloodPressure>=140) {
        WantToChangeSingal.style.background = 'red';
    }
    else if (BloodPressure>=120) {
        WantToChangeSingal.style.background = 'orange';
    }
    else if (BloodPressure>=80) {
        WantToChangeSingal.style.background = 'rgb(16, 242, 16)';
    }
    else if (BloodPressure>=60) {
        WantToChangeSingal.style.background = 'orange';
    }
    else {
        WantToChangeSingal.style.background = 'red';
    }   
}

// 혈중산소포화도 신호 제어
function light3(BloodPressure, WantToChangeSingal) {
    if (BloodPressure>=80) {
        WantToChangeSingal.style.background = 'rgb(16, 242, 16)';
    }
    else if (BloodPressure>=60) {
        WantToChangeSingal.style.background = 'orange';
    }
    else {
        WantToChangeSingal.style.background = 'red';
    } 
}

// 스트레스 신호 제어
function light4(BloodPressure, WantToChangeSingal) {
    if (BloodPressure>=80) {
        WantToChangeSingal.style.background = 'red';
    }
    else if (BloodPressure>=60) {
        WantToChangeSingal.style.background = 'orange';
    }
    else {
        WantToChangeSingal.style.background = 'rgb(16, 242, 16)';
    } 
}
