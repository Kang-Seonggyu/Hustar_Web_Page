const $toggle = document.querySelector(".toggleSwitch");

$toggle.onclick = () => {
    $toggle.classList.toggle('active');
}


const vid = document.querySelector('#videooo')
console.log(vid);
console.dir(vid);

vid.playbackRate = 8.5;