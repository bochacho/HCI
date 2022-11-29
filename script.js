function newBid() {
    // get value from text box
    var value = document.getElementById("bidAmount_textbox").value;

    // check if value is numeric
    if(!isNaN(value) && (value != "")) {
        if (value < 0) {
            window.alert("Bidding amount should be greater than 0!!!")
            return;
        }
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
    else{
        window.alert("Enter numeric values only")
        return;
    }
    
    // clear input box
    document.getElementById("bidAmount_textbox").value = "";
}

function getProductPage(product) {
    console.log("next time debug");
    // get product name
    var name = document.getElementById("list-card-middle-title-" + product).innerHTML;
    // get image src
    var image = document.getElementById("list-card-image-"+ product).src;
    //get price
    var price = document.getElementById("list-card-buy-price-" + product).innerHTML;
    // get top bid
    var topBid = document.getElementById("list-card-bid-price-" + product).innerHTML;
    // get details
    var details = document.getElementById("list-card-middle-details-" + product).innerHTML;

    sessionStorage.setItem("productName", name);
    sessionStorage.setItem("productImageSrc", image);
    sessionStorage.setItem("productPrice", price);
    sessionStorage.setItem("productTopBid", topBid);
    sessionStorage.setItem("productDetails", details);
    window.open("product_details.html");
};

var image = sessionStorage.getItem("productImageSrc").trim();
var productName = sessionStorage.getItem("productName").trim();
var price = sessionStorage.getItem("productPrice").trim();
var topBid = sessionStorage.getItem("productTopBid").trim();
var details = sessionStorage.getItem("productDetails").trim();


document.getElementById("productImage").src = image;
document.getElementById("productName").innerHTML = productName;
document.getElementById("Price").innerHTML = price;
document.getElementById("topBid").innerHTML = topBid;
document.getElementById("details").innerHTML = details;

sessionStorage.clear();