/*
 * File: app/view/TherapeuticGroupList.js
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

Ext.define('PDMSWebView.view.TherapeuticGroupList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.therapeuticgrouplist',

    title: 'Therapeutische Groupen',
    store: 'TherapeuticGroup',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 300,
                    dataIndex: 'Name',
                    text: 'Name'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'Text',
                    text: 'Text',
                    flex: 1
                }
            ]
        });

        me.callParent(arguments);
    }

});