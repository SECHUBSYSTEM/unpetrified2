var checkboxes = $(".options").children().children();
for (let index = 0; index < checkboxes.length; index++) {
    var checkbox = checkboxes[index];
    if (checkbox.checked) checkbox.checked = false;
}

$(".package").on("click", function (e) {
    $(".hidden").toggle(290);
})

$(".minus").on("click", function (e) {

    var newVal = eval($(e.target).next().text() + "-1");
    if (parseInt(newVal) >= 0) $(e.target).next().text(newVal);
    else return
    update()
})

$(".plus").on("click", function (ev) {

    var newVal = eval($(ev.target).prev().text() + "+1");
    if (parseInt(newVal) <= 5)
        $(ev.target).prev().text(newVal);
    else return
    update()

})

function update(addition = data) {
    var noOfBedrooms, noOfBathrooms, container = $("#rooms").children();
    noOfBedrooms = container.eq(2).text();
    noOfBathrooms = container.eq(6).text();

    $("#valueD").text(noOfBedrooms);
    $("#valueD2").text(noOfBathrooms);

    var bedroomCost, bathroomCost;
    if (parseInt(noOfBedrooms) > 1) {
        var bedroomNet = eval(noOfBedrooms + "-1");
        bedroomCost = eval("190+" + bedroomNet + "*100");
    } else if (parseInt(noOfBedrooms) == 0) {
        bedroomCost = "0";
    } else {
        bedroomCost = "190";
    }

    if (parseInt(noOfBathrooms) > 1) {
        var bathroomNet = eval(noOfBathrooms + "-1");
        bathroomCost = eval("190+" + bathroomNet + "*80");
    } else if (parseInt(noOfBathrooms) == 0) {
        bathroomCost = "0";
    } else {
        bathroomCost = "190";
    }
    var totalCost = eval(bedroomCost + "+" + bathroomCost + "+" + addition);
    $("#total").text(totalCost);
}

$(".show-options").on("click", function () {
    $(".options").toggle(3);
})

var data = "0";
$("#btn").on("click", function () {

    var checkboxes = $(".options").children().children(), newEles = [], prices = [];
    for (let index = 0; index < checkboxes.length; index++) {
        var checkbox = checkboxes[index];
        if (checkbox.checked) {
            checkbox = $(checkbox);
            var newEle = '<p style="margin:20px 0px;">' + checkbox.attr("name") + '<span2 id="valueD2"> $ ' + checkbox.attr("value") + '</span> </p>';
            newEles.push(newEle);
            prices.push(checkbox.attr("value"));
        }
    }

    if (prices) prices = prices.join("+");
    else prices = "0"

    $(".optional-ele").html("");
    for (let index = 0; index < newEles.length; index++) {
        var element = newEles[index];
        $(".optional-ele").append(element);
    }

    data = prices;
    update(data);

    $(".options").css("display", "none");
})


