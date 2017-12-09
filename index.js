window.onload = function () {
    var aInput = document.getElementsByTagName('input');
    var arrA = document.getElementsByTagName('a');
    var arr = ['Name', 'Id']

    arrA[0].onclick = function () {

        if (aInput[0].value === 'Name' || aInput[0].value === '') {
            alert('兄弟，名字呢！');
        }
        if (aInput[1].value === 'Id' || aInput[0].value === '') {
            alert('兄弟，学号都不记得了！');
        }
        if (aInput[0].value !== 'Name' && aInput[0].value !== '') {
            alert(aInput[0].value + '，恭喜你，' + '你以成功登陆');
        }
    }
    function snowFlow(left, height, src) {
        var container = document.createElement('div');
        var pic = document.createElement('img');
        var snowFlow = document.getElementById('snowFlow');
        pic.className = 'pic';
        container.className = 'container';
        snowFlow.appendChild(container);
        container.appendChild(pic);
        container.style.left = left + 'px';
        container.style.height = height + 'px';
        pic.src = src;
        setTimeout(function () {
            snowFlow.removeChild(container);
        }, 5000);
    }
    setInterval(function () {
        var left = Math.random() * window.innerWidth;
        var height = Math.random() * window.innerHeight;
        var src = 'img/snow.png';
        snowFlow(left, height, src);
    }, 500)
}