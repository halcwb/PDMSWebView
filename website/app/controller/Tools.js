/*
 * File: app/controller/Tools.js
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

Ext.define('PDMSWebView.controller.Tools', {
    extend: 'Ext.app.Controller',

    onButtonClick: function(button, e, eOpts) {
        var bar = Ext.ComponentQuery.query('#pdmswebviewtools')[0];
        console.log(bar);
        bar.hidden = !bar.hidden;
        console.log(bar);

    },

    init: function(application) {
        this.control({
            "#toolstoggle": {
                click: this.onButtonClick
            }
        });
    }

});
