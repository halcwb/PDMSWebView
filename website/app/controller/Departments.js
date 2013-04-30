/*
 * File: app/controller/Departments.js
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

Ext.define('PDMSWebView.controller.Departments', {
    extend: 'Ext.app.Controller',

    onTreepanelItemClick: function(dataview, record, item, index, e, eOpts) {
        var store = Ext.StoreMgr.get("Patients");

        store.load({params:{department:record.data.text}});

        this.getController('DetailsPanel').setDetails('patientinfolist');
    },

    init: function(application) {
        this.control({
            "departmenttree": {
                itemclick: this.onTreepanelItemClick
            }
        });
    }

});
