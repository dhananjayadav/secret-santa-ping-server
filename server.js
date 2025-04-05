require("dotenv").config();
const { default: axios } = require("axios");
const express = require("express");

const app = express();
const PORT = 3000;

const SECRET_SENTA_INTERVAL = 5 * 60000; // 5 mins

const secretSantaPing = async () => {
    console.log("PING-SECRET-SANTA")
    const response = await axios.post(`${process.env.SECRET_SENTA_SERVER_BASE_URL}/api/secret-santa/assign`);
    console.log({ msg: "SECRET_SANTA", response });
}

setInterval(() => {
    secretSantaPing()
}, SECRET_SENTA_INTERVAL);

app.listen(PORT, ()=> {
    console.log(`Server running on PORT: ${PORT}`)
})