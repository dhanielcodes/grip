const tl = gsap.timeline()
tl.from('.container h1, .container p, .container button', .8, {
    transform: 'translateY(40px)',
    opacity: 0,
    stagger: .3,
    delay: 1,
    ease: 'expo.inOut'
})
tl.from('.cards', .8, {
    transform: 'translateY(40px) translateX(-50%)',
    opacity: 0,
    ease: 'expo.inOut'
},'-=.6')
tl.from('.grip', .8, {
    transform: 'translateX(-60%)',
    opacity: 0,
    ease: 'expo.inOut'
},'-=.6')

const ctas = document.querySelectorAll('.cta')

ctas.forEach((cta) => {
    cta.addEventListener('click', () => {
        gsap.to('.overlay', 1, {
            opacity: 1,
            transform: 'translateY(0px)',
            pointerEvents: 'all',
            ease: 'expo'
        })
        /* gsap.to('.grip', 1, {
            width: '1200px'
        }) */
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
    /* if(window.innerWidth >= '1530' ){
        gsap.to('.grip', 1, {
            width: '1000px'
        })
    }else{
        gsap.to('.grip', 1, {
            width: '800px'
        })
    } */
    
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