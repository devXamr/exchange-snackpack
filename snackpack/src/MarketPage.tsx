import {useParams, useSearchParams} from "react-router-dom";
import CandleChart from "./CandleChart.tsx";
import {ethHourly} from "./SampleData";
import SingleOrderbookRow from "./SingleOrderbookRow.tsx";

export default function MarketPage(){
    const [searchParams] = useSearchParams()
    const marketId = searchParams.get("marketId")
    return <div className='flex h-full'>


        <div className='w-4/5 mr-3'>
        <div className='text-white flex justify-between bg-gray-600 rounded-lg px-4 py-4 mb-3'>
            <div>ETH</div>
            <div>
                <div>3848.68</div>
                <div>$3848.68</div>
            </div>
            <div>
                <div>24h Change</div>
                <div>+169.81 +4.62%</div>
            </div>
            <div>
                <div>24h High</div>
                <div>3,906.92</div>
            </div>
            <div>
                <div>24h Low</div>
                <div>3,688.75</div>
            </div>
            <div>
                <div>24h Volume (USDC)</div>
                <div>997,447.51</div>
            </div>

        </div>
        <div className='flex font-satoshi'>

        <div className='w-4/5'>
            <div className='w-full'>Chart</div>
        <CandleChart data={ethHourly}/>
        </div>


            <div className='w-1/5 text-white bg-[#14151b] px-4 py-3 rounded-lg'>
            <div className='flex mb-5'>
                <div className='px-3 py-1 bg-[#202127] text-white rounded-lg font-semibold mr-1 text-sm'>Book</div>
                <div className='px-3 py-1 bg-[#202127] text-white rounded-lg font-semibold ml-1 text-sm'>Trades</div>
            </div>
            <div>
                <div className='flex justify-between'>
                    <div className='text-sm text-white font-semibold'>Price(USDC)</div>
                    <div className='text-sm text-[#88909e] font-semibold'>Size(ETH)</div>
                    <div className='text-sm text-[#88909e] font-semibold'>Total(ETH)</div>
                </div>
                <div className='text-red-700 font-semibold text-sm'>
                    <SingleOrderbookRow data1={222} data2={111} data3={333}/>
                    <SingleOrderbookRow data1={222} data2={111} data3={333}/>
                    <SingleOrderbookRow data1={222} data2={111} data3={333}/>
                    <SingleOrderbookRow data1={222} data2={111} data3={333}/>
                    <SingleOrderbookRow data1={222} data2={111} data3={333}/>
                    <SingleOrderbookRow data1={222} data2={111} data3={333}/>
                    <SingleOrderbookRow data1={222} data2={111} data3={333}/>
                    <SingleOrderbookRow data1={222} data2={111} data3={333}/>
                    <SingleOrderbookRow data1={222} data2={111} data3={333}/>
                    <SingleOrderbookRow data1={222} data2={111} data3={333}/>
                </div>
                <div className='font-semibold text-lg'>
                    222.22
                </div>

                <div className='text-green-700 font-semibold text-sm'>
                    <SingleOrderbookRow data1={222} data2={111} data3={333}/>
                    <SingleOrderbookRow data1={222} data2={111} data3={333}/>
                    <SingleOrderbookRow data1={222} data2={111} data3={333}/>
                    <SingleOrderbookRow data1={222} data2={111} data3={333}/>
                    <SingleOrderbookRow data1={222} data2={111} data3={333}/>
                    <SingleOrderbookRow data1={222} data2={111} data3={333}/>
                    <SingleOrderbookRow data1={222} data2={111} data3={333}/>
                    <SingleOrderbookRow data1={222} data2={111} data3={333}/>
                    <SingleOrderbookRow data1={222} data2={111} data3={333}/>
                    <SingleOrderbookRow data1={222} data2={111} data3={333}/>
                </div>

            </div>
        </div>
        </div>

        </div>
        <div className='text-[#88909e] font-satoshi bg-[#14151b] w-1/5 rounded-md px-4 py-3 h-screen'>
            <div className='flex text-center mb-4 mt-4'>
                <div className='bg-[#1e2d2d] text-[#00c278] text-sm font-semibold w-full rounded-xl py-3'>Buy</div>
                <div className='bg-[#392429] text-[#f0484b] text-sm font-semibold w-full rounded-xl py-3'>Sell</div>
            </div>
            <div className='flex mb-4 '>
                <div className='px-3 py-1 bg-[#202127] text-white rounded-lg font-semibold mr-1'>Limit</div>
                <div className='px-3 py-1 bg-[#202127] text-white rounded-lg font-semibold ml-1'>Market</div>
            </div>
            <div className='flex justify-between mb-4'>
                <div>Available Balance</div>
                <div className='text-white'>0.00 USDC</div>
            </div>
            <div className='font-satoshi text-[#8e96a5] text-sm font-semibold'>Price</div>
            <input type={'text'} className='w-full py-3 bg-[#202127]  rounded-md mb-4'/>
            <div className='font-satoshi text-[#8e96a5] text-sm font-semibold'>Quantity</div>
            <input type={'number'} className='w-full py-3  bg-[#202127] rounded-md mb-4'/>

            <div  className='font-satoshi text-[#8e96a5] text-sm font-semibold'>Order value</div>
            <input type={'number'} className='w-full py-3 bg-[#202127]  rounded-md'/>

            <div className='font-semibold bg-white py-3 text-center text-black rounded-xl mt-6'>You cannot trade</div>

        </div>


    </div>
}