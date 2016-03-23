/**
 * Created by mkulinski on 3/22/2016.
 */
$(document).ready(function(){
    $("button").click( function(){
        var searchFor = $('input').val();

        $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + searchFor + "&callback=?", function (data) {
            for (i = 0; i < data.query.search.length; i++) {
                console.log(i);
                $('.results').append("<li>" + "<h2>" + data.query.search[i].title + "</h2>" + "<p>" + data.query.search[i].snippet + "</p>" + "</li>");
            }
        });
    });
});