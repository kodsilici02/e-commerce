import gsap from 'gsap';
const pageTransition = {
  name: 'shopPageTransition',
  mode: 'out-in',
  onEnter: (el, done) => {
    const sidebar = el.querySelector('#sidebar');
    const content = el.querySelector('#content');
    gsap.set(sidebar, { transform: 'translateX(-200%)', scale: 0.8 });
    gsap.set(content, { transform: 'translateX(110%)', scale: 0.8 });
    const tl1 = gsap.timeline({ paused: true, onComplete: done });
    const tl2 = gsap.timeline({ paused: true, onComplete: done });
    tl1.to(sidebar, { transform: 'translateX(0%)', duration: 0.25 }).to(sidebar, { scale: 1, duration: 0.2 }).play();
    tl2.to(content, { transform: 'translateX(0%)', duration: 0.25 }).to(content, { scale: 1, duration: 0.2 }).play();
  },
  onLeave: (el, done) => {
    const sidebar = el.querySelector('#sidebar');
    const content = el.querySelector('#content');
    const tl1 = gsap.timeline({ paused: true, onComplete: done });
    const tl2 = gsap.timeline({ paused: true, onComplete: done });
    tl1.to(sidebar, { scale: 0.8, duration: 0.2 }).to(sidebar, { transform: 'translateX(-200%)', duration: 0.25 }).play();
    tl2.to(content, { scale: 0.8, duration: 0.2 }).to(content, { transform: 'translateX(110%)', duration: 0.25 }).play();
  }
};

export default pageTransition;
