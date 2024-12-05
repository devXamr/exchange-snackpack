export default function SingleOrderbookRow({data1, data2, data3}){
    return <div className='flex justify-between'>
        <div>{data1}</div>
        <div>{data2}</div>
        <div>{data3}</div>
    </div>
}