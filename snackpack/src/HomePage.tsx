import AllMarketRenderer from "./AllMarketRenderer.tsx";


export default function HomePage(){
    return <div>
        <div className='flex row justify-between px-7 mt-3'>
            <div className='font-bold text-white text-2xl'>Snackpack</div>
            <div className='flex justify-between'>
                <div className='text-[#00C278] font-bold bg-[#00C278] bg-opacity-25 px-4 mr-5 py-1.5 rounded-md'>Sign up</div>
                <div className='text-[#4c4c94] bg-[#4c4c94] bg-opacity-35 font-bold px-4 py-1.5 rounded-md'>Sign in</div>
            </div>
        </div>
        <div className='w-3/5 m-auto mt-3 bg-headerBg1 bg-center rounded-md'>
           <div className='pt-40 pb-14'>
            <div className='text-white font-bold text-5xl px-12'>New Token: 100xDevs</div>
            <div className='text-white px-12 mt-1.5'>Market 100D/USDC is now live</div>
        </div>


    </div>
        <AllMarketRenderer/>

    </div>
}