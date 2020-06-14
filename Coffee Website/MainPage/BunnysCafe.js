$(function() {
    $.ajax({
        type:"GET",
        url:"https://www.amazon.com/YETI-Rambler-Stainless-Insulated-" +
            "MagSlider/dp/B073WJMKHN/ref=sr_1_21?keywords=coffee+cups&q" +
            "id=1556568533&s=gateway&sr=8-21",
        dataType:"html",
        success:function(data) {
            alert(data);
            $("body").html(data);
        },
        error:function() {
            alert("Error");
        }
    })
});