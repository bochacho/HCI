var dataArray = [ 
    {
        name:"Black Sketchers",
        description: "Bought these new sketchers, didn't like them as much as I thought. Worn a couple of times, but in good shape.", 
        imgSrc:"https://www.skechers.ca/dw/image/v2/BDCN_PRD/on/demandware.static/-/Sites-skechers-master/default/dwe58888c7/images/large/232040_BBK.jpg?sw=1120", 
        buyNow: 156, 
        topBid: 130, 
        time: "10 days", 
        id: 1, 
        category: "Apparel",
        subCategory: "Shoes",
        yourBid: 20
    },
    {
        name:"2023 Hyundai Sonata",
        description:"Brand new 2023 Hyundai Sonata, has only been driven from the dealership to my house, 33km on it total. Dark grey and still has that new car smell", 
        imgSrc:"https://s7d1.scene7.com/is/image/hyundai/2022-sonata-1?wid=1200&hei=630&qlt=85,0&fmt=webp", 
        buyNow: 25000, 
        topBid: 20000, 
        time: "5 days", 
        id: 2,
        category: "Vehicles",
        subCategory: "Cars",
        yourBid: 0
    },
    {
        name:"Acer Laptop",
        description: "Used Acer laptop, couple years old now. Well used, works with most games and has Windows 11 downloaded on it currently.", 
        imgSrc:"https://images.acer.com/is/image/acer/Nitro5_AN515-57_Backliton_RGB-Black_01a-1?$Product-Cards-XL$", 
        buyNow: 500, 
        topBid: 250, 
        time: "13 days", 
        id: 3, 
        category: "Electronics",
        subCategory: "Laptop",
        yourBid: 0
    },
    {
        name:"God of War",
        description: "Bought it, played it, getting my money back to buy a new game.", 
        imgSrc:"https://i5.walmartimages.ca/images/Enlarge/320/586/6000205320586.jpg", 
        buyNow: 100, 
        topBid: 80, 
        time: "10 hours", 
        id: 4, 
        category: "Video Games",
        subCategory: "RPG",
        yourBid: 0
    },
    {
        name:"Pokemon Black 2",
        description: "Brand new still wrapped, selling my game collection, since I needed the money.", 
        imgSrc:"https://m.media-amazon.com/images/I/61yPBcOlSSL._AC_.jpg", 
        buyNow: 100, 
        topBid: 50, 
        time: "10 days", 
        id: 5, 
        category: "Video Games",
        subCategory: "RPG",
        yourBid: 0
    },
    {
        name:"Pokemon White",
        description: "Slightly used game for the DS, just doing some cleaning and want to gett rid of it.", 
        imgSrc: "https://m.media-amazon.com/images/I/81ZhVKZo2+L._AC_SL1500_.jpg", 
        buyNow: 80, 
        topBid: 40, 
        time: "13 days", 
        id: 6, 
        category: "Video Games",
        subCategory: "RPG",
        yourBid: 0
    },
    {
        name:"Jordan 6 Rings Shoes",
        description:"I have them you want them, they look exactly like how the picture shows.", 
        imgSrc:"https://static.nike.com/a/images/t_default/ebbcqzpccncawxrevftg/jordan-6-rings-mens-shoes-2VAD3Y.png", 
        buyNow: 225, 
        topBid: 165, 
        time: "6 days", 
        id: 7,
        category: "Apparel",
        subCategory: "Shoes",
        yourBid: 0
    },
    {
        name:"David Outwear Salvador Leather Jacket",
        description: "Sweet looking jacket, please buy it.", 
        imgSrc:"https://cdn.shopify.com/s/files/1/0279/2649/5337/products/sdljkgasdgagasdg_720x.jpg?v=1611154568", 
        buyNow: 156, 
        topBid: 100, 
        time: "15 hours", 
        id: 8, 
        category: "Apparel",
        subCategory: "Jackets",
        yourBid: 0
    },
    {
        name:"3 in 1 Down Jacket",
        description: "If you need a great jacket this is the one for you.", 
        imgSrc: "https://eddiebauer.scene7.com/is/image/EddieBauer/D0880094_854C1?$328V1$", 
        buyNow: 400, 
        topBid: 200, 
        time: "14 days", 
        id: 9, 
        category: "Apparel",
        subCategory: "Jackets",
        yourBid: 0
    },
    {
        name:"Black Flannel Long Sleeved Shirt",
        description: "Nice shirt, buy it if you want it.", 
        imgSrc: "https://assets.oakley.com/is/image/OakleyAFA/193517212704_bear-cozy-flannel_blackgrey-check_alternate_001.png?impolicy=OO_heroxl", 
        buyNow: 50, 
        topBid: 30, 
        time: "3 days", 
        id: 10, 
        category: "Apparel",
        subCategory: "Shirts",
        yourBid: 0
    },
    {
        name:"2022 Nissan Armada",
        description: "Year old car, been driven a bit, no problems with it, and it has 20000 kilometers on it.", 
        imgSrc:"https://images.dealer.com/ddc/vehicles/2022/Nissan/Armada/SUV/trim_SL_1b9143/color/Aspen%20White%20TriCoat-QAC-232,233,230-640-en_CA.jpg", 
        buyNow: 25000, 
        topBid: 13500, 
        time: "11 days", 
        id: 11, 
        category: "Vehicles",
        subCategory: "SUV",
        yourBid: 0
    },
    {
        name:"Playstation 5 Disc Console",
        description: "Bought this to resell, so it's brand new.", 
        imgSrc: "https://i5.walmartimages.com/dfw/8822aef6-95e8/k2-_1629675c-0caf-40a5-bc44-e61fe4531c0d.v1.jpg", 
        buyNow: 1200, 
        topBid: 990, 
        time: "12 days", 
        id: 12,
        category: "Electronics",
        subCategory: "Consoles",
        yourBid: 0
    },
    {
        name: "Black Weight Work Pants",
        description: "Great work pants.", 
        imgSrc: "https://assets.leevalley.com/Size4/10020/68K4923B-34-inch-black-dagan-pants-f-10.jpg", 
        buyNow: 110, 
        topBid: 82, 
        time: "6 days", 
        id: 13, 
        category: "Apparel",
        subCategory: "Pants",
        yourBid: 0
    },
    {
        name:"Playstation 5 Disc Console",
        description: "Brand new console, quit gaming because I suck.", 
        imgSrc: "https://i5.walmartimages.com/dfw/8822aef6-95e8/k2-_1629675c-0caf-40a5-bc44-e61fe4531c0d.v1.jpg", 
        buyNow: 1150, 
        topBid: 925, 
        time: "4 days", 
        id: 14,
        category: "Electronics",
        subCategory: "Consoles",
        yourBid: 0
    },
    {
        name: "Green Lamborghini",
        description: "Gotta go fast.", 
        imgSrc: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png", 
        buyNow: 1000000, 
        topBid: 800000, 
        time: "4 hours", 
        id: 15, 
        category: "Vehicles",
        subCategory: "Sports Cars",
        yourBid: 0
    },
    {
        name:"Playstation 5 Console",
        description: "Bought an Xbox so don't need this anymore.", 
        imgSrc: "https://i5.walmartimages.com/dfw/8822aef6-95e8/k2-_1629675c-0caf-40a5-bc44-e61fe4531c0d.v1.jpg", 
        buyNow: 1000, 
        topBid: 800, 
        time: "14 days", 
        id: 16,
        category: "Electronics",
        subCategory: "Consoles",
        yourBid: 0
    },
    {
        name: "Pokemon TCG: Lost Origin Booster Box",
        description: "Has 36 packs in it.", 
        imgSrc: "https://m.media-amazon.com/images/I/91gU9wk0dNL._AC_SY879_.jpg", 
        buyNow: 200, 
        topBid: 150, 
        time: "8 days", 
        id: 17,
        category: "Trading Cards",
        subCategory: "Pokemon",
        yourBid: 0
    },
    {
        name:"Pokemon TCG: Darkness Ablaze Booster Box",
        description: "36 random packs contained inside", 
        imgSrc:"https://breakawaysc.com/wp-content/uploads/2020/06/Pokemon-Darkness-Ablaze-Booster-Box.jpg", 
        buyNow: 250, 
        topBid: 200, 
        time: "10 days", 
        id: 18, 
        category: "Trading Cards",
        subCategory: "Pokemon",
        yourBid: 0
    },
    {
        name: "Mana Crypt",
        description: "Great card for any deck.", 
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/417pkIoupHL._AC_UL600_SR600,600_.jpg", 
        buyNow: 450, 
        topBid: 350, 
        time: "4 days", 
        id: 19, 
        category: "Trading Cards",
        subCategory: "Magic the Gathering",
        yourBid: 0
    },
    {
        name: "Mana Crypt",
        description: "Gets mana at the cost of life.", 
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/417pkIoupHL._AC_UL600_SR600,600_.jpg", 
        buyNow: 460, 
        topBid: 330, 
        time: "5 days", 
        id: 20, 
        category: "Trading Cards",
        subCategory: "Magic the Gathering",
        yourBid: 0
    },
    {
        name: "1st Edition Charizard Holofoil",
        description: "You know you want it.", 
        imgSrc: "https://m.media-amazon.com/images/I/715E1JA9DRL._AC_SX679_.jpg", 
        buyNow: 800, 
        topBid: 650, 
        time: "7 days", 
        id: 21, 
        category: "Trading Cards",
        subCategory: "Pokemon",
        yourBid: 0
    },
    {
        name: "Charizard GX Detective Pikachu",
        description: "Special card from the Detective Pikachu set.", 
        imgSrc: "https://m.media-amazon.com/images/I/71rO-1zFVyL._AC_SY879_.jpg", 
        buyNow: 90, 
        topBid: 45, 
        time: "8 days", 
        id: 22,
        category: "Trading Cards",
        subCategory: "Pokemon",
        yourBid: 0
    },
    {
        name: "Rockband 4 Full Kit",
        description: "Game with a guitar and drum set.", 
        imgSrc: "https://cdn.vox-cdn.com/thumbor/gCLSxh6nBTPFxyan4XLUTLJBJ6E=/0x0:1080x720/1400x1400/filters:focal(0x0:1080x720):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/46538044/rock-band-4-instrument-bundles_1280.0.0.jpg", 
        buyNow: 120, 
        topBid: 80, 
        time: "15 hours", 
        id: 23, 
        category: "Video Games",
        subCategory: "Other",
        yourBid: 0
    },
    {
        name:"Rockband 4",
        description: "Just the game, doesn't come with guitar or drums", 
        imgSrc: "https://di2ponv0v5otw.cloudfront.net/posts/2022/10/14/6349b09e4bf9ffcce2910903/m_6349b0aaa0e6c6cbf83e3284.jpg", 
        buyNow: 80, 
        topBid: 50, 
        time: "11 days", 
        id: 24, 
        category: "Video Games",
        subCategory: "Other",
        yourBid: 0
    },
    {
        name: "Omen Laptop",
        description: "Been used for 2 years a little old.", 
        imgSrc: "https://www.omen.com/content/dam/sites/omen/worldwide/laptops/2022-laptops-2-0/OMEN%2016%20LAPTOP.png", 
        buyNow: 800, 
        topBid: 300, 
        time: "14 days", 
        id: 25, 
        category: "Electronics",
        subCategory: "Laptops",
        yourBid: 0
    },
    {
        name: "Omen Laptop",
        description: "Brand new never been used.", 
        imgSrc: "https://www.hp.com/ca-en/shop/html/local/campaigns/gamora/images/omenGam_q3fy18_hero4.png", 
        buyNow: 1400, 
        topBid: 1000, 
        time: "11 days", 
        id: 26, 
        category: "Electronics",
        subCategory: "Laptop",
        yourBid: 0
    },
    {
        name: "Forza 7 for Xbox One",
        description:"Great racing game, Xbox exclusive.", 
        imgSrc: "https://m.media-amazon.com/images/I/71RTZKIq4bL._AC_SX569_.jpg", 
        buyNow: 100, 
        topBid: 70, 
        time: "3 days", 
        id: 27,
        category: "Video Games",
        subCategory: "Racing",
        yourBid: 0
    },
    {
        name: "Pokemon Platinum",
        description: "Old game, but a great one.", 
        imgSrc: "https://i5.walmartimages.com/asr/048d9c47-87cb-4d92-8bbf-4d7be9fdf447.62cbccd8d2fd4d6c95065a1a946b9f5f.jpeg", 
        buyNow: 200, 
        topBid: 60, 
        time: "8 days", 
        id: 28, 
        category: "Video Games",
        subCategory: "RPG",
        yourBid: 0
    },
    {
        name: "Pokemon Pearl",
        description: "Great game from my childhood, used.", 
        imgSrc: "https://m.media-amazon.com/images/I/51dGqCLLP-L.jpg", 
        buyNow: 70, 
        topBid: 50, 
        time: "5 days", 
        id: 29, 
        category: "Video Games",
        subCategory: "RPG",
        yourBid: 0
    },
    {
        name: "Pokemon Brilliant Diamond",
        description: "Remake of Pokemon Diamond", 
        imgSrc:"https://diamondpearl.pokemon.com/en-us/assets/boxart_bd.png", 
        buyNow: 90, 
        topBid: 70, 
        time: "3 days", 
        id: 30, 
        category: "Video Games",
        subCategory: "RPG",
        yourBid: 0
    }
]

