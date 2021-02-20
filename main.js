const tl = gsap.timeline()
tl.from('.container h1, .container p, .building.mobile, .container button', 3, {
    transform: 'translateY(40px)',
    opacity: 0,
    stagger: .1,
    delay: 1,
    ease: 'expo.inOut'
})
tl.from('.cards', 3, {
    transform: 'translateY(40px) translateX(-50%)',
    opacity: 0,
    ease: 'expo.inOut'
},'-=1.9')
tl.from('.grip', .8, {
    transform: 'translateX(-60%)',
    opacity: 0,
    ease: 'expo.inOut'
},'-=1.9')

const ctas = document.querySelectorAll('.cta')

ctas.forEach((cta) => {
    cta.addEventListener('click', () => {
        gsap.to('.overlay', 1.7, {
            opacity: 1,
            transform: 'translateY(0px)',
            pointerEvents: 'all',
            ease: 'expo.inOut'
        })
        gsap.to('.grip', 1, {
            ease: 'expo.inOut',
            width: '1200px'
        })
        if(window.innerWidth <= '630'  ){
            gsap.to('.cards', 1, {
                ease: 'expo.inOut',
                width: '100%'
            })
        }
        else if(window.innerWidth >= '1530' ){
            gsap.to('.cards', 1, {
                ease: 'expo.inOut',
                width: '50%'
            })
        }
        else{
            gsap.to('.cards', 1, {
                ease: 'expo.inOut',
                width: '780px'
            })
        }
    
        gsap.to('.form2', 1, {
            pointerEvents: 'none'
        })
        gsap.to('.close', 1, {
            pointerEvents: 'all'
        })
    })
})

const closeInfo = document.querySelector('.buttons .p')

closeInfo.addEventListener('click', () => {
    gsap.to('.info', 1, {
        opacity: 0,
        transform: 'translateY(30px)',
        pointerEvents: 'none'
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
            width: '40%'
        })
    }
    else{
        gsap.to('.cards', 1, {
            ease: 'expo',
            width: '700px '
        })
    }
    gsap.to('.form2', 1, {
        pointerEvents: 'none',
        ease: 'expo'
    })
    gsap.to('.close', 1, {
        pointerEvents: 'none'
    })
    if(window.innerWidth >= '1530' ){
        gsap.to('.grip', 1, {
            width: '1000px'
        })
    }else{
        gsap.to('.grip', 1, {
            width: '800px'
        })
    }
    
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


let cursor = document.querySelector('.cursor')
let innerCursor = document.querySelector('.cursor div')
document.addEventListener('mousemove', (e) => {
    cursor.style.top = e.clientY + 'px'
    cursor.style.left = e.clientX + 'px'
})
ctas.forEach((cta) => {
    cta.addEventListener('mouseenter', () => {
        cursor.style.border = 'none'
        innerCursor.style.width = '100%'
        innerCursor.style.height = '100%'
        cursor.style.mixBlendMode = 'difference'
    })
    cta.addEventListener('mouseleave', () => {
        cursor.style.border = '1px solid white'
        innerCursor.style.width = '20%'
        innerCursor.style.height = '20%'
        cursor.style.mixBlendMode = 'normal'
    })
})
verts.forEach((cta) => {
    cta.addEventListener('mouseenter', () => {
        cursor.style.border = 'none'
        innerCursor.style.width = '100%'
        innerCursor.style.height = '100%'
        cursor.style.mixBlendMode = 'difference'
    })
    cta.addEventListener('mouseleave', () => {
        cursor.style.border = '1px solid white'
        innerCursor.style.width = '20%'
        innerCursor.style.height = '20%'
        cursor.style.mixBlendMode = 'normal'
    })
})

const infoImg = document.querySelector('.info_img')

if (window.innerWidth <= '586'){
    infoImg.src = './mobileclassic.png'
}else{
    infoImg.src = './classic.png'

}


form.addEventListener('submit', submitForm)