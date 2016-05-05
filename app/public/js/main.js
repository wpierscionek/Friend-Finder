$(document).ready(function() {
    // Chosen CSS
    var config = {
        '.chosen-select': {},
        '.chosen-select-deselect': {
            allow_single_deselect: true
        },
        '.chosen-select-no-single': {
            disable_search_threshold: 10
        },
        '.chosen-select-no-results': {
            no_results_text: 'Oops, nothing found!'
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
            console.log(newFriend);




           