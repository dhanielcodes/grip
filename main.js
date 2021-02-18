const tl = gsap.timeline()
tl.from('.container h1, .container p, .container button', 1, {
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
        if(window.innerWidth <= '895'  ){
            gsap.to('.cards', 1, {
                ease: 'expo',
                width: '650px'
            })
        }else{
            gsap.to('.cards', 1, {
                ease: 'expo',
                width: '70%'
            })
        }
        
        gsap.to('.info', 1, {
            ease: 'expo',
            opacity: 0
        })
    })
})

const closer = document.querySelector('.closer')
closer.addEventListener('click', () => {
    gsap.to('.overlay', 1, {
        opacity: 0,
        transform: 'translateY(30px)',
        pointerEvents: 'none',
        ease: 'expo'
    })
    if(window.innerWidth >= '1480'  ){
        gsap.to('.cards', 1, {
            ease: 'expo',
            width: '60%'
        })
    }else{
        gsap.to('.cards', 1, {
            ease: 'expo',
            width: '600px'
        })
    }
    
})