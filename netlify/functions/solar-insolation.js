const data = require('../../static/outputlim.json')

exports.handler = async event => {
    const row = event.queryStringParameters.row
    if (!row) {
       return {
        statusCode: 422,
        body: 'please provide a row'
       }
    }
    return {
        statusCode: 200,
         body: JSON.stringify(data[parseInt(row)])
    }
}
