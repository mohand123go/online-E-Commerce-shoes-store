

new fullpage('#fullpage', {


    autoScrolling: true,
    scrollHorizontally: true,
    fadingEffect: true,
    navigation: true,
    navigationPosition: 'right',


    scrollingSpeed: 700,
    afterRender: function () {
        let landingPageTitle = document.querySelector('h1:first-of-type ');
        let landingPageImage = document.querySelector('img:first-of-type ');
        const tl = new TimelineMax({ delay: 0.5 })
        tl.fromTo(landingPageImage, 0.5, { y: '50', opacity: 0 }, { y: '0', opacity: 1, clearProps: "all" })
        tl.fromTo(landingPageTitle, 0.5, { y: '0', opacity: 0 }, { y: '-50%', opacity: 1, clearProps: "all" })

    },
    onLeave: function (origin, destination, direction) {
        const section = destination.item;
        const title = section.querySelector('h1')
        const shoe = section.querySelector('img')

        const tl = new TimelineMax({ delay: 0.5 })
        tl.fromTo(shoe, 0.5, { y: '50', opacity: 0 }, { y: '0', opacity: 1, clearProps: "all" })
        tl.fromTo(title, 0.5, { y: '0', opacity: 0 }, { y: '-50%', opacity: 1, clearProps: "all" })


    },




})