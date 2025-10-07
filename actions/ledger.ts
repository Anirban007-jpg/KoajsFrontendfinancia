import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
export const createLedger = (ledger: any, token: any) => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/ledger/create`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body : JSON.stringify(ledger)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getLedger = (token: any) => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/ledger/get`, {
        method: 'GET',
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

export const getSpecificLedger = (token:any) => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/ledger/get/specific`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
       })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};



export const updateLedger = (token: any, ledger: any) => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/ledger/updateclosingbalance`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body : JSON.stringify(ledger)
       })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

