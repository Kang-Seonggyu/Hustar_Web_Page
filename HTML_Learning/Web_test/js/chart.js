// 축 값 설정
const input_X1Label = ["1시", "2시", "3시", "4시", "5시", "6시", "7시", "8시", "9시", "10시", "11시", "12시", "13시"];
const input_Y1Label = 200;
// 넣을 데이터 값 설정.
let input_1Data = [98, 111, 105, 84, 85, 129, 100, 102, 105, 87, 99, 108, 110, 104]

let ctx1 = document.getElementById("heartChart");
let myLineChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: input_X1Label,
        datasets: [{
        label: "심박수",
        lineTension: 0.5,
        backgroundColor: "rgba(2,200,216,0.2)",
        borderColor: "rgba(2,117,0,1)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(200,117,216,1)",
        pointBorderColor: "rgba(0,0,0,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(2,117,216,1)",
        pointHitRadius: 20,
        pointBorderWidth: 2,
        data: input_1Data,
        }],
    },
    options: {
        title : {
        display :true,
        fontSize : 45,
        text : '최근 2주 심박수평균'
        },
        scales: {
        xAxes: [{
            time: {
            unit: 'date'
            },
            gridLines: {
            display: false
            },
            ticks: {
                fontSize : 30,
                maxTicksLimit: 7  // X축 선의 갯수 (0포함)
            }
        }],
        yAxes: [{
            ticks: {
                fontSize : 30,   
                min: 0,
                max: input_Y1Label,
                maxTicksLimit: 7  // Y축 선의 갯수 (0포함)
            },
            gridLines: {
            color: "rgba(0, 0, 0, .125)",
            }
        }],
        },
        legend: {
        display: false
        }
    }
});


const input_X2Label = ["1시", "2시", "3시", "4시", "5시", "6시", "7시", "8시", "9시", "10시", "11시", "12시", "13시"];
const input_Y2Label = 150;
// 넣을 데이터 값 설정.
let input_2Data = [100, 80, 95, 104, 80, 109, 90, 92, 105, 87, 99, 98, 104, 121]

let ctx2 = document.getElementById("bloodPressureChart");
let myLineChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: input_X2Label,
        datasets: [{
        label: "",
        lineTension: 0.5,
        backgroundColor: "rgba(2,0,216,0.2)",
        borderColor: "rgba(2,117,0,1)",
        pointRadius: 5,
        pointBackgroundColor: "rgba(200,117,216,1)",
        pointBorderColor: "rgba(0,0,0,0.8)",
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(2,117,216,1)",
        pointHitRadius: 20,
        pointBorderWidth: 2,
        data: input_2Data,
        }],
    },
    options: {
        title : {
        display :true,
        fontSize : 45,
        text : '최근 2주 스트레스'
        },
        scales: {
        xAxes: [{
            time: {
            unit: 'date'
            },
            gridLines: {
            display: false
            },
            ticks: {
                fontSize : 30,
                maxTicksLimit: 7  // X축 선의 갯수 (0포함)
            }
        }],
        yAxes: [{
            ticks: {
                fontSize : 30,  
                min: 0,
                max: 200,
                maxTicksLimit: 7  // Y축 선의 갯수 (0포함)
            },
            gridLines: {
            color: "rgba(0, 0, 0, .125)",
            }
        }],
        },
        legend: {
        display: false
        }
    }
});


var ctx3 = document.getElementById("stressChart");
var myPieChart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ["Blue", "Red", "Yellow", "Green","purple"],
        labelFontSize : 30,
        datasets: [{
        data: [12.21, 15.58, 11.25, 8.32, 10.03],
        backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745', 'purple'],
        }],
    },
});
