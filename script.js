   //var userDate = prompt("What date would you like information on? Put in xx/xx/xxxx format.(From 02/29/2020-12/03/2020)")
   var userDate = ("2020-02-29T00:00:00.000")
$.ajax({
    url: 'https://data.cityofnewyork.us/resource/rc75-m7u3.json',
    dataType: 'json',
    success: function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            if (data[i].date_of_interest == (userDate)){
               //var count = (data[i]["_" + userDate])
                //var caseCount = (data[i]["date_of_interest" + "_" + userDate + "T00:00:00.000" + "_CASE_COUNT"])
                //document.write("There were " + count + " case(s) on" + userDate + ".")
                document.write("hello");
            }
        }
    }
    });
    