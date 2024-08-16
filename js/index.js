//轮播图样式
// let img1=document.getElementById('img1');
// let lis = document.querySelector('.banner_btn>li');
// let slideBanner=document.querySelector('.slide_banner');

//分装切换函数
function banner() {
    //设置图片路径
}
let img = document.getElementById('img');
let prev =document.querySelector('.prev');
let next =document.querySelector('.next');
let lis =document.querySelectorAll('.banner_btn>li');
let slideBanner =document.querySelector('.slide_banner');
let imgArr =['practise-show-img1.jpg','practise-show-img2.jpg','practise-show-img3.jpg','practise-show-img4.jpg','practise-show-img5.jpg'];
let i=0;

// 封装切换的函数
function banner(){
    // 清空样式
    for(let k=0;k<lis.length;k++)
        {
            lis[k].className = '';
        }
    // 设置图片的路径
    img.src='images/'+imgArr[i];
    // 设置点的样式
        lis[i].className = 'btn_active';
}
// 封装自动切换的函数
function autoBanner(){
    i++;
    if(i>imgArr.length-1){
        i=0;
    }
    banner();
}

let timer = setInterval(autoBanner,3000);
// 鼠标移入停止定时器
slideBanner.onmouseover =function(){
    clearInterval(timer);
}
slideBanner.onmouseout =function(){
    timer= setInterval(autoBanner,3000);
}
// 下一张
next.onclick=function(){
    i++;
    if(i>imgArr.length-1){
        i=0;
    }
    // 设置图片路径
    banner();
}
// 上一张
prev.onclick=function(){
    i--;
    if(i<0){
        i=imgArr.length-1;
    }
    // 设置图片路径
    banner();
}
// 点击点
// 拿到所有点
for(let j=0;j<lis.length;j++)
    {
        // 绑定点击事件
        lis[j].onclick =function(){
            // 设置图片路径
            i=j;
            banner();
        }
    }







// 给页面绑定滚动监听事件
window.onscroll=function(){
    // 获取滚动条距上面的距离
    let top = document.documentElement.scrollTop||document.body.scrollTop;
    // 获取元素距上面的距离
    let top1 =header.offsetHeight+slideBanner.offsetHeight+40;
    console.log(top1);
    // 判断
    if(top>=top1){
        // 固定定位
        elevator.className = ' elevator elevator-fix';
    }
    else{
        elevator.className = 'elevator';
    }


    //楼层效果
    //判断top距上面的距离，对应的a修改字体颜色
    if(top>=top1&&top<floor[0]){
        clear();
        eleA[0].className = 'active';
    }
    else if(top>=floor[0]&&top<=floor[1]){
        clear();
        eleA[1].className = 'active';
    }
    else if(top>=floor[1]&&top<floor[2]){
        clear();
        eleA[2].className = 'active';
    }
    else if(top>=floor[2]){
        clear();
        eleA[3].className = 'active';
    }
    if(top<top1){
        clear();
    }

    // 吸顶效果
    if(top>=top1-62){
        search.className = 'header-fix';
        searchLog.style.display='block';
        wrap.className = 'wrap';
        form.style.marginTop='7px';
        form.style.marginLeft = '260px';
    }
}
