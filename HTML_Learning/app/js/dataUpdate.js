lightUpdate()

let test =0;

localStorage.setItem("workersMount",workersMount);
setInterval(function() {
    if(test <5) {
    ChangeData(Human1, h1_w1list[test], h1_w2list[test], h1_w3list[test], h1_w4list[test]);
    ChangeData(Human2, h2_w1list[test], h2_w2list[test], h2_w3list[test], h2_w4list[test]);
    ChangeData(Human3, h3_w1list[test], h3_w2list[test], h3_w3list[test], h3_w4list[test]);
    ChangeData(Human4, h4_w1list[test], h4_w2list[test], h4_w3list[test], h4_w4list[test]);
    test++;
    lightUpdate();
    }
    else {
        ChangeData(Human1, h1_w1list[test], h1_w2list[test], h1_w3list[test], h1_w4list[test]);
        ChangeData(Human2, h2_w1list[test], h2_w2list[test], h2_w3list[test], h2_w4list[test]);
        ChangeData(Human3, h3_w1list[test], h3_w2list[test], h3_w3list[test], h3_w4list[test]);
        ChangeData(Human4, h4_w1list[test], h4_w2list[test], h4_w3list[test], h4_w4list[test]);
    } 
}, 2000); // 1000ms 마다 -> 1초 마다 갱신