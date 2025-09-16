import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
export const Signup = (data: any) => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/register`, {
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

export const signin = (info: any) => {
    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/login`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(info)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const signout = (next: () => void) => {
    removeCookie('token');
    removeLocalStorage('loggedinuser');
    next();

    return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/signout`, {
        method: 'GET'
    })
        .then(response => {
            console.log('signout success');
        })
        .catch(err => console.log(err));
};

// set cookie
export const setCookie = (key: string, value: string) => {
    if (process.browser) {
        cookie.set(key, value, {
            expires: 1
        });
    }
};

export const removeCookie = (key: string) => {
    if (process.browser) {
        cookie.remove(key, {
            expires: 1
        });
    }
};
// get cookie
export const getCookie = (key: string) => {
    if (process.browser) {
        return cookie.get(key);
    }else {
        return false;
    }
};
// localstorage
export const setLocalStorage = (key: string, value: any) => {
    if (process.browser) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export const removeLocalStorage = (key: string) => {
    if (process.browser) {
        localStorage.removeItem(key);
    }
};

// autheticate user by pass data to cookie and localstorage
export const authenticate = (data: { token: string; individual: any; }, next: () => void) => {
    setCookie('token', data.token);
    setLocalStorage('loggedinuser', data.user);
    next();
};


export const isAuth = () => {
    if (process.browser) {
        const cookieChecked = getCookie('token');
        if (cookieChecked) {
            if (localStorage.getItem('loggedinuser')) {
                return JSON.parse(localStorage.getItem('loggedinuser'));
            } else {
                return false;
            }
        }
    }else{
        return false;
    }
};

