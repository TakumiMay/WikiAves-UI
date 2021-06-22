
const baseURL = process.env.REACT_APP_BASE_URL

export const fetchWithoutToken = ( endpoint, data, method = 'GET' ) => {
    
    const url = `${ baseURL }/${ endpoint }`;

    if ( method === 'GET' ){
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }

}

