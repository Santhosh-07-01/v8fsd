const express = require("express");
const app = express();
const users = require("./users.json");
const fs = require("fs");
app.use(express.json());

app.put("/user/:id", (req, res) => {
  const id = req.params.id;
  const user1 = users.find((user) => user.id === Number(id));

  if (user1) {
    const index = users.indexOf(user1);

    users[index].dept = req.body.dept;
    res.json(users);
    fs.writeFileSync("./users.json", JSON.stringify(users));
  } else {
    res.send("invalid user");
  }
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
}); 