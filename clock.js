    var date = new Date().toLocaleDateString();
    var day = new Date().getDay();
    var weekday;
    if(day == 1){
        weekday = "Monday ";
    }
    else if(day == 2){
        weekday = "Tuesday ";
    }
    else if(day == 3){
        weekday = "Wednesday ";
    }
    else if(day == 4){
        weekday = "Thursday ";
    }
    else if(day == 5){
        weekday = "Friday ";
    }
    else if(day == 6){
        weekday = "Saturday ";
    }
    else if(day == 7){
        weekday = "Sunday ";
    }
    var time = new Date().toLocaleTimeString();
    
    document.getElementById("clock").innerHTML = "Today is " + weekday + date + " and time is " + time;