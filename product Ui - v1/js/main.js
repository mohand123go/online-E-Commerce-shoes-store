let add_to_cart_btn = document.getElementById('add_to_cart_btn')
let add_to_cart_ex_btn = document.getElementById('add_to_cart_ex_btn')
let ui_product = document.querySelector('.ui_product')

add_to_cart_ex_btn.onclick = () => {
    if (ui_product.classList.contains('display_none')) {



    } else {
        const tl = new TimelineMax({ onComplete: Add_display_none_Class })



        tl.fromTo(ui_product, 0.5, { x: '0', opacity: 1 }, { x: '250', opacity: 0, clearProps: "all" })

        function Add_display_none_Class() {
            ui_product.className += (' display_none')
            console.log('fuck')
        }


    }
}

add_to_cart_btn.onclick = () => {
    if (ui_product.classList.contains('display_none')) {

        let RemoveClass = new Promise((reslove, reject) => {
            reslove(ui_product.classList.remove('display_none'))
        })
        RemoveClass.then(() => {
            const t2 = new TimelineMax({})
            t2.fromTo(ui_product, 0.5, { x: '250', opacity: 0 }, { x: '0', opacity: 1, clearProps: "all" })

        })



    } else {

    }
}