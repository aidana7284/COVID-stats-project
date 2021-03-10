$.ajax({
    url: 'https://data.cityofnewyork.us/Health/COVID-19-Daily-Counts-of-Cases-Hospitalizations-an/rc75-m7u3',
    dataType: 'json',
    success: function(data) {
        console.log(data);
        var userDate = prompt("What date would you like information on? Put in xx/xx/xxxx format.(From 02/29/2020-12/03/2020)")
        var data = "05/04/2020"
        for (var i=0; i < data.length; i++){
            if (data[i].date == ("  " + userDate)){
                var count = (data[i]["_" + userDate])
                document.write("There were " + count + " case(s) on" + userDate + ".")
            };
        };
    };
});