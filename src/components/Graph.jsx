
import LinesChart from './LineChart';



export default function Graph() {


    return (
        <div className="rounded-lg w-full bg-white p-5 h-96 flex flex-col space-y-4">
            <h1 className='font-bold'>Spending - Last 7 days</h1>
            <div className="w-full border-b-2 pb-4 border-orange-50 cursor-pointer" >
                <LinesChart />
            </div>
            <img />
            <div className="grid grid-cols-2 ">
                <div>
                    <p className='text-sm'>Total this month</p>
                    <p className='font-bold text-2xl'>$478.33</p>
                </div>
                <div className='text-sm leading-6 text-right pb-10'>
                    <p className='font-bold'>+2.4%</p>
                    <p >from last month</p>
                </div>
                
            </div>
        </div>
    )
}
