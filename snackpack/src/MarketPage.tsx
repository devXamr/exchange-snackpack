import {useParams, useSearchParams} from "react-router-dom";

export default function MarketPage(){
    const [searchParams] = useSearchParams()
    const marketId = searchParams.get("marketId")
    return <div>
        <div className='text-white'>This is the market page for {marketId}</div>

    </div>
}