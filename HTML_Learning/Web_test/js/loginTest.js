const checkLoginID = document.querySelector("#loginID");
const checkLoginPW = document.querySelector("#loginPW");
let loadSet =[];

const masterID = 'master';
const masterPW = 'masterpw1234';

function loginclick() {
    const ID_sett = { 'id' : checkLoginID.value , 'pw' : checkLoginPW.value }
    console.log(checkSetExist(ID_sett))
}

function checkSetExist ( beforeCheckSet ) {
    loadSet = JSON.parse(localStorage.getItem('loginSets'))
    for(i=0; i<loadSet.length; i++) {
        // 마스터 ID 인지 먼저 검사
        if (beforeCheckSet['id'] == masterID ){
            if (beforeCheckSet['pw'] == masterPW ){
                console.log('마스터 계정')
                return 2;
            }
            else {                
                checkLoginPW.value="";
                alert('비밀번호가 틀렸습니다.');
                checkLoginPW.focus();
                return 0;
            }
        }
        // ID 일치 검사
        else if(beforeCheckSet['id'] == loadSet[i]['id']) {
        // PW 일치 검사
            if(beforeCheckSet['pw'] === loadSet[i]['pw']) {
                return 1;
            }
            else {
                checkLoginPW.value="";
                alert('비밀번호가 틀렸습니다.');
                checkLoginPW.focus();
                return 0;
            }
        }
    }
    alert('존재하지 않는 ID입니다.')
    return 0;
}


function GoToIndex () {
    location.href = "Index.html";
}