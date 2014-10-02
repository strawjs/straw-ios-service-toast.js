// straw-ios-service-toast.js

window.straw.service.toast = (function (straw, Promise) {
    'use strict';

    var exports = {};

    exports.toast = function (text) {

        straw.core.serviceCall('toast', 'toast', {text: text});

    };

    return exports;

}(window.straw, window.Promise));
