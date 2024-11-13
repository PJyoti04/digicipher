const express = require("express");
const app = express();
const { z } = require("zod");
const { DC_User } = require("./database");
const PORT = 5000;

app.use(express.json());

const loginSchema = z.object({
  username: z.string().min(4),
  password: z.string().min(8),
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const result = loginSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json(result.error.issues);
  }

  try {
    DC_User.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.json({ msg: "User Created" });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({
      msg: "Error creating user",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log("server is running on port 5000");
});
