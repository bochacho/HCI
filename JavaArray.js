function leftScroll() {
    const left = document.querySelector(".scroll-images");
    left.scrollBy(-930, 0);
}
function rightScroll() {
    const right = document.querySelector(".scroll-images");
    right.scrollBy(930, 0);
}
function makeProduct(image, name, time, topBid, buy, productPage, idScroll){
    var element = document.getElementById(idScroll);

    element.innerHTML += `
    <div class="product">
        <a href= ${productPage}>
            <img class="product-img" src=${image} alt="image"/>
            <b>${name}<br></b>
            <text>Time Left: ${time}<br></text>
            <text>Top Bid: $${topBid}<br></text>
            <text>Buy Now: $${buy}</text>
        </a>
    </div>
    `    
}
