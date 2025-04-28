const userDB = [
    {
        email: "dave@mail.com",
        password: "dave99"
    },
    {
        email: "tim@yahoo.com",
        password: "timtam"
    },
    {
        email: "sarah@mail.co.uk",
        password: "avocado"
    },
];

export const login = (email, password) => {
    console.log("logging in user = ", email);
    // check if user details match user details in fake DB
    const foundUser = userDB.find(user => user.email === email && user.password === password);
    return foundUser;
}

export const register = (email, password) => {
    console.log("registering user = ", email);
    // check if user details already exist
    const foundUser = userDB.find(user => user.email === email);
    if (!foundUser) {
        const newUser = {
            email,
            password
        }
        userDB.push(newUser);
    }
    return foundUser;
}