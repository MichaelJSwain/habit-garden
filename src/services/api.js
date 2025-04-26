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

export const apiLogin = (email, password) => {
    // placeholder logic
    const foundUser = userDB.find(user => user.email === email && user.password === password);
    return foundUser ? Math.ceil(Math.random() * 10000) : null;
}