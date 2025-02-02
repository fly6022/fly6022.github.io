const images = [
    '/assets/images/bg/bg.jpg',
    'https://api.ee123.net/img/bingimg/dayimg.jpg'
];
let currentIndex = 0;
function changeBackground() {
    document.getElementById("bg").style.opacity = 1; // 渐隐
    setTimeout(() => {
        document.getElementById("bg").style.backgroundImage = `url(${images[currentIndex]})`;
        document.getElementById("bg").style.opacity = 1; // 渐显
        currentIndex = (currentIndex + 1) % images.length;
    }, 1000); // 与transition时间一致
}

setInterval(changeBackground, 5000); // 每5秒切换一次背景