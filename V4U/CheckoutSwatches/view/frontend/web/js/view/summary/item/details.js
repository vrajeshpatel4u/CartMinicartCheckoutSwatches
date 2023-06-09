define([], function () {
    var mixin = {
        defaults: {
            template: 'V4U_CheckoutSwatches/summary/item/details',
        },

        getSwatchesJsLayoutByItemId: function (itemId) {
            return this.swatchesJsLayout[itemId];
        }
    };

    return function (Component) {
        return Component.extend(mixin);
    };
});
