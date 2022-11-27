function newBid() {
    console.log("Hello World");
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