const newQuest = document.querySelector('[data-form-button]')


newQuest.addEventListener('click', () => {
    const input = document.querySelector('[data-form-input]')
    const valor = input.value
    console.log(valor);
})
