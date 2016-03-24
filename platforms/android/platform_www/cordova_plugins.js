cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.layar.cordova.LayarPlugin/www/lib/underscore-min-1.6.js",
        "id": "com.layar.cordova.LayarPlugin.underscorejs",
        "runs": true
    },
    {
        "file": "plugins/com.layar.cordova.LayarPlugin/www/lib/q.min.js",
        "id": "com.layar.cordova.LayarPlugin.Q",
        "runs": true
    },
    {
        "file": "plugins/com.layar.cordova.LayarPlugin/www/LayarPlugin.js",
        "id": "com.layar.cordova.LayarPlugin.LayarPlugin",
        "merges": [
            "LayarPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "com.layar.cordova.LayarPlugin": "8.4.1"
};
// BOTTOM OF METADATA
});