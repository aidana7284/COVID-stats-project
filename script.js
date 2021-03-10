   var userDate = prompt("What date would you like information on? Put in xx/xx/xxxx format.(From 02/29/2020-12/03/2020)")
$.ajax({
    url: 'https://data.cityofnewyork.us/resource/rc75-m7u3.json',
    dataType: 'json',
    success: function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            if (data[i].date == ("   " + userDate)){
                var count = (data[i]["_" + userDate])
                var caseCount = (data[i]["_" + userDate + "CASE_COUNT"])
                document.write("There were " + count + " case(s) on" + userDate + ".")
            };
        };
    }
    });
    