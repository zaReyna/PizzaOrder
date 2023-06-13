function checkoutOrder() {

    // To validate that all required fields are selected
    
    let firstName = document.getElementById("first_name").value;
    if (firstName == "") {
        document.getElementById("field_1").innerHTML = ("Your first name is required");
    }
    else
        document.getElementById("field_1").innerHTML = "*";
    
    let lastName = document.getElementById("last_name").value;
    if (lastName == "") {
        document.getElementById("field_2").innerHTML = ("Your last name is required");
    }
    else
        document.getElementById("field_2").innerHTML = "*";

    let phoneNumber = document.getElementById("phone#").value;
    if (phoneNumber == "") {
        document.getElementById("field_3").innerHTML = ("Your phone number is required");
    }
    else 
        document.getElementById("field_3").innerHTML = "*";
    
    let pizzaSize = document.forms["order_form"]["size"].value;
    if (pizzaSize == "") {
        document.getElementById("size_required").innerHTML = "Please select an option";
    }
    else
        document.getElementById("size_required").innerHTML = "*";
    
    let pizzaCrust = document.forms["order_form"]["crust"].value;
    if (pizzaCrust == "") {
        document.getElementById("crust_required").innerHTML = "Please select an option";
    }
    else
        document.getElementById("crust_required").innerHTML = "*";
    
    let pizzaFlavour = document.forms["order_form"]["flavour"].value;
    if (pizzaFlavour == "") {
        document.getElementById("flavour_required").innerHTML = "Please select an option";
    }
    else
        document.getElementById("flavour_required").innerHTML = "*";

    let beverage = document.getElementById("drink").value;
    if (beverage = document.getElementById("drink").selectedValue == "none") {
        document.getElementById("drink_required").innerHTML = "Please select an option";
    }
    else
        document.getElementById("drink_required").innerHTML = "*";
    
    // Declaring pizza variables, make sure the right radio buttons are selected

    let vegPizza; 
    let pepPizza;
    let cheesePizza;

    let beveragePrice = document.getElementById("drink").value;
    beveragePrice = parseFloat(2.0);

    let smallSize;
    let medSize;

    // Prices of pizza based on sizes and flavour

    let pizzaPrice;

    // Veggie Pizza option

    if (vegPizza = document.getElementById("veggie").checked == true) {
        if (smallSize = document.getElementById("small").checked == true) {
            pizzaPrice = parseFloat(10.0);
            console.log(pizzaPrice);
        }
        else if (medSize = document.getElementById("med").checked == true) {
            pizzaPrice = parseFloat(12.0);
            console.log(pizzaPrice);
        }
        else {
            pizzaPrice = parseFloat(14.0);
            console.log(pizzaPrice);
        }
    }

    // Pepperoni Pizza option

    if (pepPizza = document.getElementById("pepperoni").checked) {
        if (smallSize = document.getElementById("small").checked == true) {
            pizzaPrice = parseFloat(20.0);
            console.log(pizzaPrice);
        }
        else if (medSize = document.getElementById("med").checked == true) {
            pizzaPrice = parseFloat(22.0);
            console.log(pizzaPrice);
        }
        else {
            pizzaPrice = parseFloat(24.0);
            console.log(pizzaPrice);
        }
    }

    // Cheese Pizza option

    if (cheesePizza = document.getElementById("cheese").checked) {
        if (smallSize = document.getElementById("small").checked == true) {
            pizzaPrice = parseFloat(30.0);
            console.log(pizzaPrice);
        }
        else if (medSize = document.getElementById("med").checked == true) {
            pizzaPrice = parseFloat(32.0);
            console.log(pizzaPrice);
        }
        else {
            pizzaPrice = parseFloat(34.0);
            console.log(pizzaPrice);
        }
    }

    // Calculations for the total of the order

    let totalPrice = pizzaPrice + beveragePrice;
    document.getElementById("subtotal").innerHTML = "Your total is " + totalPrice;
    console.log(totalPrice);

    let tax = (parseFloat(totalPrice) * parseFloat(0.13));
    let tax_Total = tax.toFixed(2);
    document.getElementById("tax").innerHTML = "The tax total is " + tax_Total;

    let fullPrice = (parseFloat(totalPrice) * parseFloat(1.13));
    let grandTotal = fullPrice.toFixed(2);

    console.log(totalPrice);
    console.log(tax_Total);
    console.log(grandTotal);

    document.getElementById("grand_total").innerHTML = "Your grand total is " + grandTotal;
    
}