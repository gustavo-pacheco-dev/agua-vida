function selectPayment(option) {
    const payment1 = document.getElementById('payment_1')
    const payment2 = document.getElementById('payment_2')
    const payment3 = document.getElementById('payment_3')

    payment1.classList.remove('selected-payment-option')
    payment2.classList.remove('selected-payment-option')
    payment3.classList.remove('selected-payment-option')

    switch (option) {
        case 1:
            payment1.classList.add('selected-payment-option')
            break;

        case 2:
            payment2.classList.add('selected-payment-option')

            break;

        case 3:
            payment3.classList.add('selected-payment-option')

            break;

    }
}
