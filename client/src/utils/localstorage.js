

export function setLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

export function clearLocalStorage(key){
    localStorage.removeItem(key);
}

export function getAuthStorage(key="authUser"){
    return JSON.parse(localStorage.getItem(key));
}

export function clearAuthStorage(key="authUser"){
    return localStorage.removeItem(key)
}
