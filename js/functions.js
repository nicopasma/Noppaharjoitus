const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const kuva = document.querySelector('container')

kuva.addEventListener('click', () => {
    const noppakuva = document.getElementById('dice');
    const numero = getRandomIntNumberInRange(1, 6);

    noppakuva.src = `./img/${numero}.png`;
})