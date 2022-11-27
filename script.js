// var fs = require("fs");

function newBid() {
    // get value from text box
    var value = document.getElementById("bidAmount_textbox").value;
    
    // assign value to current bid
    document.getElementById("CurrentBid").innerHTML = "$" + value;

    // compare to highest bid
    var topBid = document.getElementById("topBid").innerHTML;
    topBid = parseFloat(topBid.replace("$", ""));
    
    value = parseFloat(value);

    if(value > topBid){
        topBid = value;
    }

    document.getElementById("topBid").innerHTML = "$" + topBid;

    // clear input box
    document.getElementById("bidAmount_textbox").value = "";
}

function getProductPage() {
    // console.log("next time debug");
    // var page = fs.readFile("product_details.html");
    // document.write(page);

    window.location.href = "product_details.html";
};