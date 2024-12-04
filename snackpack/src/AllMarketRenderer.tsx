import {Line, LineChart} from "recharts";
import {useState} from "react";
import axios from "axios";

async function get7d():any{

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.backpack.exchange/api/v1/klines?symbol=ETH_USDC&interval=1d&startTime=1732559400',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            'Access-Control-Expose-Headers': 'Content-Length, Content-Range'
        },
        credentials: false
    };

    let data = await axios.request(config)




    console.log(data)
    return data

}
export default function AllMarketRenderer(){
    const startTime = Math.floor(new Date('2024-11-26T00:00:00').getTime() / 1000);
    console.log(startTime)

    const [data, setData] = useState(get7d)

    return <div className='mt-10 w-2/4 mx-auto'>
        <div className='bg-[#14151b] pt-6 pb-6'>
            <div className='mx-4 border-b border-[#969999] pb-2'>
                <div className='flex justify-between px-6'>
                    <div className='text-[#969faf] text-md '>Name</div>
                    <div className='text-[#969faf] text-md'>Market Cap</div>
                    <div className='text-[#969faf] text-md'>Last 7 Days</div>
                </div>


            </div>
            <div className='flex justify-between'>
                <div>
                    <div>Ethereum</div>
                    <div>ETH</div>
                </div>

                <div>$432.2B</div>
                <div>
                    <LineChart width={400} height={400} data={data}>
                        <Line type="monotone" dataKey="uv" stroke="#0000000" />
                    </LineChart>
                </div>

            </div>
        </div>
    </div>


}