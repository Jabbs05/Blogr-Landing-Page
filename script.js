const clicker = document.querySelectorAll('.Product'); 
const one =document.querySelector('.one');
const two =document.querySelector('.two');
const three =document.querySelector('.three');
const spin =document.querySelector('.upside');
const spins =document.querySelector('.upside1');
const spinss =document.querySelector('.upside2');

console.log(one);

clicker[0].style.display = "none";
clicker[1].style.display = "none";
clicker[2].style.display = "none";

function clicks(){
if (clicker[0].style.display === "none") {
    clicker[0].style.display = "flex"
    spin.style.transform = "rotate(180deg)"
    spin.style.transition = "0.5s"
    clicker[1].style.display = "none";
    clicker[2].style.display = "none";
    spins.style.transform = "rotate(0deg)"
    spinss.style.transform = "rotate(0deg)"
} else {
    clicker[0].style.display = "none";
    spin.style.transform = "rotate(0deg)"
    spin.style.transition = "0.5s"
}
}
one.addEventListener('click',clicks);

function clicks1(){
    if (clicker[1].style.display === "none") {
        clicker[1].style.display = "flex"
        spins.style.transform = "rotate(180deg)"
        spins.style.transition = "0.5s"
        clicker[0].style.display = "none"; 
        clicker[2].style.display = "none";
        spinss.style.transform = "rotate(0deg)"
        spin.style.transform = "rotate(0deg)"
    } else {
        clicker[1].style.display = "none";
        spins.style.transform = "rotate(0deg)"
        spins.style.transition = "0.5s"
    }
    }
    two.addEventListener('click',clicks1);

    function clicks2(){
        if (clicker[2].style.display === "none") {
            clicker[2].style.display = "flex"
            spinss.style.transform = "rotate(180deg)"
            spinss.style.transition = "0.5s"
            clicker[0].style.display = "none";
            clicker[1].style.display = "none";
            spins.style.transform = "rotate(0deg)"
            spin.style.transform = "rotate(0deg)"
        } else {
            clicker[2].style.display = "none";
            spinss.style.transform = "rotate(0deg)"
            spinss.style.transition = "0.5s"
        }
        }
        three.addEventListener('click',clicks2);

        const mobclcik = document.querySelector('.mobile-prod1');
        const mobclcikk = document.querySelector('.mobile-prod2');
        const mobclcikkk = document.querySelector('.mobile-prod3');
        const prodmob = document.querySelector('.mobprod');
        const prodmobb = document.querySelector('.mobprod1');
        const prodmobbb = document.querySelector('.mobprod2');
        const flip = document.querySelector('.mobile-upside1');
        const flipp = document.querySelector('.mobile-upside2');
        const flippp = document.querySelector('.mobile-upside3');
        
        function mob(){
            if (mobclcik.style.display === "none") {
                mobclcik.style.display = "block";
                mobclcikk.style.display = "none";
                mobclcikkk.style.display = "none";
                flipp.style.transform = "rotate(0deg)"
                flipp.style.transition = "0.5s"
                flipp.style.transform = "rotate(0deg)"
                flipp.style.transition = "0.5s"
                flippp.style.transform = "rotate(0deg)"
                flippp.style.transition = "0.5s"
                mobclcik.style.opacity = "1";
                mobclcik.style.transition = "0.5s";
                flip.style.transform = "rotate(180deg)";
                flip.style.transition = "0.5s";
            } else {
                mobclcik.style.display = "none";
                flip.style.transform = "rotate(0deg)"
                flip.style.transition = "0.5s"
            }
        }
        prodmob.addEventListener('click',mob)
         
        function mobb(){
            if (mobclcikk.style.display === "none") {
                mobclcikk.style.display = "block";
                mobclcik.style.display = "none";
                mobclcikkk.style.display = "none"
                flip.style.transform = "rotate(0deg)"
                flip.style.transition = "0.5s"
                flippp.style.transform = "rotate(0deg)"
                flippp.style.transition = "0.5s"
                mobclcikk.style.opacity = "1"
                mobclcikk.style.transition = "0.5s"
                flipp.style.transform = "rotate(180deg)"
                flipp.style.transition = "0.5s"
            } else {
                mobclcikk.style.display = "none";
                flipp.style.transform = "rotate(0deg)"
                flipp.style.transition = "0.5s"
            }
        }
        prodmobb.addEventListener('click',mobb)
          
        function mobbb(){
            if (mobclcikkk.style.display === "none") {
                mobclcikkk.style.display = "block";
                mobclcik.style.display = "none";
                mobclcikk.style.display = "none"
                flipp.style.transform = "rotate(0deg)"
                flipp.style.transition = "0.5s"
                flip.style.transform = "rotate(0deg)"
                flip.style.transition = "0.5s"
                mobclcikkk.style.opacity = "1"
                mobclcikkk.style.transition = "0.5s"
                flippp.style.transform = "rotate(180deg)"
                flippp.style.transition = "0.5s"
            } else {
                mobclcikkk.style.display = "none";
                flippp.style.transform = "rotate(0deg)"
                flippp.style.transition = "0.5s"
            }
        }
        prodmobbb.addEventListener('click',mobbb)

    const navmob = document.querySelector(".section0")
    console.log(navmob);
    const hamburger = document.querySelector(".hamburger")
    console.log(hamburger)
        
        function toggle(){
            if (navmob.style.opacity === "1") {
                navmob.style.opacity = "0"
                navmob.style.transition = "0.5s"
                hamburger.style.background = "url(icon-hamburger.svg)"
                hamburger.style.height = "26px"
                mobclcikkk.style.display = "none";
                mobclcikk.style.display = "none";
                mobclcik.style.display = "none";
                flippp.style.transform = "rotate(0deg)"
                flipp.style.transform = "rotate(0deg)"
                flip.style.transform = "rotate(0deg)"
            } else {
                navmob.style.opacity = "1"
                navmob.style.transition = "0.5s"
                hamburger.style.background = "url(icon-close.svg)"
                // hamburger.style.height = "30px"
            }
        }
        hamburger.addEventListener("click", toggle)
