$(document).ready(function() {

    var config = {
        '.chosen-select': {},
        '.chosen-select-deselect': {
            allow_single_deselect: true
        },
        '.chosen-select-no-single': {
            disable_search_threshold: 10
        },
        '.chosen-select-no-results': {
            no_results_tejt: 'Oops, nothing found!'
        },
        '.chosen-select-width': {
            width: "95%"
        }
    }
    for (var selector in config) {
        $(selector).chosen(config[selector]);
    }

    $('.submit').on('click', function() {

        var currentURL = window.location.origin;

        function formValidation() {
            var validation = true;

            $('.form-control').each(function() {
                if ($(this).val() == '')
                    validation = false;
            });

            $('.chosen-select').each(function() {
                if ($(this).val() == '')
                    validation = false;
            });
            return validation;
        }
        if (formValidation() == true) {



            var newFriend = {
                name: $('#reserve_name').val().trim(),
                photo: $('#reserve_img').val().trim(),
                scores: [
                    $('#q1').val(),
                    $('#q2').val(),
                    $('#q3').val(),
                    $('#q4').val(),
                    $('#q5').val(),
                    $('#q6').val(),
                    $('#q7').val(),
                    $('#q8').val(),
                    $('#q9').val(),
                    $('#q10').val()
                ]

            };

            $.get(currentURL + '/api/survey', newFriend, function(data) {

                var friendsArray = []; // creating an array to store newFriend values
                var friendsScore = newFriend.scores; //assigning variable to our database

                for (i = 0; i < friendsScore.length; i++) { // using for loop to get all scores from friendsScore.
                    var inputNumbers = Number(friendsScore[i]); // assigning new variable to [i] of friendsScoore.
                    friendsArray.push(inputNumbers); // pushing inputNumbers to friendsArray.
                }

                var friendsTotalScore = friendsArray.reduce(add, 0); //assigning variable to our friendsArray and calling.reduce function.

                function add(a, b) { // function add adds everyhting inside the friendsArray.
                    return a + b; // and returns result.
                }

                var friendPick = []; // creating an array which will store our objects

                for (j in data) {
                    var objectsArray = []; //array which will store numbers that are pushed in

                    for (i in data[j].scores) {

                        var numbers = Number(data[j].scores[i]);
                        objectsArray.push(numbers);
                    }

                    var sum = objectsArray.reduce(add, 0);

                    function add(a, b) {
                        return a + b;
                    }


                    if (Math.abs(friendsTotalScore - sum) <= 12) {

                        friendPick.push(data[j]);
                        data.push(newFriend);

                    } else {
                        data.push(newFriend);
                    }
                }

                function returnResult() {
                    var randomPick = Math.floor((Math.random() * friendPick.length) + 1);
                    var name = JSON.stringify(friendPick[randomPick].name);
                    var photo = friendPick[randomPick].photo;

                    $("#matchName").append("<h2>Your Best Match is: " + name + "</h2>");
                    $("#matchImg").attr("src", photo);
                    $("#resultsModal").modal('toggle');
                }

                returnResult();

            });

        } else {
            alert("You are missing a field!");
        }

        $.post(currentURL + '/api/survey', newFriend, function(data) {

            data.push(usersData);
        });

        return false;

    });
});
