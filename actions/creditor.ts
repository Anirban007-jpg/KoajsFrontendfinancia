import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
export const createCreditor = (creditor: any, token: any) => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/creditor/create`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body : JSON.stringify(creditor)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateCreditor = (token: any) => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/creditor/update`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};