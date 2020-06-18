function gethi(e) {

    let allItems = document.querySelectorAll('.mange-order--table-body__order-wraper')

    for (let i = 0; i < e.children.length; i++) {
        if (e.children[i].classList.contains('fullorderinfoKey')) {
            let itemKey = e.children[i].value
            for (let j = 0; j < allItems.length; j++) {

                for (let k = 0; k < allItems[j].children.length; k++) {
                    console.log(allItems[j].children[k])
                    if (allItems[j].children[k].classList.contains('fullorderinfoValue')) {

                        itemValue = allItems[j].children[k].value
                        if (itemValue == itemKey) {
                            console.log('اخيرا الحمد الله')
                        }
                    }
                }


            }
        }
    }
}



/* نجيب كل الانبوت في الصفحة ونطابق الايدي والبرينت بتعها هو ده البيرنت اللي عليه الدور  */

/*
for (let i = 0; i < e.nextElementSibling.children.length; i++) {

        if (e.nextElementSibling.children[i].classList.contains("mange-order-panal--product-wraper")) {
            let parent = e.nextElementSibling.children[i]

            for (let j = 0; j < parent.children.length; j++) {

                let child = parent.children[j]

                for (let k = 0; k < child.children.length; k++) {

                    if (child.children[k].classList.contains('mange-order--table-body__order-wraper')) {

                        let childOfchild = child.children[k]
                        for (let l = 0; l < childOfchild.children.length; l++) {
                            console.log(childOfchild.children[l])
                        }
                    }

                }
            }


        }


    } */