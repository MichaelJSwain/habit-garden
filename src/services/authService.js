const TOKEN_KEY = "user";

export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function saveToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
    localStorage.removeItem(TOKEN_KEY);
}

export function isLoggedIn() {
    return !!getToken(); // Returns true if token exists
}

export async function fetchCurrentUser() {
    const token = getToken();

    if (!token) throw new Error('No token');

    // const res = await fetch('/api/me', {
    //     headers: { Authorization: `Bearer ${token}` },
    // });
    
    // "fetch"
    const userDB = JSON.parse(localStorage.getItem("userDB"));
    if (userDB) {
        const foundUser = userDB.find(user => user.id == token);
        return {status: 201, user: foundUser};
    }


    // if (!res.ok) throw new Error('Invalid token');

    // return await res.json(); // should return user object
}