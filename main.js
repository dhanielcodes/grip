const tl = gsap.timeline()
tl.from('.container h1, .container p, .cta', 1, {
    transform: 'translateY(20px)',
    opacity: 0,
    stagger: .1,
    delay: 1,
    ease: 'expo'
})
tl.from('.cards, .grip', 1, {
    transform: 'translateY(20px) translateX(-50%)',
    opacity: 0,
    stagger: .2,
    ease: 'expo'
},'-=1')

const ctas = document.querySelectorAll('.cta')

ctas.forEach((cta) => {
    cta.addEventListener('click', () => {
        gsap.to('.overlay', 1, {
            opacity: 1,
            transform: 'translateY(0px)',
            pointerEvents: 'all',
            ease: 'expo'
        })
        gsap.to('.cards', 1, {
            ease: 'expo',
            width: '70%'
        })
    })
})