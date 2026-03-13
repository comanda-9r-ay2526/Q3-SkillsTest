function tyDollaSign(){
    const ADMIN_FEE = 50.00;
    const TICKET_PRICE = 250;
    
    let qty = document.getElementById("qty").value;

    qty = Number(qty);

    let herGo = TICKET_PRICE * qty;
    let total = herGo + ADMIN_FEE;

    document.getElementById("subtotal").value = "Subtotal: ₱" + herGo.toFixed(2);
    document.getElementById("tota").value = "Total: ₱" + total.toFixed(2);
}

function getdatMoney(){

    const FEEFEE = 50.00;
    const TICKET = 250;

    // get ticket quantity
    let qty = document.getElementById("tixInput").value;

    // convert to number
    qty = Number(qty);

    // calculate
    let subby = TICKET * qty;
    let total = subby + FEEFEE;

    // display results
    document.getElementById("subb").innerText = "Subtotal: ₱" + subby.toFixed(2);
    document.getElementById("totr").innerText = "Total: ₱" + total.toFixed(2);

}