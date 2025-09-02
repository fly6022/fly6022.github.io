const cdn = "https://cdn.jsdelivr.net/gh/fly6022/fly6022.github.io"

const images = [
    'https://api.ee123.net/img/bingimg/dayimg.jpg',
    cdn + '/assets/images/bg/5.jpg'
];
let currentIndex = 0;

function changeBackground() {
    //document.getElementById("bg").style.opacity = 1; // 渐隐
    setTimeout(() => {
        document.getElementById("bg").style.backgroundImage = `url(${images[currentIndex]})`;
        document.getElementById("bg").style.opacity = 1; // 渐显
        currentIndex = (currentIndex + 1) % images.length;
    }, 1000); // 与transition时间一致
}

changeBackground()
setInterval(changeBackground, 15000); // 每15秒切换一次背景