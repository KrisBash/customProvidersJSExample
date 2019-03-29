var request = require("request");
var async = require('async');
const reqAuthentication = true;

module.exports = async function (context, req) {
    context.log('Item delete received');

    if (reqAuthentication ){
        var clientCert = "foo"
        var isAuthenticated = await authenticate(clientCert);
        context.log(isAuthenticated);
    }
    context.log("delete item")
    var result = await deleteItem(req);

    context.res = {
        status: result
    };
    
};

async function deleteItem(req){
    return new Promise((resolve,reject) => {
        var subscriptionId = req.params.subscriptionId
        var rgName = req.params.rgame        
        var resourceName = req.params.resourceName
        //delete item, return 200 on success
        resolve(200)
        //if item already delete, return 204
    });
};

async function authenticate(clientCert){
    return new Promise((resolve, reject) => {
        var metadataUri = "https://www.google.com"
        request(metadataUri, { json: true }, (err, res, body) => {
            if (err) { reject(err) };
            resolve(body);
        });
    });
};

 
  


