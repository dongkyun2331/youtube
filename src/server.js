import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("logout");
};
const handleLogin = (req, res) => {
  return res.send("login");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`${PORT}`);

app.listen(PORT, handleListening);
