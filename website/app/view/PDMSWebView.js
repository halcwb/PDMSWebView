/*
 * File: app/view/PDMSWebView.js
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

Ext.define('PDMSWebView.view.PDMSWebView', {
    extend: 'Ext.container.Viewport',

    requires: [
        'PDMSWebView.view.DepartmentTabPanel',
        'PDMSWebView.view.ThemePicker',
        'PDMSWebView.view.DetailPanel',
        'PDMSWebView.view.DrugRepository'
    ],

    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'departmenttabpanel',
                    width: 222,
                    collapseDirection: 'left',
                    collapsible: true,
                    collapseMode: 'header',
                    region: 'west'
                },
                {
                    xtype: 'panel',
                    region: 'north',
                    height: 70,
                    itemId: 'pdmswebviewtitle',
                    collapsed: true,
                    collapsible: true,
                    title: 'PDMS Web View',
                    titleCollapse: false,
                    tools: [
                        {
                            xtype: 'tool',
                            itemId: 'toolstoggle',
                            type: 'gear'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            itemId: 'pdmswebviewtools',
                            items: [
                                {
                                    xtype: 'themepicker',
                                    frame: false,
                                    labelAlign: 'right',
                                    emptyText: 'Pick A Theme'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'mypanel11',
                    itemId: 'detailspanel',
                    width: 908,
                    region: 'center'
                },
                {
                    xtype: 'tabpanel',
                    region: 'east',
                    width: 500,
                    collapsed: true,
                    collapsible: true,
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'drugrepository'
                        },
                        {
                            xtype: 'gridpanel',
                            title: 'Therapeutische Groupen',
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'Name',
                                    text: 'Name'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'Text',
                                    text: 'Text'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});