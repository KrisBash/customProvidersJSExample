module.exports = async function (context, req) {
    context.log('Item create or update received');

    var subscriptionId = req.params.subscriptionId
    var rgName = req.params.rgame
    const providerName = "nodeJsExample"
    const resourceType = "myResource"
    
    
    if (req.body.properties != null){
       //create or update resource
        var resourceName = req.params.resourceName
        var resProperties = req.body.properties
        context.log(req.body) //log request body 

        //resource creation routine

        //return well-formed resource schema
        var resourceBody = {
            id: "/subscriptions/" + subscriptionId+ "resourceGroups/" + rgName + "/providers/Microsoft.CustomProviders/" + providerName + "/" + resourceType + "/" + resourceName,
            type: "/subscriptions/" + subscriptionId + "resourceGroups/" + rgName + "/providers/Microsoft.CustomProviders/" + providerName + "/" + resourceType,
            name: resourceName,
            properties: resProperties
        }

        context.res = {
            // status: 200, 
            body: resourceBody
        };
    }else{
        context.res = {
            status: 409, /* Defaults to 200 */
            body: "Invalid resource configuration"
        };    
    }
};