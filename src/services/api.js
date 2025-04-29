const TOKEN_KEY = "userDB";

export const apiLogin = (email, password) => {
    // look for user in "DB"
    const userDB = JSON.parse(localStorage.getItem(TOKEN_KEY));
    if (userDB && userDB.length) {
        const foundUser = userDB.find(user => user.email === email && user.password === password);
        if (foundUser) {
            return {status: 201, token: foundUser.id, user: foundUser};
        }
        return {status: 409};
    }
    return {status: 409};
}

export const apiRegister = (email, password) => {
    // check if user already exists
    const userDB = JSON.parse(localStorage.getItem(TOKEN_KEY)) || [];
    const foundUser = userDB.find(user => user.email === email);
    if (!foundUser) {
        const id = Math.ceil(Math.random() * 10000000);
        // create new user
        const newUser = {
            id,
            email,
            password,
            habits: []
        }
        userDB.push(newUser);
        // save to "DB"
        localStorage.setItem(TOKEN_KEY, JSON.stringify(userDB));
        return {status: 201, token: id, user: newUser};
    }
    return {status: 409};
}