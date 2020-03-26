import gsap from 'gsap';

export const play = (pathname, node, appears) => {
    const timeline = gsap.timeline();
    const logo = node.querySelector('.App-logo');
    const text = node.querySelector('p');
    const link = node.querySelector('.App-link');
    console.log(logo, text, link);

    timeline.to(node, { duration: 1, opacity: 1, x: 0, ease: 'power1.out' });
    timeline.from(text, { duration: 1, autoAlpha: 0, y: 25, ease: 'elastic.inOut(1, 0.3)' })
    timeline.from(link, { duration: 1, autoAlpha: 0, y: 50, ease: 'elastic.inOut(1, 0.3)' })
}

export const exit = (node) => {
    const timeline = gsap.timeline();

    timeline.to(node, { duration: 1, x: 100, ease: 'power1.out' });
    timeline.to(node, { duration: 1, opacity: 0, x: '100%', ease: 'power1.out' });
}
