// 근무자 정보 넣는 함수. (처음 1번)
// w1 : 심박수, w2 : 혈압, w3 : 혈중산소포화도, w4 : 스트레스
function WorkerInfo (name, age, part, posit, phone, locate, w1, w2, w3, w4) {
    this.name = name;
    this.age = age;
    this.part = part;
    this.posit = posit;
    this.phone = phone;
    this.locate = locate;
    this.w1 = w1;
    this.w2 = w2;
    this.w3 = w3;
    this.w4 = w4;
}

//시간 마다 착용기기의 데이터 업데이트
function ChangeData (human, w1, w2, w3, w4) {
    human.w1 = w1;
    human.w2 = w2;
    human.w3 = w3;
    human.w4 = w4;
}

//human1 방선주 생체정보
h1_w1list = [64,40,0,0,0,0];
h1_w2list = [110,71,0,0,0,0];
h1_w3list = [99,97,96,96,96,95];
h1_w4list = [99,99,100,100,100,100];

//human2 서영석 생체정보
h2_w1list = [71,70,70,70,70,70];
h2_w2list = [100,99,99,98,99,99];
h2_w3list = [99,99,98,98,98,98];
h2_w4list = [40,54,62,65,67,66];

//human3 강성규 생체정보
h3_w1list = [123,117,114,108,106,107];
h3_w2list = [121,117,111,109,106,107];
h3_w3list = [78,79,80,81,82,82];
h3_w4list = [77,65,58,57,57,56];

//human4 문장혁 생체정보
h4_w1list = [82,81,81,81,82,82];
h4_w2list = [89,88,89,88,88,88];
h4_w3list = [89,90,90,90,90,90];
h4_w4list = [55,54,56,56,56,56];

function WriteInfo1(index) {
    document.write('이　　름 : ',workers[index].name)
    document.write('<br>소　　속 : ',workers[index].part)
    document.write('<br>전화번호 : ',workers[index].phone,'<br>')
}
function WriteInfo2(index) {
    document.write('나　　이 : ',workers[index].age)
    document.write('<br>직　　책 : ',workers[index].posit)
    document.write('<br>위　　치 : ',workers[index].locate,'<br>')
}

function CtrlW(index) {
    document.writeln(workers[index].w1)
    document.writeln(workers[index].w2)
    document.writeln(workers[index].w3)
    document.writeln(workers[index].w4)
}


// 배열이랑 객체 이용해서 근무자 목록 선언
let Human1 = new WorkerInfo("방선주",29,"2조","파트장","010-0000-0000","강의실",84,109,99,98)
let Human2 = new WorkerInfo("서영석",30,"2조","파트장","010-0000-0000","강의실",71,100,91,40)
let Human3 = new WorkerInfo("강성규",29,"2조","파트원","010-0000-0000","휴게실",122,129,77,88)
let workers = [ Human1,Human2,Human3 ]

workers.push(Human4 = new WorkerInfo("문장혁",28,"2조","파트원","010-0000-0000","강의실",82,88,89,55))
workers.push(Human5 = new WorkerInfo("이찬영",8,"1조","수면부족","010-0000-0000","숙소",43,78,49,4))

workersMount= workers.length









let test =0;

localStorage.setItem("workersMount",workersMount);
setInterval(function() {
    ChangeData(Human1, h1_w1list[test], h1_w2list[test], h1_w3list[test], h1_w4list[test]);
    ChangeData(Human2, h2_w1list[test], h2_w2list[test], h2_w3list[test], h2_w4list[test]);
    ChangeData(Human3, h3_w1list[test], h3_w2list[test], h3_w3list[test], h3_w4list[test]);
    ChangeData(Human4, h4_w1list[test], h4_w2list[test], h4_w3list[test], h4_w4list[test]);
    test++;
    lightUpdate();
}, 2000); // 1000ms 마다 -> 1초 마다 갱신
