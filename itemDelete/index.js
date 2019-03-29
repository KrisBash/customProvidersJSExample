var request = require("request");
var async = require('async');

module.exports = async function (context, req) {
    context.log('Item delete received');
    context.log(1)
    var isAuthenticated = await authenticate()
    context.res = {
        status: 200,
        body: "ffoo"
    };
};

async function authenticate(){
    return new Promise((resolve, reject) => {
        var metadataUri = "https://mgmtexp-svc-int.trafficmanager.net/metadata/authentication"
        if(1 < 2 ){
            resolve(2)
        }
       else{
            reject(false)
        }
    });
}

 
  


