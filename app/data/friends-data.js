//creating an array with duppy "friend" so we know it works

var friendsArray = [{
    name: "Wojtek",
    photo: "https://scontent-iad3-1.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/10639576_1108687602498556_8040003880846972591_n.jpg?oh=cbee5b68ce9afd2df2f80b9b1837e775&oe=57A4A444",
    scores: [
        3,
        3,
        2,
        2,
        3,
        5,
        4,
        1,
        3
    ]
},{
	
    name: "sylvester stallone",
    photo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Sylvester_Stallone_2012.jpg",
    scores: [
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
    ]
},{
	
    name: "arnold schwarzenegger",
    photo: "http://ia.media-imdb.com/images/M/MV5BMTI3MDc4NzUyMV5BMl5BanBnXkFtZTcwMTQyMTc5MQ@@._V1_UY317_CR19,0,214,317_AL_.jpg",
    scores: [
        4,
        3,
        2,
        2,
        1,
        5,
        4,
        1,
        3
    ]
}];

//need to export this array to be available to the rest of the application

module.exports = friendsArray;

// next we will create api and html routes
