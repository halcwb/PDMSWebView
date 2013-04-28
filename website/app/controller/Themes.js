/*
 * File: app/controller/Themes.js
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

Ext.define('PDMSWebView.controller.Themes', {
    extend: 'Ext.app.Controller',

    onComboboxSelect: function(combo, records, eOpts) {
        Ext.util.CSS.swapStyleSheet('theme', records[0].data.url);
    },

    init: function(application) {
        this.control({
            "combobox": {
                select: this.onComboboxSelect
            }
        });
    }

});