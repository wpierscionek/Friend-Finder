//creating an array with duppy "friend" so we know it works

var friendsArray = [{
    name: "Wojtek",
    photo: "blank",
    scores: [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
    ]
}, {
    name: "Wojtek",
    photo: "blank",
    scores: [
        2,
        1,
        1,
        1,
        1,
        4,
        1,
        1,
        1
    ]
}];

//need to export this array to be available to the rest of the application

module.exports = friendsArray;

// next we will create api and html routes
