function newBid() {
    // get value from text box
    var value = document.getElementById("bidAmount_textbox").value;

    // check if value is numeric
    if(!isNaN(value) && (value != "")) {
        if (value < 0) {
            window.alert("Bidding amount should be greater than 0!!!")
            return;
        }
        console.log(value);
        value = parseFloat(value).toFixed(2);
    
        // assign value to current bid
        document.getElementById("currentBid").innerHTML = "$" + value;

        // compare to highest bid
        var topBid = document.getElementById("topBid").innerHTML;
        topBid = parseFloat(topBid.replace("$", "")).toFixed(2);

        if(parseFloat(value) > parseFloat(topBid)){
            console.log("value > topBid");
            topBid = value;
        }

        topBid = parseFloat(topBid).toFixed(2);

        document.getElementById("topBid").innerHTML = "$" + topBid;

        // highest bid to price
        var price = document.getElementById("price").innerHTML;
        price = parseFloat(price.replace("$", "")).toFixed(2);
        console.log("new bid = " + value);
        console.log(price);
        console.log(topBid);

        if(parseFloat(topBid) > parseFloat(price)) {
            console.log("newBid > price");
            price = (120 * topBid / 100).toFixed(2);
        }

        console.log(price);
        price = parseFloat(price).toFixed(2);
        document.getElementById("price").innerHTML = "$" + price;

        // get product id
        var id = document.getElementById("productId").innerHTML;
        setCurrentBid(id, price, topBid, value);

    }
    else{
        window.alert("Enter numeric values only")
        return;
    }
    
    // clear input box
    document.getElementById("bidAmount_textbox").value = "";
}

/*was being used to move from browse.html page to product_details.html page
It has now been replaced by openItem() function in JavaArray.js*/
// function getProductPage(product) {
//     // get product name
//     var name = document.getElementById("list-card-middle-title-" + product).innerHTML;
//     // get image src
//     var image = document.getElementById("list-card-image-"+ product).src;
//     //get price
//     var price = document.getElementById("list-card-buy-price-" + product).innerHTML;
//     // get top bid
//     var topBid = document.getElementById("list-card-bid-price-" + product).innerHTML;
//     // get details
//     var details = document.getElementById("list-card-middle-description-" + product).innerHTML;

//     sessionStorage.setItem("productName", name);
//     sessionStorage.setItem("productImageSrc", image);
//     sessionStorage.setItem("productPrice", price);
//     sessionStorage.setItem("productTopBid", topBid);
//     sessionStorage.setItem("productDetails", details);
//     window.open("product_details.html");
// };

var image = sessionStorage.getItem("productImageSrc").trim();
var productName = sessionStorage.getItem("productName").trim();
var price = sessionStorage.getItem("productPrice").trim();
var topBid = sessionStorage.getItem("productTopBid").trim();
var details = sessionStorage.getItem("productDetails").trim();
var id = sessionStorage.getItem("productId").trim();
var currentBid = sessionStorage.getItem("productCurrentBid").trim();

document.getElementById("productImage").src = image;
document.getElementById("productId").innerHTML = id;
document.getElementById("productName").innerHTML = productName;
document.getElementById("price").innerHTML = "$" + price;
document.getElementById("topBid").innerHTML = "$" + topBid;
document.getElementById("currentBid").innerHTML = "$" + currentBid;
document.getElementById("description").innerHTML = details;
