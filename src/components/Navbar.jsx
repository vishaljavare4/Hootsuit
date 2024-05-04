import { FaEarlybirds } from "react-icons/fa";
const NavBar = () => {
    return (
        <>
            <div className="flex w-[80%] p-4 items-center gap-10 justify-between items-center">
                <div className="flex items-center gap-2">
                    <FaEarlybirds className="text-5xl text-green-500"/>
                    <p className="text-2xl font-semibold text-green-600">HootSuite™</p>
                </div>
                <div className="flex gap-4">
                    <p className="font-semibold hover:cursor-pointer hover:text-green-700">Platforms</p>
                    <p className="font-semibold hover:cursor-pointer hover:text-green-700">Plans</p>
                    <p className="font-semibold hover:cursor-pointer hover:text-green-700">Enterprise</p>
                    <p className="font-semibold hover:cursor-pointer hover:text-green-700">Resources</p>
                    <p className="font-semibold hover:cursor-pointer hover:text-green-700">Education</p>
                </div>
                <div className="flex gap-4 items-center">
                    <p className="text-gray-700 text-sm hover:cursor-pointer hover:text-gray-900">Contact Us</p>
                    <p className="text-gray-700 text-sm hover:cursor-pointer hover:text-gray-900">Log in</p>
                    <button className="p-2 rounded-lg border border-solid  border-green-700 text-green-700 hover:cursor-pointer hover:bg-green-600 hover:text-white  transition-all ease-in-out delay-50">Sign Up</button>
                </div>
            </div>
        </>
    )
}
export default NavBar;