var config = {
    config: {
        'mixins': {
            'Magento_Checkout/js/view/summary/item/details': {
                'V4U_CheckoutSwatches/js/view/summary/item/details': true
            }
        }
    },
    map: {
        '*': {
            'Magento_Checkout/template/minicart/item/default.html':
                'V4U_CheckoutSwatches/template/minicart/item/default.html'
        }
    }
};
