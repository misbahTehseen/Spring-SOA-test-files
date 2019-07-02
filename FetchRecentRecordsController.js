({
	RecentRecords : function(component, event, helper) {
        var action = component.get("c.DisplayAccounts");
        action.setCallback(this,function(response){
            component.set("v.accounts",response.getReturnValue())
        });
		$A.enqueueAction(action);
	}
})
