$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "Beans.json",
        data: {get_param: 'value'},
        beforeSend: function() {
            $(".center").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $(".center").html("");

            var item = data.items;

            for (var i = 0; item.length; i++) {

                $(".center").append("<table>" + "<tr>" + "<th>" +
                    "<img src='" + item[i].image + "'>" + "</th>" + "</tr>" +
                    "<tr>" + "<td>" + "<p>" + item[i].title + "<br>" + "<br>" +
                    item[i].price + "</p>" + "</td>" + "</tr>" + "</table>");
            }

        }
    });
});
