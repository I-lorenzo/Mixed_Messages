//Future predictions
const future = {
    first:'Things are looking great!',
    second:'There is a change you win the lottery! if you play today',
    three:'To day you should stay inside its not wise to try new things', 
    four:'Things are looking real bright',
    five:'The grass is not allways greener on the other side',
    six:'The best way to predict the future is to create it.',
    seven:'Everything changes with time.',
    eight:'The best way to predict the future is to study the past'
};

const predictions = Object.values(future);

function getRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];

}
for (let i = 0; i < 1; i++) {
    const randomValue = getRandom(predictions);
    console.log(randomValue);
}
//run