function leftScrollApparel() {
    const left = document.querySelector(".scroll-images1");
    left.scrollBy(-930, 0);
}

function rightScrollApparel() {
    const right = document.querySelector(".scroll-images1");
    right.scrollBy(930, 0);
}

function leftScrollElectronics() {
    const left = document.querySelector(".scroll-images2");
    left.scrollBy(-930, 0);
}

function rightScrollElectronics() {
    const right = document.querySelector(".scroll-images2");
    right.scrollBy(930, 0);
}

function leftScrollCards() {
    const left = document.querySelector(".scroll-images3");
    left.scrollBy(-930, 0);
}

function rightScrollCards() {
    const right = document.querySelector(".scroll-images3");
    right.scrollBy(930, 0);
}

function leftScrollCars() {
    const left = document.querySelector(".scroll-images4");
    left.scrollBy(-930, 0);
}

function rightScrollCars() {
    const right = document.querySelector(".scroll-images4");
    right.scrollBy(930, 0);
}

function leftScrollVideo() {
    const left = document.querySelector(".scroll-images5");
    left.scrollBy(-930, 0);
}

function rightScrollVideo() {
    const right = document.querySelector(".scroll-images5");
    right.scrollBy(930, 0);
}

function makeProduct(id, image, name, time, topBid, buy, idScroll){
    var element = document.getElementById(idScroll);

    element.innerHTML += `
    <div class="product" onclick = "openItem('${id}')">
        <a>
            <img class="product-img" id = "productImageSrc" src=${image} alt="image"/>
            <div class="product-text">
                <b id = "productName">${name}<br></b>
                <text>Time Left:${time}</text>
                <text>Top Bid: $${topBid}</text>
                <text>Buy Now: $${buy}</text>
            </div>
            <div class = "productId" id = "productId" style = "visibility: hidden">${id}</div>
        </a>
    </div>
    `    
}

