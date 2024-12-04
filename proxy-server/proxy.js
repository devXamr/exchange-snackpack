import express from 'express'
import axios from "axios";

const app = express()


app.get('/proxy/klines', async (req, res) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.backpack.exchange/api/v1/klines?symbol=ETH_USDC&interval=1d&startTime=1732559400',
        headers: { }
    };

    const response = await axios.request(config)

    res.send(response)
})
