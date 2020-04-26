
console.clear();


const main = document.querySelector('.main-section');
const red = document.querySelector('.rood');
const blue = document.querySelector('.blauw');
const green = document.querySelector('.groen');
const orange = document.querySelector('.oranje');
const purple = document.querySelector('.paars');
const teal = document.querySelector('.teal');
const yellow = document.querySelector('.geel');
const zzzumi = document.querySelector('.img-zzzumi');
const pulse1 = document.getElementsByClassName("pulse1");
const pulse2 = document.getElementsByClassName("pulse2");

const values = [{cx: 100, cy: 100}, {cx: 400, cy: 100}, {cx: 400, cy: 400}, {cx: 100, cy: 400}];

const planets = [red, blue, green, orange, purple, teal, yellow];


const mq = window.matchMedia( "(min-width: 768px)" );
if (mq.matches) {
// const tl = new TimeLineMax();
zzzumi.addEventListener('pointerenter', _ => {

const tl = new TimelineMax({repeat:2, repeatDelay:0.5});
  tl
    .fromTo(pulse1, 1,
              {transformOrigin:"center center", autoAlpha:1, scale: 1},
              {transformOrigin:"center center", autoAlpha:0, scale: 1.5, ease:Quad.easeInOut}
            )
    .fromTo(pulse2, 1,
                {transformOrigin:"center center", autoAlpha:1, scale: 1},
                {transformOrigin:"center center", autoAlpha:0, scale: 1.5, ease:Quad.easeInOut}, 0.5
              );
});


// const tlm = new TimelineMax({});
//
// planets.forEach(planet => { planet.addEventListener('pointerenter', _ => {
//     const color = planet.id;
//
//
//
// }) })




red.addEventListener('pointerenter', _ => {
  document.querySelector("#rood-text").classList.remove("hide-text");
  const tlm = new TimelineMax({});
  const r = Math.floor(Math.random() * 180);
  tlm
    .to(red, 0.4, {rotation: r,  duration: 0.05})
    .to(red, 0.4, {rotation: -r,  duration: 0.05})
});

red.addEventListener('mouseout', _ => {
  document.querySelector("#rood-text").classList.add("hide-text");
});


blue.addEventListener('pointerenter', _ => {
  document.querySelector("#blauw-text").classList.remove("hide-text");
  const tlm = new TimelineMax({});
  const r = Math.floor(Math.random() * 180);
  tlm
    .to(blue, 0.4, {rotation: r,  duration: 0.05})
    .to(blue, 0.4, {rotation: -r,  duration: 0.05})
});

blue.addEventListener('mouseout', _ => {
  document.querySelector("#blauw-text").classList.add("hide-text");
});

green.addEventListener('pointerenter', _ => {
  document.querySelector("#groen-text").classList.remove("hide-text");
  const tlm = new TimelineMax({});
  const r = Math.floor(Math.random() * 180);
  tlm
    .to(green, 0.4, {rotation: r,  duration: 0.05})
    .to(green, 0.4, {rotation: -r,  duration: 0.05})
});

green.addEventListener('mouseout', _ => {
  document.querySelector("#groen-text").classList.add("hide-text");
});

orange.addEventListener('pointerenter', _ => {
  document.querySelector("#oranje-text").classList.remove("hide-text");
  const tlm = new TimelineMax({});
  const r = Math.floor(Math.random() * 180);
  tlm
    .to(orange, 0.4, {rotation: -r,  duration: 0.05})
    .to(orange, 0.4, {rotation: r,  duration: 0.05})
});

orange.addEventListener('mouseout', _ => {
  document.querySelector("#oranje-text").classList.add("hide-text");
});

purple.addEventListener('pointerenter', _ => {
  document.querySelector("#paars-text").classList.remove("hide-text");
  const tlm = new TimelineMax({});
  const r = Math.floor(Math.random() * 180);
  tlm
    .to(purple, 0.4, {rotation: -r,  duration: 0.05})
    .to(purple, 0.4, {rotation: r,  duration: 0.05})
});

purple.addEventListener('mouseout', _ => {
  document.querySelector("#paars-text").classList.add("hide-text");
});

teal.addEventListener('pointerenter', _ => {
  document.querySelector("#teal-text").classList.remove("hide-text");
  const tlm = new TimelineMax({});
  const r = Math.floor(Math.random() * 180);
  tlm
    .to(teal, 0.4, {rotation: r,  duration: 0.05})
    .to(teal, 0.4, {rotation: -r,  duration: 0.05})
});

teal.addEventListener('mouseout', _ => {
  document.querySelector("#teal-text").classList.add("hide-text");
});

yellow.addEventListener('pointerenter', _ => {
  document.querySelector("#geel-text").classList.remove("hide-text");
  const tlm = new TimelineMax({});
  const r = Math.floor(Math.random() * 180);
  tlm
    .to(yellow, 0.4, {rotation: -r,  duration: 0.05})
    .to(yellow, 0.4, {rotation: r,  duration: 0.05})
});

yellow.addEventListener('mouseout', _ => {
  document.querySelector("#geel-text").classList.add("hide-text");
});

}
else{
  const tl = new TimelineMax({repeat:-1, repeatDelay:0.5});
    tl
      .fromTo(pulse1, 1,
                {transformOrigin:"center center", autoAlpha:1, scale: 1},
                {transformOrigin:"center center", autoAlpha:0, scale: 1.5, ease:Quad.easeInOut}
              )
      .fromTo(pulse2, 1,
                  {transformOrigin:"center center", autoAlpha:1, scale: 1},
                  {transformOrigin:"center center", autoAlpha:0, scale: 1.5, ease:Quad.easeInOut}, 0.5
                );



  var tlBubbles = new TimelineMax();
      tlBubbles.staggerFromTo(planets, 2, {y:0},{y:-5, ease: Sine.easeInOut, repeat: -1, yoyo: true}, .4);


}
