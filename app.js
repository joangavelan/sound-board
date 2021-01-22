const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const img = this.dataset.img;

        document.body.style.background = `url(images/${img}.jpg)`
    })
})
