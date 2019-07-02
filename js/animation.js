document.addEventListener('DOMContentLoaded', () => {

    anime.timeline({
            easing: 'easeOutExpo'
        })
        .add({
            targets: '.title, .t-text',
            translateX: ['-100vh', '0vh'],
            delay: (el, i) => 100 * i,
        })
        .add({
            targets: '#section-1',
            opacity: [0, 1],
            translateY: [20, 0],
            offset: '-=400'
        })

        .add({
            targets: '.navbar-brand',
            translateX: ['-100vh', '0vh'],
            offset: '-=500',
        })
        .add({
            targets: '.navbar-brand, .title, .btn',
            opacity: [0, 1],
            translateY: [20, 0],
            delay: (el, i) => 100 * i,
            offset: '-=500'

        })









})