import Rocket from '../assets/rocket.png';
import Calender from '../assets/calendar.png'
import People from '../assets/people.png'
const StatSection = () => {
    return (
        <>
        <div className='flex gap-2 w-[80%] mt-10'>
            <div className='flex flex-col gap-2 justify-center items-center'>
                <div className='w-[40%] '>
                    <img src={Rocket} alt='Rocket'/>
                </div>
                <p className='text-2xl font-semibold '>2,500</p>
                <p className='text-sm font-semibold text-gray-600'>enterprise organisations successfully launched</p>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center '>
                <div className='w-[23%]'>
                    <img src={Calender} alt='Rocket'/>
                </div>
                <p className='text-2xl font-semibold'>45,000</p>
                <p className='text-sm font-semibold text-gray-600'>enterprise users onboarded successfully</p>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center '>
                <div className='w-[50%]'>
                    <img src={People} alt='Rocket'/>
                </div>
                <p className='text-2xl font-semibold'>200,000+</p>
                <p className='text-sm font-semibold text-gray-600'>professional trained on product and strategy</p>
            </div>
            
        </div>
        </>
    )
}
export default StatSection;