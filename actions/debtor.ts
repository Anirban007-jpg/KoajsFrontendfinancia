import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
export const createDebtor = (debtor: any, token: any) => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/debtor/create`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body : JSON.stringify(debtor)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateDebtor = (token: any) => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/debtor/update`, {
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