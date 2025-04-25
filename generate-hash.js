const bcrypt = require("bcrypt");

const password = "testpass"; // You can change this if you want

bcrypt.hash(password, 10, (err, hash) => {
  if (err) throw err;
  console.log("Hashed password:", hash);
});
