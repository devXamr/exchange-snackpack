import {Line, LineChart} from "recharts";
import {useState} from "react";
import axios from "axios";
import ethImg from './assets/ethereum-eth.svg'
import SingleHomepageCoin from "./SingleHomepageCoin.tsx";
import {bitcoinData, solanaData} from './SampleData.js'
import solanaImg from './assets/solanaLogoMark.svg'

import bitImg from './assets/bitcoinLogo.webp'
async function get7d():Promise<any> {

    const baseURL = 'http://localhost:3000'

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/api/v1/klines?symbol=ETH_USDC&interval=1d&startTime=1732559400',
        headers: { },
        withCredentials: false
    };

    const response = await axios.request(config)
    console.log(response.data)

    const dataArr = []

    for(let i = 0; i < response.data.length; i++){
        dataArr.push({"close" : Number(response.data[i].close)})
    }

    console.log(dataArr)
    return dataArr



}
export default function AllMarketRenderer(){
    const startTime = Math.floor(new Date('2024-11-26T00:00:00').getTime() / 1000);
    console.log(startTime)

    const [data, setData] = useState(get7d)
    console.log('this is data', data)

    const hardcodedData = [
        {
            "close": "3325.66",
            "end": "2024-11-27 00:00:00",
            "high": "3461.27",
            "low": "3255.42",
            "open": "3413.11",
            "quoteVolume": "300220.94881",
            "start": "2024-11-26 00:00:00",
            "trades": "2232",
            "volume": "90.0268"
        },
        {
            "close": "3658.49",
            "end": "2024-11-28 00:00:00",
            "high": "3682.57",
            "low": "3302.41",
            "open": "3319.49",
            "quoteVolume": "456601.710704",
            "start": "2024-11-27 00:00:00",
            "trades": "1679",
            "volume": "128.8546"
        },
        {
            "close": "3578.62",
            "end": "2024-11-29 00:00:00",
            "high": "3662.85",
            "low": "3534.06",
            "open": "3656.3",
            "quoteVolume": "112936.515627",
            "start": "2024-11-28 00:00:00",
            "trades": "1051",
            "volume": "31.4368"
        },
        {
            "close": "3596.39",
            "end": "2024-11-30 00:00:00",
            "high": "3646.74",
            "low": "3537.5",
            "open": "3576.98",
            "quoteVolume": "184130.647873",
            "start": "2024-11-29 00:00:00",
            "trades": "1061",
            "volume": "51.2211"
        },
        {
            "close": "3706.04",
            "end": "2024-12-01 00:00:00",
            "high": "3737.5",
            "low": "3572.22",
            "open": "3591.45",
            "quoteVolume": "305235.79814",
            "start": "2024-11-30 00:00:00",
            "trades": "1425",
            "volume": "82.9337"
        },
        {
            "close": "3709.02",
            "end": "2024-12-02 00:00:00",
            "high": "3747.76",
            "low": "3662.5",
            "open": "3712.5",
            "quoteVolume": "215981.273863",
            "start": "2024-12-01 00:00:00",
            "trades": "1203",
            "volume": "58.1762"
        },
        {
            "close": "3643.75",
            "end": "2024-12-03 00:00:00",
            "high": "3760",
            "low": "3557.16",
            "open": "3715.67",
            "quoteVolume": "266631.752551",
            "start": "2024-12-02 00:00:00",
            "trades": "1709",
            "volume": "73.2202"
        },
        {
            "close": "3619",
            "end": "2024-12-04 00:00:00",
            "high": "3665.28",
            "low": "3505.89",
            "open": "3644.87",
            "quoteVolume": "313465.070354",
            "start": "2024-12-03 00:00:00",
            "trades": "1620",
            "volume": "87.4259"
        },
        {
            "close": "3722.07",
            "end": "2024-12-05 00:00:00",
            "high": "3750",
            "low": "3622.85",
            "open": "3625.83",
            "quoteVolume": "284125.629697",
            "start": "2024-12-04 00:00:00",
            "trades": "751",
            "volume": "76.6651"
        }
    ]

    return <div className='mt-10 w-3/5 mx-auto'>
        <div className='bg-[#14151b] pt-6 pb-6'>
            <div className='mx-4 pb-2'>
                <div className='flex justify-between px-6'>
                    <div className='text-[#969faf] text-md w-1/6'>Name</div>
                    <div className='text-[#969faf] text-md'>Market Cap</div>
                    <div className='text-[#969faf] text-md'>Last 7 Days</div>
                </div>


            </div>

            <SingleHomepageCoin data={hardcodedData} coinName='Ethereum' image={ethImg} initials='ETH' marketCap='$432.4B' market='ETH_USDC'/>
            <SingleHomepageCoin data={bitcoinData} coinName='Bitcoin' image={bitImg} initials='BTC' marketCap='$1.9T'  market='BTC_USDC'/>
            <SingleHomepageCoin data={solanaData} coinName='Solana' image={solanaImg} initials='SOL' marketCap='$111.3B'  market='SOL_USDC'/>
        </div>
    </div>


}