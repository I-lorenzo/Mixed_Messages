//Mix Messages

// object
const object = {
    motivation:['Things are looking great!',
                'There is a chance you win the lottery! if you play today!',
                'Things are looking real bright go on a adventure!',
                'When you feel like quitting, remember why you started.',
                'The best way to predict the future is to create it!',
                ],
    daily:['Meditate for 5 min!',
           'Exercise today!',
           'Smile at someon today!',
           'Set daily goals',
           'Check-In On Friends and Family',
        ],
    ascii: 
         [   "  |\---/|  " ,
             "  | o_o |  " ,
             "   \_^_/   " ,]
   
};



//function to get random messages 
function getRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];

}
//Loop through the ascii art
const getAscci =  (array) => {
   for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
 }
};


//run
console.log("Inspirational message: ", getRandom(object.motivation))
console.log("Daily task: ",getRandom(object.daily))

getAscci(object.ascii)

