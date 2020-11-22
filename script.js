$(document).ready(function () {

    // Date under first paragraph 
    $("#currentDay").html(moment().format("dddd, MMM Do"));
    
    var currentTime = moment().format('H'); // Saving the 24-hour format time into variable.
    // console.log(currentTime);
    
    function time9() {
        let input9 = $("#input9"); // Saving the input into variable.
        let saveBtn9 = $("#saveBtn9"); // Saving the button into variable.

        input9.attr("placeholder", localStorage.getItem("input9")); // Putting the value from Local Storage as a placeholder in input.

        if(currentTime == 9) { 
            input9.attr("style", "background: red")
        } else if (currentTime > 9) {
            input9.attr("style", "background: #f5f5f5")
        } else {
            input9.attr("style", "background: #7FFF00")
        }
        
        saveBtn9.click(function () {
            
            localStorage.setItem("input9", input9.val()) // On a click of a button store the input value into Local Storage. 
        });

    }
    time9();

    function time10() {
        let input10 = $("#input10");
        let saveBtn10 = $("#saveBtn10");

        input10.attr("placeholder", localStorage.getItem("input10"));

        if(currentTime == 10) {
            input10.attr("style", "background: red")
        } else if (currentTime > 10) {
            input10.attr("style", "background: #f5f5f5")
        } else {
            input10.attr("style", "background: #7FFF00")
        }
        
        saveBtn10.click(function () {
            
            localStorage.setItem("input10", input10.val())
        });

    }
    time10();

    function time11() {
        let input11 = $("#input11");
        let saveBtn11 = $("#saveBtn11");

        input11.attr("placeholder", localStorage.getItem("input11"));

        if(currentTime == 11) {
            input11.attr("style", "background: red")
        } else if (currentTime > 11) {
            input11.attr("style", "background: #f5f5f5")
        } else {
            input11.attr("style", "background: #7FFF00")
        }
        
        saveBtn11.click(function () {
            
            localStorage.setItem("input11", input11.val())
        });

    }
    time11();

    function time12() {
        let input12 = $("#input12");
        let saveBtn12 = $("#saveBtn12");

        input12.attr("placeholder", localStorage.getItem("input12"));

        if(currentTime == 12) {
            input12.attr("style", "background: red")
        } else if (currentTime > 12) {
            input12.attr("style", "background: #f5f5f5")
        } else {
            input12.attr("style", "background: #7FFF00")
        }
        
        saveBtn12.click(function () {
            
            localStorage.setItem("input12", input12.val())
        });

    }
    time12();

    function time13() {
        let input13 = $("#input13");
        let saveBtn13 = $("#saveBtn13");

        input13.attr("placeholder", localStorage.getItem("input13"));

        if(currentTime == 13) {
            input13.attr("style", "background: red")
        } else if (currentTime > 13) {
            input13.attr("style", "background: #f5f5f5")
        } else {
            input13.attr("style", "background: #7FFF00")
        }
        
        saveBtn13.click(function () {
            
            localStorage.setItem("input13", input13.val())
        });

    }
    time13();

    function time14() {
        let input14 = $("#input14");
        let saveBtn14 = $("#saveBtn14");

        input14.attr("placeholder", localStorage.getItem("input14"));

        if(currentTime == 14) {
            input14.attr("style", "background: red")
        } else if (currentTime > 14) {
            input14.attr("style", "background: #f5f5f5")
        } else {
            input14.attr("style", "background: #7FFF00")
        }
        
        saveBtn14.click(function () {
            
            localStorage.setItem("input14", input14.val())
        });

    }
    time14();

    function time15() {
        let input15 = $("#input15");
        let saveBtn15 = $("#saveBtn15");

        input15.attr("placeholder", localStorage.getItem("input15"));

        if(currentTime == 15) {
            input15.attr("style", "background: red")
        } else if (currentTime > 15) {
            input15.attr("style", "background: #f5f5f5")
        } else {
            input15.attr("style", "background: #7FFF00")
        }
        
        saveBtn15.click(function () {
            
            localStorage.setItem("input15", input15.val())
        });

    }
    time15();

    function time16() {
        let input16 = $("#input16");
        let saveBtn16 = $("#saveBtn16");

        input16.attr("placeholder", localStorage.getItem("input16"));

        if(currentTime == 16) {
            input16.attr("style", "background: red")
        } else if (currentTime > 16) {
            input16.attr("style", "background: #f5f5f5")
        } else {
            input16.attr("style", "background: #7FFF00")
        }
        
        saveBtn16.click(function () {
            
            localStorage.setItem("input16", input16.val())
        });

    }
    time16();

    function time17() {
        let input17 = $("#input17");
        let saveBtn17 = $("#saveBtn17");

        input17.attr("placeholder", localStorage.getItem("input17"));

        if(currentTime == 17) {
            input17.attr("style", "background: red")
        } else if (currentTime > 17) {
            input17.attr("style", "background: #f5f5f5")
        } else {
            input17.attr("style", "background: #7FFF00")
        }
        
        saveBtn17.click(function () {
            
            localStorage.setItem("input17", input17.val())
        });

    }
    time17();

});
