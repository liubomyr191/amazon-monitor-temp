'use strict';

var PriceMonitorServerConnector = angular.module('PriceMonitorServerConnector', ['ngResource', 'djangoRESTResources']);

PriceMonitorServerConnector.factory('Product', ['djResource', function(djResource) {
    var Product = djResource(SETTINGS.uris.product, {'asin': '@asin'}, {
    });
    
    Product.prototype.get_sparkline_url = function() {
        return SETTINGS.uris.sparkline.replace(':asin', this.asin);
    };
    
    return Product;
}]);

PriceMonitorServerConnector.factory('Subscription', ['djResource', 'Product', function(djResource) {
    return djResource(SETTINGS.uris.subscription, {'public_id': '@public_id'}, {});
}]);

PriceMonitorServerConnector.factory('Price', ['djResource', function(djResource) {
    return djResource(SETTINGS.uris.price, {'asin': '@asin'}, {});
}]);
