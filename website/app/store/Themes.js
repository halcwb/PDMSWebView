/*
 * File: app/store/Themes.js
 *
 * This file was generated by Sencha Architect version 2.2.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('PDMSWebView.store.Themes', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'MyStore',
            data: [
                {
                    name: 'Classic',
                    url: 'http://localhost/ExtJs-4.2.0/resources/css/ext-all.css'
                },
                {
                    name: 'Neptune',
                    url: 'http://localhost/ExtJs-4.2.0/resources/css/ext-all-neptune.css'
                },
                {
                    name: 'Access',
                    url: 'http://localhost/ExtJs-4.2.0/resources/css/ext-all-access.css'
                },
                {
                    name: 'Gray',
                    url: 'http://localhost/ExtJs-4.2.0/resources/css/ext-all-gray.css'
                }
            ],
            fields: [
                {
                    name: 'name'
                },
                {
                    name: 'url'
                }
            ]
        }, cfg)]);
    }
});