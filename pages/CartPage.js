

class CartPage extends BasePage {
    constructor({ page }) {
        super({ page });
        this.cartItems = [];
        this.cartItemNames=this.locator(".inventory_item_name");
        this.cartItemPrices=this.locator(".inventory_item_price");
    }

    removeButon(itemName) {
        const itemIndex = this.cartItems.findIndex(item => item.name === itemName);
        if (itemIndex !== -1) {
            this.cartItems.splice(itemIndex, 1);
        }
    }

