var get_url = require('./get_url');
var axios = require('axios');

module.exports = function (host, port, protocol, token) {
    var baseUrl = get_url(host, port, protocol);
    var apiUrl = baseUrl + '/api';
    var headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Token ' + token
    };

    var ajax = axios.create({
        baseURL: base_url,
        timeout: 1000,
        headers: headers
    });

    var create = function(asset, attributes) {
        if (asset !== 'project') return; // i know i know, but the point is to have more endpoints available in the future
        if (!attributes.hasOwnProperty('name')) return;

        var endpoint = apiUrl + '/create_' + asset;
        return ajax.post(endpoint, attributes);
    };

    var configurePlugin = function (plugin, config) {

        var template = {
            plugins: [{
                plugin: {
                    "config": {
                        "_enabled": true,
                        "instances": [
                            {
                                "isdefault": true,
                                "name": "versionone1",
                                "token": "1.JZSZVE7e2SlgzwUEp/IGxiXRicI=",
                                "url": "http://localhost/alejandro"
                            }
                        ]
                    },
                    "icon": "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",
                    "label": "VersionOne",
                    "schema": {
                        "properties": {
                            "_enabled": {
                                "description": "Only 'enabled' plugins will appear in the Stage Editor.",
                                "format": "checkbox",
                                "propertyOrder": 1,
                                "title": "Enabled",
                                "type": "boolean"
                            },
                            "instances": {
                                "format": "tabs",
                                "items": {
                                    "format": "table",
                                    "properties": {
                                        "isdefault": {
                                            "format": "checkbox",
                                            "propertyOrder": 5,
                                            "title": "Is Default?",
                                            "type": "boolean"
                                        },
                                        "name": {
                                            "propertyOrder": 1,
                                            "title": "Name",
                                            "type": "string"
                                        },
                                        "token": {
                                            "description": "VersionOne user API Token",
                                            "format": "password",
                                            "propertyOrder": 2,
                                            "title": "API Token",
                                            "type": "string"
                                        },
                                        "url": {
                                            "description": "URL, for example: https://www12.v1host.com/company",
                                            "propertyOrder": 4,
                                            "title": "URL",
                                            "type": "string"
                                        }
                                    },
                                    "title": "Instance",
                                    "type": "object"
                                },
                                "options": {
                                    "disable_array_reorder": true
                                },
                                "propertyOrder": 2,
                                "title": "Instances",
                                "type": "array"
                            }
                        },
                        "required": [
                            "instances"
                        ],
                        "testmodule": "v1plugin.main",
                        "title": "VersionOne",
                        "type": "object"
                    }
                }
            }]
        };


        var endpoint = apiUrl + '/configure_plugins?' + 'plugins=' + plugin;
        return ajax.post(endpoint, template);
    };


    return {
        create: create,
        configurePlugin: configurePlugin
    }
};