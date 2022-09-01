$(".package").on("click", function(e) {
    $(".hidden").toggle(300);
})

$(".minus").on("click", function(e) {

    var newVal = eval($(e.target).next().text() + "-1");
    if (parseInt(newVal) >= 0) $(e.target).next().text(newVal);
    else return
    update()
})

$(".plus").on("click", function(ev) {

    var newVal = eval($(ev.target).prev().text() + "+1");
    $(ev.target).prev().text(newVal);
    update()

})

function update() {
    var noOfBedrooms, noOfBathrooms, container = $("#rooms").children();
    noOfBedrooms = container.eq(2).text();
    noOfBathrooms = container.eq(6).text();
    
    $("#valueD").text(noOfBedrooms);
    $("#valueD2").text(noOfBathrooms);

    var bedroomCost, bathroomCost;
    if (parseInt(noOfBedrooms) > 1) {
        var bedroomNet = eval(noOfBedrooms+"-1");
        bedroomCost = eval("190+"+bedroomNet+"*100");
    } else {
        bedroomCost = "190";
    }

    if (parseInt(noOfBathrooms) > 1) {
        var bathroomNet = eval(noOfBathrooms+"-1");
        bathroomCost = eval("119+"+bathroomNet+"*80");
    } else {
        bathroomCost = "119";
    }

    var totalCost = eval(bedroomCost + "+" + bathroomCost);
    $("#total").text(totalCost);
}