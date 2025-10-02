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