const buttons = document.querySelectorAll('button');
const container = document.querySelector('.container');

const audio = new Audio();

const playSound = (name) => {
    audio.src = `./audio/${name}.mp3`
    audio.play();
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const image = this.dataset.img;
        const name = this.textContent;

        container.style.background = `url(images/${image}.jpg)`;
        playSound(name);
        
        buttons.forEach(button => {
            button.disabled = true;
            setTimeout(() => {
                button.disabled = false;
            }, 1700);
        })
    })
})