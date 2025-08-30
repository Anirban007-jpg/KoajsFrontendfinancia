
import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
export const Signup = (data: any) => {
    return fetch(`http://localhost:5007/register`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};