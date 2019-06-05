const card = document.querySelectorAll('.main-card');
var timeout;
card.forEach(element =>  {
    console.log(element)
});
function fliptest(){
    var x = card;
    x[div].style.transform = "rotateY(180deg)";
    console.log(typeof card);
    timeout = setTimeout(reFlip,3000);
}
function reFlip(){
    var x = card;
    x[0].style.transform = "rotateY(0deg)";
}