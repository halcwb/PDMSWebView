/*
 * File: app.js
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

//@require @packageOverrides
Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    models: [
        'Department',
        'PatientInfo',
        'Order',
        'TreeRecord'
    ],
    stores: [
        'Departments',
        'DepartmentTree',
        'Themes',
        'Patients',
        'Orders',
        'DrugRepository',
        'TherapeuticGroup'
    ],
    views: [
        'PDMSWebView',
        'DepartmentTree',
        'DepartmentList',
        'DepartmentTabPanel',
        'ThemePicker',
        'DetailPanel',
        'PatientList',
        'PatientRecord',
        'Orders',
        'DrugRepository'
    ],
    autoCreateViewport: true,
    controllers: [
        'Departments',
        'Themes',
        'Tools',
        'Patients',
        'DetailsPanel',
        'Orders'
    ],
    name: 'PDMSWebView',

    launch: function() {
        Ext.Ajax.cors = true;
        Ext.Ajax.useDefaultXhrHeader = false;
        Ext.Ajax.useDefaultHeader = false;
        Ext.Ajax.disableCaching = false;
    }

});
