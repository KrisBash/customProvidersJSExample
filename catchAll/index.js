module.exports = async function (context, req) {
    context.log('Unhandled path request');

    //catch all
    context.res = {
        status: 409,
        body: "Invalid path."
    };
    
};