function addAllProducts(){
    for(let i = 0; i < dataArray.length; i++){
        makeProduct(dataArray[i].id, dataArray[i].imgSrc,dataArray[i].name,dataArray[i].time,dataArray[i].topBid,dataArray[i].buyNow,dataArray[i].category)
    }
}


var selectedItem = 0;
function newItem(product){
    var element = document.getElementById("list-container");

    element.innerHTML += `
        <div id="list-card-container-${product.id}" class="listCard" onclick = "openItem('${product.id}')">
            <img id="list-card-image-${product.id}" src=${product.imgSrc} class="listCardImage"/>
            <div class="listCardMiddle" id="list-card-middle-${product.id}">
                <h2 id="list-card-middle-title-${product.id}">${product.name}</h2>
                <p id="list-card-middle-description-${product.id}">${product.description}</p>
            </div>
            <div class="listCardSection" id="list-card-times-${product.id}">
                <p id="list-card-times-title-${product.id}" style="white-space: nowrap;">Time Left:</p>
                <p class="listCardPricesText" id="list-card-times-date-${product.id}">${product.time}</p>
            </div>
            <div class="listCardSection" id="list-card-buy-${product.id}">
                <p style="white-space: nowrap;" id="list-card-buy-text-${product.id}">Buy Now Price:</p>
                <p class="listCardPricesText" id="list-card-buy-price-${product.id}">$${product.buyNow}</p>
            </div>
            <div class="listCardSection" id="list-card-bid-${product.id}">
                <p style="white-space: nowrap;" id="list-card-bid-text-${product.id}">Top Bid:</p>
                <p class="listCardPricesText" id="list-card-bid-price-${product.id}">$${product.topBid}</p>
            </div>
        </div>
    `
};

