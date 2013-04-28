/*
 * File: app/store/DrugRepository.js
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

Ext.define('PDMSWebView.store.DrugRepository', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'PDMSWebView.model.TreeRecord'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            autoSync: true,
            model: 'PDMSWebView.model.TreeRecord',
            storeId: 'MyXmlTreeStore1',
            root: {
                text: 'Formulary',
                id: 'root'
            },
            proxy: {
                type: 'ajax',
                url: 'http://localhost/pdmswebservices/drugrepository.asmx/GetDrugRepository',
                reader: {
                    type: 'xml',
                    root: 'root',
                    record: 'record'
                }
            }
        }, cfg)]);
    }
});