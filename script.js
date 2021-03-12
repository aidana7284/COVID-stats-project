   var userDate = prompt("What date would you like information on? Put in (year-month-date) xxxx-xx-xx format.(From 2020-02-29 to 2020-12-03)") //This is the prompt that asks the user the question and also explains them how they have to format their answer.
   //var userDate = ("2020-02-29T00:00:00.000") //This was used when the prompt was commented out to auto fill in a value to the userDate var. 
$.ajax({
    url: 'https://data.cityofnewyork.us/resource/rc75-m7u3.json',
    dataType: 'json',
    success: function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) { //This is the for loop that loops through the whole data set.
            if (data[i].date_of_interest == (userDate + "T00:00:00.000")){ //This if statement makes sure that the date the user put in is a valid date that the API contains. It also adds the time to the end so that it will match the date DATE_OF_INTEREST column in the dataset
                var count = (data[i].case_count); //This goes through the dataset and makes the count var into the amount of cases on that day 
                var death = (data[i].death_count); //This goes through the dataset and makes the count var into the amount of deaths on that day.
                document.write("There were " + count + " case(s) and " + death + " death(s)" + " on " + userDate); //This  takes all the above variables and puts them in document.write for so the user can see the result.
            }
        }
    }
    });
    