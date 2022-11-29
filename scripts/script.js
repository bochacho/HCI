// function productPage(product){
//     var element = document.getElementById("list-container");

//     element.innerHTML = `
//     <div class = "row">
//         <div class = "col-8">
//             <div class = "row">
//                 <h1 class="PageTitle_h1">Product Details</h1>

//                 <img class="productImage" id = "productImage" src=${product.imgSrc} alt=${product.name}>
//             </div>
      
//             <div class = "row">
//                 <h2 class="subtitle_h2">Description</h2>

//                 <p  id = "details">${product.details}</p>
//             </div>
//         </div>
    
//         <div class = "col-4 buy_section">
//             <h2 class="subtitle_h2 space_top" id = "productName">${product.name}</h2>
      
//             <div class = "row section_spacing">
//                 <div class = "row line_space">
//                     <div class = "col">
//                         Buy Now Price:
//                     </div>
  
//                     <div class = "col" id = "Price">
//                     ${product.buyNow}
//                     </div>
//                 </div>
                   
//                 <button type="button" class="btn btn-success btn-lg">BUY</button>
//             </div>
        
//             <div class = "row">
//                 <div class = "row">
//                     <div class = "col">
//                         Highest Bid:
//                     </div>

//                     <div class = "col" id = "topBid">
//                     ${product.topBid}
//                     </div>
//                 </div>
                
//                 <div class = "row line_space">
//                     <div class = "col">
//                         Your Current Bid:
//                     </div>

//                     <div class = "col" id = "CurrentBid">
//                         $0.00
//                     </div>
//                 </div>

//                 <div class="input-group mb-3">
//                     <div class="input-group-prepend">
//                         <span class="input-group-text">Your Bid $</span>
//                     </div>
            
//                     <input type="text" placeholder="Enter bidding amount" class="form-control" id = "bidAmount_textbox" aria-label="Amount">
//                 </div>

//                 <button type="button" class="btn btn-primary btn-lg" onclick = "newBid()">BID</button>
//             </div>
//         </div>
//     </div>
//     `
// }

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

        if(parseFloat(value) > parseFloat(topBid)){
            console.log("value > topBid");
            topBid = value;
        }

        topBid = parseFloat(topBid).toFixed(2);

        document.getElementById("topBid").innerHTML = "$" + topBid;

        // highest bid to price
        var price = document.getElementById("Price").innerHTML;
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
    // get product name
    var name = document.getElementById("list-card-middle-title-" + product).innerHTML;
    // get image src
    var image = document.getElementById("list-card-image-"+ product).src;
    //get price
    var price = document.getElementById("list-card-buy-price-" + product).innerHTML;
    // get top bid
    var topBid = document.getElementById("list-card-bid-price-" + product).innerHTML;
    // get details
    var details = document.getElementById("list-card-middle-description-" + product).innerHTML;

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
document.getElementById("description").innerHTML = details;
