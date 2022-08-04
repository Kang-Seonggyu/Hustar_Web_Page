//전체를 담을 창
let enlargeBOX = document.getElementById('enlargeBox');
// 프로필 이미지칸
let enlargeIMG = document.getElementById('enlargeImg');
// 프로필 정보칸 1,2
let enlargeInfo1 = document.getElementById('info1');
let enlargeInfo2 = document.getElementById('info2');
// 띄워줄 정보값
let workerSelect = localStorage.getItem("workerSelect")
let selectIndex = localStorage.getItem("selectIndex")

enlargeIMG.src = `image/${workerSelect}.jpg`;
enlargeIMG.onerror = function(){this.src = "image/account.png"}; // image 없을 시 기본 이미지 출력
updateEnlarge()

function updateEnlarge() {
    enlargeInfo1.innerHTML = '이　　름 : '+workers[selectIndex].name+'<br>소　　속 : '+workers[selectIndex].part+'<br>전화번호 : '+workers[selectIndex].phone+'<br>';
    enlargeInfo2.innerHTML = '나　　이 : '+workers[selectIndex].age+'<br>직　　책 : '+workers[selectIndex].posit+'<br>위　　치 : '+workers[selectIndex].locate+'<br>';
}

/*
const profiles = document.querySelectorAll(".profile-list")

console.dir(profiles)

profiles.forEach(function(element){
    element.addEventListener("click", newpage)
});

function newpage(target) {
    const link = 'enlarge.html';
    console.log(target)
    console.log(target.path[1]);
    window.open(link,'vucket',"width=800, height=600");
}*/
//*[@id="profile0"]/p[1]/text()[1]


/*
if (target.srcElement.className === "profile-list") {
    console.log("yes");
} else {

    console.dir(target.srcElement);
    ////부모객체불러오기
    console.log(target.srcElement.parentElement)
    
    //target = target.srcElement.parentElement;
    //newpage(target);

        
    //console.log(target.srcElement.className)
    //console.dir(target.srcElement)
    //// 자식 객체 요소 선택
    //console.log(target.srcElement.children[1])
    //console.dir(target.srcElement)
    //console.dir(target)
    console.log(target.path);
    //console.log(target.path[1]);
}
*/