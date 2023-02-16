
import Logo from './assets/logo.svg'


const Navigation = () => {
    return (
        <div className='flex flex-wrap items-center justify-between px-12 bg-slate-500 sticky top-0 left-0 right-0 p-6'>
            <h1 className='text-[26px] text-white font-bold'>Clever Coder</h1>
            <div>
                <ul className=' hidden md:flex lg:flex  flex-wrap items-end justify-end gap-8 text-white font-medium text-md cursor-pointer'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                </ul>
                <button className='flex md:hidden lg:hidden bg-blue-500 px-4 py-2 rounded text-white'>Contact</button>
            </div>
        </div>
    )
}

export default Navigation