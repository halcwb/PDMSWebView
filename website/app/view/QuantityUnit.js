/*
 * File: app/view/QuantityUnit.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
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

Ext.define('PDMSWebView.view.QuantityUnit', {
    extend: 'Ext.form.FieldContainer',
    alias: 'widget.myfieldcontainer11',

    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    fieldLabel: 'Label',
    hideLabel: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'numberfield',
                    width: 100,
                    fieldLabel: 'Quantity',
                    labelAlign: 'top',
                    labelSeparator: ' '
                },
                {
                    xtype: 'combobox',
                    width: 100,
                    fieldLabel: 'Unit',
                    labelAlign: 'top',
                    labelSeparator: ' ',
                    editable: false,
                    displayField: 'Name',
                    valueField: 'Name'
                }
            ]
        });

        me.callParent(arguments);
    },

    setStore: function(store) {
        var me = this;
        me.items.items[1].store = store;
    }

});