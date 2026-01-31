const axios = require('axios');

module.exports = async (phrase) => {
    const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    });

    // Create formatted object as required by assignment
    const formattedObj = {
        data: results.data,
        status: results.status,
        statusText: results.statusText,
        headers: results.headers,
        requestHeader: results.config.headers
    };

    // Return the formatted object
    return formattedObj;
};
