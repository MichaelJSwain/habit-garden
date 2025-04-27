const TOKEN_KEY = "userDB";

export const apiLogin = (email, password) => {
    // look for user in "DB"
    const userDB = JSON.parse(localStorage.getItem(TOKEN_KEY));
    if (userDB && userDB.length) {
        const foundUser = userDB.find(user => user.email === email && user.password === password);
        return foundUser ? Math.ceil(Math.random() * 10000) : null;
    }
    return null;
}

export const apiRegister = (email, password) => {
    // check if user already exists
    const userDB = JSON.parse(localStorage.getItem(TOKEN_KEY)) || [];
    const foundUser = userDB.find(user => user.email === email);
    if (!foundUser) {
        // create new user
        const newUser = {
            email,
            password,
            habits: []
        }
        userDB.push(newUser);
        // save to "DB"
        localStorage.setItem(TOKEN_KEY, JSON.stringify(userDB));
        const token = Math.ceil(Math.random() * 10000);
        return {status: 201, token};
    }
    return {status: 409};
}