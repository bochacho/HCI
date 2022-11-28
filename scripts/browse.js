function newItem(name, description, imgSrc, buyNow, topBid, endDate, id){
    var element = document.getElementById("list-container");

    element.innerHTML += `
        <div id="list-card-container-${id}" class="listCard">
            <img id="list-card-image-${id}" src=${imgSrc} class="listCardImage"/>
            <div class="listCardMiddle" id="list-card-middle-${id}">
                <h2 id="list-card-middle-title-${id}">${name}</h2>
                <p id="list-card-middle-description-${id}">${description}</p>
            </div>
            <div class="listCardSection" id="list-card-times-${id}">
                <p id="list-card-times-title-${id}" style="white-space: nowrap;">End Time:</p>
                <p class="listCardPricesText" id="list-card-times-date-${id}">${endDate}</p>
            </div>
            <div class="listCardSection" id="list-card-buy-${id}">
                <p style="white-space: nowrap;" id="list-card-buy-text-${id}">Buy Now Price:</p>
                <p class="listCardPricesText" id="list-card-buy-price-${id}">${buyNow}</p>
            </div>
            <div class="listCardSection" id="list-card-bid-${id}">
                <p style="white-space: nowrap;" id="list-card-bid-text-${id}">Top Bid:</p>
                <p class="listCardPricesText" id="list-card-bid-price-${id}">${topBid}</p>
            </div>
        </div>
    `
}
newItem(name="newJordans",description="new Jordans", imgSrc="Images/Logo_green.png", buyNow="$300", topBid="$210", endDate="8:13 PM 12/25/2022", id="1" );
newItem(name="newJordans",description="new Jordans", imgSrc="Images/Logo_green.png", buyNow="$300", topBid="$210", endDate="8:13 PM 12/25/2022", id="1" );
newItem(name="newJordans",description="new Jordans", imgSrc="Images/Logo_green.png", buyNow="$300", topBid="$210", endDate="8:13 PM 12/25/2022", id="1" );
newItem(name="newJordans",description="new Jordans", imgSrc="Images/Logo_green.png", buyNow="$300", topBid="$210", endDate="8:13 PM 12/25/2022", id="1" );
newItem(name="newJordans",description="new Jordans", imgSrc="Images/Logo_green.png", buyNow="$300", topBid="$210", endDate="8:13 PM 12/25/2022", id="1" );
newItem(name="newJordans",description="new Jordans", imgSrc="Images/Logo_green.png", buyNow="$300", topBid="$210", endDate="8:13 PM 12/25/2022", id="1" );
newItem(name="newJordans",description="new Jordans", imgSrc="Images/Logo_green.png", buyNow="$300", topBid="$210", endDate="8:13 PM 12/25/2022", id="1" );
newItem(name="newJordans",description="new Jordans", imgSrc="Images/Logo_green.png", buyNow="$300", topBid="$210", endDate="8:13 PM 12/25/2022", id="1" );
