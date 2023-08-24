function orderSandwich(...items: string[]): void {
    console.log("Sandwich order summary:");
    if (items.length === 0) {
        console.log("No items selected.");
    } else {
        console.log("Items:");
        for (const item of items) {
            console.log("* " + item);
        }
    }
    console.log("<<<<__________>>>>");
}

// Call the function with different numbers of arguments
orderSandwich("Turkey", "Lettuce", "Tomato", "Mayo");
orderSandwich("Ham", "Swiss Cheese");
orderSandwich("Tuna Salad", "Pickles", "Mustard", "Onions", "Pepperjack Cheese");
