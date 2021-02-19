const tl = gsap.timeline()
tl.from('.container h1, .container p, .container button', 1, {
    transform: 'translateY(20px)',
    opacity: 0,
    stagger: .4,
    delay: 1,
    ease: 'expo'
})
tl.from('.cards, .grip', 1, {
    transform: 'translateY(20px) translateX(-50%)',
    opacity: 0,
    stagger: .3,
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
        if(window.innerWidth <= '630'  ){
            gsap.to('.cards', 1, {
                ease: 'expo',
                width: '100%'
            })
        }
        else if(window.innerWidth >= '1530' ){
            gsap.to('.cards', 1, {
                ease: 'expo',
                width: '80%'
            })
        }
        else{
            gsap.to('.cards', 1, {
                ease: 'expo',
                width: '700px'
            })
        }
        
        gsap.to('.info', 1, {
            ease: 'expo',
            opacity: 0,
            pointerEvents: 'none'
        })
        gsap.to('.form2', 1, {
            pointerEvents: 'none'
        })
        gsap.to('.close', 1, {
            pointerEvents: 'all'
        })
    })
})

const closer = document.querySelectorAll('.exit')
closer.forEach((close) => {
    close.addEventListener('click', () => {
    gsap.to('.overlay', 1, {
        opacity: 0,
        transform: 'translateY(30px)',
        pointerEvents: 'none',
        ease: 'expo'
    })
    if(window.innerWidth <= '630'  ){
        gsap.to('.cards', 1, {
            ease: 'expo',
            width: '90%'
        })
    }
    else if(window.innerWidth >= '1530' ){
        gsap.to('.cards', 1, {
            ease: 'expo',
            width: '60%'
        })
    }
    else{
        gsap.to('.cards', 1, {
            ease: 'expo',
            width: '600px '
        })
    }
    gsap.to('.form2', 1, {
        pointerEvents: 'none',
        ease: 'expo'
    })
    gsap.to('.close', 1, {
        pointerEvents: 'none'
    })
    
})
})


const verts = document.querySelectorAll('.building')

verts.forEach((vert) => {
    vert.addEventListener('click', () => {
        gsap.to('.info', 1, {
            opacity: 1,
                transform: 'translateY(0px)',
                pointerEvents: 'all',
                ease: 'expo'
        })
        gsap.to('.overlay', 1, {
            opacity: 0,
            transform: 'translateY(30px)',
            pointerEvents: 'none',
            ease: 'expo'
        })
    
    })
})


const form = document.getElementById("form")

const submitForm = (e) => {
    e.preventDefault();
    tl.to('.form1', 1, {
        opacity: 0,
        transform: 'translateY(60%)',
        ease: 'expo',
        zIndex: '-2'
    })
    tl.to('.form2', 1, {
        opacity: 1,
        transform: 'translateY(0%)',
        pointerEvents: 'all',
        display: 'block',
        ease: 'expo'
    },'-=.6')
    gsap.to('.form2', 1, {

    })
}

form.addEventListener('submit', submitForm)