function allItemsByFilters(filters){
    if(!filters){
        element = document.getElementById("list-container");
        element.innerHTML = '';
        for(let i = 0; i < dataArray.length; i++){
            newItem(dataArray[i]);
        }
    }
}

function openItem(itemId){
    var i = -1;
    var flag = 0
    while (i < dataArray.length && flag == 0) {
        i++;

        if (dataArray[i].id == itemId) {
            flag = 1
        }
    }
    sessionStorage.setItem("productId", dataArray[i].id);
    sessionStorage.setItem("productName", dataArray[i].name);
    sessionStorage.setItem("productImageSrc", dataArray[i].imgSrc);
    sessionStorage.setItem("productPrice", dataArray[i].buyNow);
    sessionStorage.setItem("productTopBid", dataArray[i].topBid);
    sessionStorage.setItem("productDetails", dataArray[i].description);
    sessionStorage.setItem("productCurrentBid", dataArray[i].yourBid);
    window.open("product_details.html");
}

function setCurrentBid(itemId, newPrice, newTopBid, newBid){
    var i = -1;
    var flag = 0
    while (i < dataArray.length && flag == 0) {
        i++;

        if (dataArray[i].id == itemId) {
            flag = 1
            console.log("bid:" + newBid);
            console.log("new price:" + newPrice);
            console.log("top bid:" + newTopBid);
            
        }
    }

    dataArray[i].yourBid = newBid;
    dataArray[i].buyNow = newPrice;
    dataArray[i].topBid = newTopBid;
    console.log("db bid:" + dataArray[i].yourBid);
    console.log("db price:" + dataArray[i].buyNow);
    console.log("db topbid:" + dataArray[i].topBid);

    console.log("db bid:" + dataArray[i].yourBid);
}

function fillBidWatch(){
    var element = document.getElementById("Winning");
    var winning = 0;

    for(let i = 0; i < dataArray.length; i++){
        if(dataArray[i].yourBid > 0){
            winning++;
            element.innerHTML += `
            <div class="listCard"  onclick = "openItem('${dataArray[i].id}')">

                <img class="listCardImage" src=${dataArray[i].imgSrc}>

                <div class="listCardMiddle">
                    <text class="currentBids_name"  style = "margin-top: 1em;">${dataArray[i].name}</text>
                </div>
                    <div style = "display:flex; flex-direction: column; margin-top: 1em;">
                        <p class="currentBids_timeandprice">Time Left: </p>
                        <p class="currentBids_timeandprice">${dataArray[i].time}</p>
                    </div>

                <p class="currentBids_price"  style = "margin-top: 1em;">My bid: <br> $${dataArray[i].yourBid}</p>
            </div>
            `
        }
    }

    element = document.getElementById("WinLose");

    element.innerHTML = `You are currently winning on&nbsp<b>${winning}</b>&nbspbids and losing on&nbsp<b>0</b>&nbspbids`
}
