module.exports = async function (context, req) {
    context.log('Read request received');

    var subscriptionId = req.params.subscriptionId
    var rgName = req.params.rgame
    const providerName = "nodeJsExample"
    const resourceType = "myResource"
    
    
    if (req.params.resourceName != null){
       //get resource by Id
        var resourceName = req.params.resourceName
        
        //resource GET routine
        var resourceBody = {
            id: "/subscriptions/" + subscriptionId+ "resourceGroups/" + rgName + "/providers/Microsoft.CustomProviders/" + providerName + "/" + resourceType + "/" + resourceName,
            type: "/subscriptions/" + subscriptionId + "resourceGroups/" + rgName + "/providers/Microsoft.CustomProviders/" + providerName + "/" + resourceType,
            name: resourceName,
            properties: {
                hello: "world"
            }
        }

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: resourceBody
        };

    }else {
        //collection enumeration
        var resourceName = req.params.resourceName
        //resource enumeration routine
        var resourceList = 
            [
                {
                    id: "/subscriptions/" + subscriptionId + "resourceGroups/" + rgName + "/providers/Microsoft.CustomProviders/" + providerName + "/" + resourceType + "/firstResource",
                    type: "/subscriptions/" + subscriptionId + "resourceGroups/" + rgName + "/providers/Microsoft.CustomProviders/" + providerName + "/" + resourceType,
                    name: resourceName,
                    properties: {
                        hello: "hello"
                    }
                },
                {
                    id: "/subscriptions/" + subscriptionId + "resourceGroups/" + rgName + "/providers/Microsoft.CustomProviders/" + providerName + "/" + resourceType + "/secondResource",
                    type: "/subscriptions/" + subscriptionId + "resourceGroups/" + rgName + "/providers/Microsoft.CustomProviders/" + providerName + "/" + resourceType,
                    name: resourceName,
                    properties: {
                        hello: "world"
                    }
                }  
            ]   
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: resourceList
        };            
    }

};