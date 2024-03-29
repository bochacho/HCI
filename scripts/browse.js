
var dataArray = [ 
    {
        name:"newJordans",
        description:"new Jordans", 
        imgSrc:"Images/Logo_green.png", 
        buyNow:"$300", 
        topBid:"$210", 
        endDate:"8:13 PM 12/25/2022", 
        id:"1",
        category: 1,
        subCategory: 11,
    },
    {
        name:"AMG GT 63",
        description:"You have long since overtaken the mainstream. Demonstrate your claim to leadership with the new Mercedes-AMG GT 4-door coupés: Uncompromising performance, first-class road capability and as individual as you are.", 
        imgSrc:"https://www.motortrend.com/uploads/2022/06/2022-Mercedes-AMG-GT63-004-1.jpg", 
        buyNow:"$1780", 
        topBid:"1430", 
        endDate:"8:13 PM 12/25/2022", 
        id:2,
        category: 1,
        subCategory: 11,
        inBidWatch: true,
    }
]

var selectedItem = 0;

function newItem(product){
    var element = document.getElementById("list-container");

    element.innerHTML += `
        <div id="list-card-container-${product.id}" class="listCard">
            <img id="list-card-image-${product.id}" src=${product.imgSrc} class="listCardImage"/>
            <div class="listCardMiddle" id="list-card-middle-${product.id}">
                <h2 id="list-card-middle-title-${product.id}">${product.name}</h2>
                <p id="list-card-middle-description-${product.id}">${product.description}</p>
            </div>
            <div class="listCardSection" id="list-card-times-${product.id}">
                <p id="list-card-times-title-${product.id}" style="white-space: nowrap;">End Time:</p>
                <p class="listCardPricesText" id="list-card-times-date-${product.id}">${product.endDate}</p>
            </div>
            <div class="listCardSection" id="list-card-buy-${product.id}">
                <p style="white-space: nowrap;" id="list-card-buy-text-${product.id}">Buy Now Price:</p>
                <p class="listCardPricesText" id="list-card-buy-price-${product.id}">${product.buyNow}</p>
            </div>
            <div class="listCardSection" id="list-card-bid-${product.id}">
                <p style="white-space: nowrap;" id="list-card-bid-text-${product.id}">Top Bid:</p>
                <p class="listCardPricesText" id="list-card-bid-price-${product.id}">${product.topBid}</p>
            </div>
        </div>
    `
};

newItem(dataArray[0]);
newItem(dataArray[1]);