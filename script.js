function newBid() {
    // get value from text box
    var value = document.getElementById("bidAmount_textbox").value;

    // check if value is numeric
    if(!isNaN(value)) {
        value = parseFloat(value).toFixed(2);
    
    // assign value to current bid
    document.getElementById("CurrentBid").innerHTML = "$" + value;

    // compare to highest bid
    var topBid = document.getElementById("topBid").innerHTML;
    topBid = parseFloat(topBid.replace("$", "")).toFixed(2);

    if(value > topBid){
        topBid = value;
    }

    document.getElementById("topBid").innerHTML = "$" + topBid;

    // highest bid to price
    var price = document.getElementById("Price").innerHTML;
    price = parseFloat(price.replace("$", "")).toFixed(2);

    if(topBid >= price) {
        price = (120 * topBid / 100).toFixed(2);
    }

    document.getElementById("Price").innerHTML = "$" + price;

    }
    
    // clear input box
    document.getElementById("bidAmount_textbox").value = "";
}

function getProductPage(product) {
    console.log("next time debug");
    // get image src
    var image = document.getElementById("productImage").src;
    //get price
    var price = document.getElementById("Price").innerHTML;
    price = parseFloat(price.replace("$", ""));
    // get top bid
    var topBid = document.getElementById("topBid").innerHTML;
    topBid = parseFloat(topBid.replace("$", ""));

    window.location.assign("product_details.html");

    console.log("hello world");

    switch(product){
        case 'AirJordan1':
            console.log(image);
            document.getElementById("productImage").src = image;
    }
};