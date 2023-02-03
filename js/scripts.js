// Elements
const noScriptContainer = document.getElementById('noscript-container');

const point1 = document.getElementById('point-1');
const point2 = document.getElementById('point-2');
const point3 = document.getElementById('point-3');

const learnMore = document.getElementById('learn-more');
const firstBtn = document.getElementById('first-btn');

const collage1 = document.getElementById('img-1');
const collage2 = document.getElementById('img-2');
const collage3 = document.getElementById('img-3');

const txt1 = document.getElementById('txt-1');
const txt2 = document.getElementById('txt-2');
const txt3 = document.getElementById('txt-3');

const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');

const navBtn = document.getElementById('toggle-btn');
const mobileNav = document.getElementById('mobile-nav-menu');

// hide the nosript div elements
noScriptContainer.style.display = 'none';

// adjust opacity of points
point1.style.opacity = 0;
point2.style.opacity = 0;
point3.style.opacity = 0;

learnMore.style.opacity = 0;
firstBtn.style.opacity = 0;

// hide why we save slideshow elements
collage2.style.display = 'none';
collage3.style.display = 'none';
txt2.style.display = 'none';
txt3.style.display = 'none';

// Event Listeners
window.addEventListener("scroll", reveal);


btn1.addEventListener('click', selectSlide);
btn2.addEventListener('click', selectSlide);
btn3.addEventListener('click', selectSlide);

navBtn.addEventListener('click', openMenu);

// Variables
let imgIndex = 0;
let txtIndex = 0;

let menuOpen = false;

// Functions
// create a pause for functions
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

// control opacity for points in hero section
const opacityControl = async () => {
  await sleep(2500)
  point1.style.opacity = 1;
  await sleep(1000)
  point2.style.opacity = 1;
  await sleep(1000)
  point3.style.opacity = 1;
  await sleep(1000)
  learnMore.style.opacity = 1;
  firstBtn.style.opacity = 1;
}

opacityControl()

// scroll animation function for our process section
function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

reveal();

// automatic slideshow
function changeSlide() {
    let i;
    let imgs = document.getElementsByClassName('slide-show-img');
    let txts = document.getElementsByClassName('slide-show-txt');
    for (i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgIndex++;
    if (imgIndex > imgs.length) { imgIndex = 1 }
    imgs[imgIndex - 1].style.display = 'block';
    imgs[imgIndex - 1].style.animationName = 'load';

    for (i = 0; i < txts.length; i++) {
        txts[i].style.display = 'none';
    }
    txtIndex++;
    if (txtIndex > txts.length) { txtIndex = 1 }
    txts[txtIndex - 1].style.display = 'block';
    txts[txtIndex - 1].style.animationName = 'load';

    changeBtnColor();

    setTimeout(changeSlide, 4500); // change card every 4.5 seconds
}

function changeBtnColor() {
    if(collage1.style.display == 'block' && txt1.style.display == 'block') {
        btn1.style.backgroundColor = '#00d68f';
        btn2.style.backgroundColor = '#ffffff';
        btn3.style.backgroundColor = '#ffffff';
    }
    else if (collage2.style.display == 'block' && txt2.style.display == 'block') {
        btn2.style.backgroundColor = '#00d68f';
        btn1.style.backgroundColor = '#ffffff';
        btn3.style.backgroundColor = '#ffffff';
    }
    else if (collage3.style.display == 'block' && txt3.style.display == 'block') {
        btn3.style.backgroundColor = '#00d68f';
        btn2.style.backgroundColor = '#ffffff';
        btn1.style.backgroundColor = '#ffffff';
    }
}

changeSlide();

if (collage1.style.display != 'none' && txt1.style.display != 'none') {
    btn1.style.backgroundColor = '#00d68f';
}

// manually change slides
function selectSlide() {

    let btnId = this.id;
    // change btn colour
    if (btnId == 'btn-1') {
        btn1.style.backgroundColor = '#00d68f';
        btn2.style.backgroundColor = '#ffffff';
        btn3.style.backgroundColor = '#ffffff';
        collage1.style.display = 'block';
        txt1.style.display = 'block';

        collage1.style.animationName = 'load';
        txt1.style.animationName = 'load';

        collage2.style.display = 'none';
        txt2.style.display = 'none';
        collage3.style.display = 'none';
        txt3.style.display = 'none';
    }
    else if (btnId == 'btn-2') {
        btn2.style.backgroundColor = '#00d68f';
        btn1.style.backgroundColor = '#ffffff';
        btn3.style.backgroundColor = '#ffffff';
        collage2.style.display = 'block';
        txt2.style.display = 'block';

        collage2.style.animationName = 'load';
        txt2.style.animationName = 'load';

        collage1.style.display = 'none';
        txt1.style.display = 'none';
        collage3.style.display = 'none';
        txt3.style.display = 'none';

    } else if (btnId == 'btn-3') {
        btn3.style.backgroundColor = '#00d68f';
        btn2.style.backgroundColor = '#ffffff';
        btn1.style.backgroundColor = '#ffffff';
        collage3.style.display = 'block';
        txt3.style.display = 'block';

        collage3.style.animationName = 'load';
        txt3.style.animationName = 'load';

        collage2.style.display = 'none';
        txt2.style.display = 'none';
        collage1.style.display = 'none';
        txt1.style.display = 'none';
    }
}


function openMenu() {
    if(!menuOpen) {
        navBtn.classList.add('open');
        mobileNav.style.display = 'flex';
        mobileNav.style.animationName = 'enter-down';
        menuOpen = true;
    }
    else {
        navBtn.classList.remove('open');
        mobileNav.style.display = 'none';
        menuOpen = false;
    }
}
