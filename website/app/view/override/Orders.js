Ext.define('PDMSWebView.view.override.Orders', {
    override: 'PDMSWebView.view.Orders',
    
    initComponent: function() {
		var me = this;
     
    	Ext.applyIf(me, {
            features: [
                { ftype: 'grouping' },
                { 
                    ftype: 'filters', 
                    encode: false, 
                    local: true,
                    filters: [
                    	{ type: 'string', dataIndex: 'Type'} 
                    ]
                }
            ]
		});
        
        me.callParent(arguments);
	}
    
});