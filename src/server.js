import express from "express";

const PORT = 4000;

const app = express();

const handleHome = () => console.log("home");

app.get("/", handleHome);

const handleListening = () => console.log(`${PORT}`);

app.listen(PORT, handleListening);
