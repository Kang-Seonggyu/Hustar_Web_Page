let chartIndex = localStorage.getItem("selectIndex");
let usingDataIndex = 0
let usingData1 = []
let usingData2 = []
let usingData3 = []
let usingData4 = []

var ctx1 = document.getElementById("heartRate_chart");

let input_X1Label = ["1일", "2일", "3일", "4일", "5일", "6일", "7일", "8일", "9일", "10일", "11일", "12일", "13일","14일"]

let input_1DataA = [98, 111, 105, 84, 85, 129, 100, 102, 105, 87, 99, 108, 110, 104]
let input_1DataB = [100, 102, 98, 101, 110, 105, 91, 102, 105, 97, 85, 88, 102, 84]
let input_1DataC = [78, 81, 85, 84, 85, 79, 93, 82, 105, 87, 79, 76, 78, 84]
let input_1DataD = [102, 105, 87, 99, 108, 110, 104, 98, 111, 105, 84, 85, 129, 100]

if(chartIndex == 0) {usingData1 = input_1DataA}
else if(chartIndex == 1) {usingData1 = input_1DataB}
else if(chartIndex == 2) {usingData1 = input_1DataC}
if(chartIndex == 3) {usingData1 = input_1DataD};

// Area Chart Example
let myLineChart1 = new Chart(ctx1, {

    type: 'line',
    data: {
        labels: input_X1Label,
        datasets: [{
        label: "심박수",
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
        data: usingData1,
        }],
    },
    options: {
        title : {
            display :true,
            fontSize : 30,
            fontColor : 'black',
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
                fontSize : 15,
                fontColor : 'black',
                maxTicksLimit: 7  // X축 선의 갯수 (0포함)
            }
        }],
        yAxes: [{
            ticks: {
                fontSize : 15,
                fontColor : 'black',
                min: 40,
                max: 200,
                stepSize : 40,
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

//////////////////////////////////////////////////////////////////////////////////
const ctx2 = document.getElementById("bloodpressure_chart");

let input_X2Label = ["1일", "2일", "3일", "4일", "5일", "6일", "7일", "8일", "9일", "10일", "11일", "12일", "13일","14일"]

let input_2DataA = [100, 80, 95, 104, 80, 109, 90, 92, 105, 87, 99, 98, 104, 121]
let input_2DataB = [78, 81, 85, 84, 85, 79, 93, 82, 105, 87, 79, 76, 78, 84]
let input_2DataC = [102, 105, 87, 99, 108, 110, 104, 98, 111, 105, 84, 85, 129, 100]
let input_2DataD = [100, 102, 98, 101, 110, 105, 91, 102, 105, 97, 85, 88, 102, 84]

if(chartIndex == 0) {usingData2 = input_2DataA}
else if(chartIndex == 1) {usingData2 = input_2DataB}
else if(chartIndex == 2) {usingData2 = input_2DataC}
if(chartIndex == 3) {usingData2 = input_2DataD};

// Area Chart Example
let myLineChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: input_X2Label,
        datasets: [{
        label: "혈압",
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
        data: usingData2,
        }],
    },
    options: {
        title : {
            display :true,
            fontSize : 30,
            fontColor : 'black',
            text : '최근 2주 혈압'
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
                fontSize : 15,
                fontColor : 'black',
                maxTicksLimit: 7  // X축 선의 갯수 (0포함)
            }
        }],
        yAxes: [{
            ticks: {
                fontSize : 15,
                fontColor : 'black',
                min: 40,
                max: 200,
                stepSize : 40,
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

//////////////////////////////////////////////////////////////////////////////////
const ctx3 = document.getElementById("O2_chart");

let input_X3Label = ["1일", "2일", "3일", "4일", "5일", "6일", "7일", "8일", "9일", "10일", "11일", "12일", "13일","14일"]

let input_3DataA = [98, 90, 94, 94, 95, 97, 90, 92, 85, 87, 99, 93, 90, 84]
let input_3DataB = [98, 91, 95, 94, 95, 99, 93, 92, 95, 97, 99, 96, 98, 94]
let input_3DataC = [99, 99, 97, 99, 98, 99, 99, 98, 94, 95, 94, 95, 92, 99]
let input_3DataD = [90, 92, 98, 91, 90, 95, 91, 92, 95, 97, 95, 88, 92, 94]

if(chartIndex == 0) {usingData3 = input_3DataA}
else if(chartIndex == 1) {usingData3 = input_3DataB}
else if(chartIndex == 2) {usingData3 = input_3DataC}
if(chartIndex == 3) {usingData3 = input_3DataD};

// Area Chart Example
let myLineChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: input_X3Label,
        datasets: [{
        label: "산소포화도",
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
        data: usingData3,
        }],
    },
    options: {
        title : {
            display :true,
            fontSize : 30,
            fontColor : 'black',
            text : '최근 2주 산소포화도'
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
                fontSize : 15,
                fontColor : 'black',
                maxTicksLimit: 7  // X축 선의 갯수 (0포함)
            }
        }],
        yAxes: [{
            ticks: {
                fontSize : 15,
                fontColor : 'black',
                min: 0,
                max: 100,
                stepSize : 20,
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

//////////////////////////////////////////////////////////////////////////////////
const ctx4 = document.getElementById("stress_chart");

let input_X4Label = ["1일", "2일", "3일", "4일", "5일", "6일", "7일", "8일", "9일", "10일", "11일", "12일", "13일","14일"]

let input_4DataA = [40, 58, 68, 74, 65, 37, 52, 46, 50, 48, 39, 40, 62, 50]
let input_4DataB = [38, 41, 55, 44, 45, 49, 33, 52, 55, 47, 59, 66, 48, 54]
let input_4DataC = [29, 49, 37, 39, 38, 29, 49, 38, 34, 25, 44, 35, 32, 39]
let input_4DataD = [30, 42, 58, 41, 40, 25, 31, 42, 25, 27, 35, 28, 22, 42]

if(chartIndex == 0) {usingData4 = input_4DataA}
else if(chartIndex == 1) {usingData4 = input_4DataB}
else if(chartIndex == 2) {usingData4 = input_4DataC}
if(chartIndex == 3) {usingData4 = input_4DataD};

// Area Chart Example
let myLineChart4 = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: input_X4Label,  // Here
        datasets: [{
        label: "스트레스",
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
        data: usingData4,      // Here
        }],
    },
    options: {
        title : {
            display :true,
            fontSize : 30,
            fontColor : 'black',
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
                fontSize : 15,
                fontColor : 'black',
                maxTicksLimit: 7  // X축 선의 갯수 (0포함)
            }
        }],
        yAxes: [{
            ticks: {
                fontSize : 15,
                fontColor : 'black',
                min: 0,
                max: 100,
                stepSize : 20,
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
