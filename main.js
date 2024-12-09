// COUNTER DESIGN

document.addEventListener("DOMContentLoaded",() =>{
    function counter(id,start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end>start ? 1 : -1,
        step = Math.abs(Math.floor(duration/ range)),
        timer = setInterval(()=>{
            current+=increment;
            obj.textContent=current;
            if(current==end){
                clearInterval(timer);
            }
        },step);
    }
    counter("count1",0,1287,3000);
    counter("count2",100,1358,3000);
    counter("count3",0,1487,3000);
    counter("count4",0,1787,3000);
});

// ACTIVE NAVBAR
let nav = document.querySelector(".navigation-wrap");
window.onscroll=function(){
    if(document.documentElement.scrollTop >20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

if(30<true)
// NAV HIDE

// let navbar = document.querySelectorAll('.nav-link');
// let navcollapse = document.querySelectorAll('.collapse .navbar-collapse');
// navbar.forEach(function(a){
//     a.addEventListener("click",function(){
//         // navcollapse.classList.remove("show") ;
//     })
// })