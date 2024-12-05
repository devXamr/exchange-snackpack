import AllMarketRenderer from "./AllMarketRenderer.tsx";


export default function HomePage(){
    return <div>
        <div className='w-3/5 m-auto mt-3 bg-headerBg1 bg-center rounded-md'>
           <div className='pt-40 pb-14'>
            <div className='text-white font-bold text-5xl px-12'>New Token: 100xDevs</div>
            <div className='text-white px-12 mt-1.5'>Market 100D/USDC is now live</div>
        </div>


    </div>
        <AllMarketRenderer/>

    </div>
}