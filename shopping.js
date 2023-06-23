function calculateItemCost(){
    document.getElementById("itemCost").value = document.getElementById("itemUnitPrice").value * document.getElementById("itemQuantity").value
}

//DisplayCalculation for the subtotal,shipping and tax
function displayCalculation() {
    var itemsStored = localStorage.getItem('cart');
    if (itemsStored) {
        contacts = JSON.parse(itemsStored);
        var subTotal = 0;
        $.each(contacts, function (index, cart) {
            subTotal = subTotal + Number(cart.itemCost);
        });
        var shipping = 0.065*subTotal;
        var tax = (0.11 * subTotal) + shipping;
        var total = subTotal+shipping+tax;

        document.getElementById("subTotal").value = subTotal
        document.getElementById("shipping").value = shipping
        document.getElementById("tax").value = tax
        document.getElementById("total").value = total
    }else{
        document.getElementById("subTotal").value = ""
        document.getElementById("shipping").value = ""
        document.getElementById("tax").value = ""
        document.getElementById("total").value = ""
    }
}