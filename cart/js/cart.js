


function increaseAmountByOne(e) {


    let amountCounter = e.parentNode.children[1]
    if (amountCounter.textContent >= 0 && amountCounter.textContent < 10) {
        const amount = parseInt(amountCounter.textContent)
        amountCounter.textContent = amount + 1

    }
}


function decreaseAmountByOne(e) {

    let amountCounter = e.parentNode.children[1]

    if (amountCounter.textContent > 0 && amountCounter.textContent <= 10) {
        const amount = parseInt(amountCounter.textContent)
        amountCounter.textContent = amount - 1

    }
}

