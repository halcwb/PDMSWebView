/*
 * File: app/model/Order.js
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

Ext.define('PDMSWebView.model.Order', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'ID',
            type: 'string'
        },
        {
            name: 'Number',
            type: 'int'
        },
        {
            name: 'Type',
            type: 'string'
        },
        {
            name: 'StartDateTime',
            type: 'date'
        },
        {
            name: 'StopDateTime',
            type: 'date'
        },
        {
            name: 'Prescriber',
            type: 'string'
        },
        {
            name: 'Text',
            type: 'string'
        },
        {
            name: 'Active',
            type: 'boolean'
        }
    ]
});