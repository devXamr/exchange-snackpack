import ethImg from "./assets/ethereum-eth.svg";
import {Line, LineChart} from "recharts";
import {useNavigate} from "react-router-dom";

export default function SingleHomepageCoin({image, coinName, initials, marketCap, data, market}) {

    const navigate = useNavigate()

    function handleNav(){
        navigate(`/trade/?marketId=${market}`,)
    }

    const color = data[data.length - 1].close > data[data.length - 2].close ? '#34eb3d': '#a83238'
    return <div
        onClick={handleNav}
        className='flex row justify-between mx-6 border-b border-t border-gray-600 py-2 px-2 hover:bg-gray-700 hover:cursor-pointer rounded-sm'>
        <div className='text-white flex w-1/6'>

            <img src={image} alt='Eth logo' className='w-10 h-10 mt-1.5 '/>
            <div className='ml-3'>
                <div className='text-xl font-bold'>{coinName}</div>
                <div className='font-light'>{initials}</div>
            </div>
        </div>

        <div className='text-white text-xl font-semibold mt-2 text-center'>{marketCap}</div>




        <div className='h-14'>
            <LineChart width={100} height={300} data={data}>
                <Line type="monotone" dataKey="close" stroke={color}  dot={false}/>
            </LineChart>
        </div>

    </div>
}