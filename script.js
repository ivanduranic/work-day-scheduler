$(document).ready(function() {

// Date under first paragraph 
    $("#currentDay").html(moment().format("dddd, MMM Do"));

    // Connecting hours column with current time
    var currentHour = document.getElementById('hour');
    var hourConnect = currentHour.setHours(9-17);
    var currentTime = moment().format('LTS');


    if (hourConnect === currentTime) {
    $('#row').style.present
    }
    else if (hourConnect < currentTime) {
    $('#row').style.past
    }
    else {
    $('#row').style.future
    };


    // Button click saves input to local storage
    function clickSave () {

        document.getElementById("saveBtn").addEventListener("click", function() {
            document.querySelectorAll("input[type='text']").innerHTML = " ";

            localStorage.setItem('form-control', JSON.stringify(form-control));
          });

    };
    clickSave();

});
