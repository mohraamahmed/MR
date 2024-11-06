let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let MR = document.querySelector('.MR');

window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river5.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px';
    MR.style.fontSize = value  + 'px';
if( scrollY >=105) {
    MR.style.fontSize = 105  + 'px';
    MR.style.position = 'fixed';


    if( scrollY >=560) {
        MR.style.display = 'none';}
    else {
         MR.style.display = 'block';
    }
    if( scrollY >=185){
    document.querySelector('.maid').style.background ="linear-gradient(#7ab2d7, #10001f)"
    
}else{
    document.querySelector('.maid').style.background ="linear-gradient(#200016, #10001f)"

}

}

}