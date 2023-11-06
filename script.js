//Future predictions

// object
const future = {
    one:'Things are looking great!',
    two:'There is a chance you win the lottery! if you play today!',
    three:'To day you should not try new things!', 
    four:'Things are looking real bright go on a adventure!',
    five:'The grass is not allways greener on the other side!',
    six:'The best way to predict the future is to create it!',
    seven:'Everything changes with time.',
    eight:'The best way to predict the future is to study the past!'
};
//convert the objects values into an array
const predictions = Object.values(future);

//function to get random element from array
function getRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];

}

//loop over the objects using Math.random
for (let i = 0; i < 1; i++) {
    const randomValue = getRandom(predictions);
    console.log(randomValue);
}
//run


