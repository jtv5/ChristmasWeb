window.onload = function () {
    var oFigure = document.getElementById('scroll_one');
    var oFigureOne = document.getElementById('scroll_two');
    var oFigureTwo = document.getElementById('scroll_three');
    var oFigureThree = document.getElementById('scroll_four');

    var oDiv = document.getElementById('float_top_one');
    var oDiv1 = document.getElementById('float_top_two');
    var oDiv2 = document.getElementById('float_top_three');
    var oDiv3 = document.getElementById('float_top_four');

    var oDiv4 = document.getElementById('wish_background');
    var aDiv = oDiv4.getElementsByTagName('div');
    var str = '';

    var oBtn = document.getElementById('wish_button');

    var oDiv5 = document.getElementById('myself_wish_div');
    var arrWish = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]//这个数组用来存储愿望
    var arrPeople = ['张三', '李四', '王五', '小六', '老八', '混九', '满十', '老十一', '倔十二', '慢十三', '醉十四', '咳十五']
    //上面的数组用来存愿望，名字不要介意
    var oBtn1 = document.getElementById('check_others_btn');
    var oBtn2 = document.getElementById('self_wish');
    var num = 0;
    var len = arrPeople.length;

    var oDiv6 = document.getElementById('green_leave_left');
    var oDiv7 = document.getElementById('green_leave_right');
    var oH1 = document.getElementById('red_wish');
    var oP = document.getElementById('first_p');
    var oDiv8 = document.getElementById('pile_gift');
    var oDiv9 = document.getElementById('deer_box');
    var oDiv10 = document.getElementById('myself_wish');
    var oDiv11 = document.getElementById('check_others_wish');
    var oDiv12 = document.getElementById('wish_background');
    var oA1 = document.getElementById('skip');
    var oA2 = document.getElementById('skip1');
    var oA3 = document.getElementById('out_btn');
    var oA4 = document.getElementById('out_btn_bottom');
    var oA5 = document.getElementById('skip_top');
    var oDiv13 = document.getElementById('myself_wish_big');
    var oDiv14 = document.getElementById('wish_my_wish');


    for (i = 0; i < 6; i++) {
        str += '<div class="auto_wish">' + '</div>'
    }
    oDiv4.innerHTML = str;

    oFigure.onmouseover = function () {
        oDiv.style.display = 'block';
    }
    oFigureOne.onmouseover = function () {
        oDiv1.style.display = 'block';
    }
    oFigureTwo.onmouseover = function () {
        oDiv2.style.display = 'block';
    }
    oFigureThree.onmouseover = function () {
        oDiv3.style.display = 'block';
    }

    oFigure.onmouseout = function () {
        oDiv.style.display = 'none';
    }
    oFigureOne.onmouseout = function () {
        oDiv1.style.display = 'none';
    }
    oFigureTwo.onmouseout = function () {
        oDiv2.style.display = 'none';
    }
    oFigureThree.onmouseout = function () {
        oDiv3.style.display = 'none';
    }

    //下雪特效的开始
    function SnowFlow(left, height, src) {
        var container = document.createElement('div');
        var pic = document.createElement('img');
        var SnowFlow = document.getElementById('top');
        pic.className = 'picNext';
        container.className = 'container';
        SnowFlow.appendChild(container);
        container.appendChild(pic);
        container.style.left = left + 'px';
        container.style.height = height + 'px';
        pic.src = src;
        setTimeout(function () {
            SnowFlow.removeChild(container);
        }, 5000);
    }
    setInterval(function () {
        var left = Math.random() * window.innerWidth;
        var height = Math.random() * window.innerHeight;
        var src = 'img/snow.png';
        SnowFlow(left, height, src);
    }, 500)
    //特效结束

    oBtn2.onclick = function () {
        if (oDiv13.innerHTML == '' && '<br>' || oDiv13.innerHTML == '') {
            alert('兄弟写点内容吧!');
        } else {
            console.log(oDiv13.innerHTML)
            oDiv14.innerHTML = '我的愿望：' + oDiv13.innerHTML;
        }
    }

    oBtn1.onclick = function () {
        for (i = 0; i < 6; i++) {
            aDiv[i].innerHTML = arrPeople[i + num] + '的愿望：' + arrWish[i + num];
        }
        num = num + 6;
        if (num > len - 1) {
            num = 0;
        }
    }
    oA1.onclick = function () {
        oDiv6.style.display = 'none';
        oDiv7.style.display = 'none';
        oDiv8.style.display = 'none';
        oDiv9.style.display = 'none';
        oDiv10.style.display = 'flex';
        oH1.style.display = 'none';
        oP.style.display = 'none';
        oDiv11.style.display = 'none';
        oDiv12.style.display = 'none';
    }
    oA2.onclick = function () {
        oDiv6.style.display = 'none';
        oDiv7.style.display = 'none';
        oDiv8.style.display = 'none';
        oDiv9.style.display = 'none';
        oH1.style.display = 'none';
        oP.style.display = 'none';
        oDiv10.style.display = 'none';
        oDiv11.style.display = 'flex';
        oDiv12.style.display = 'flex';
    }
    oA3.onclick = function () {
        oDiv6.style.display = 'block';
        oDiv7.style.display = 'block';
        oDiv8.style.display = 'block';
        oDiv9.style.display = 'block';
        oDiv10.style.display = 'none';
        oH1.style.display = 'block';
        oP.style.display = 'block';
        oDiv11.style.display = 'none';
        oDiv12.style.display = 'none';
    }
    oA4.onclick = function () {
        oDiv6.style.display = 'block';
        oDiv7.style.display = 'block';
        oDiv8.style.display = 'block';
        oDiv9.style.display = 'block';
        oH1.style.display = 'block';
        oP.style.display = 'block';
        oDiv10.style.display = 'none';
        oDiv11.style.display = 'none';
        oDiv12.style.display = 'none';
    }
    oA5.onclick = function () {
        oDiv6.style.display = 'block';
        oDiv7.style.display = 'block';
        oDiv8.style.display = 'block';
        oDiv9.style.display = 'block';
        oH1.style.display = 'block';
        oP.style.display = 'block';
        oDiv10.style.display = 'none';
        oDiv11.style.display = 'none';
        oDiv12.style.display = 'none';
    }
}