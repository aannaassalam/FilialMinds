
const Navbar = () => {
    return (
        
        <nav className="bg-white text-black fixed w-full z-20 top-0 start-0 border-b border-gray-200 h-16 py-3">
            <div className="w-[85%] flex justify-between items-center mx-auto ">
                <div className="text-[25px]">App Logo</div>
                <ul className="flex gap-20 text-[22px] font-semibold cursor-pointer ">
                    <li className="hover:text-[#d91e5c]">Home</li>
                    <li className="hover:text-[#d91e5c]">Blogs</li>
                    <li className="hover:text-[#d91e5c]">Contact</li>
                </ul>
                <button className="px-4 py-2 bg-[#d91e5c] font-bold rounded-xl text-white text-[18px]  hover:bg-[#db326a]">Sign Up</button>
            </div>
        </nav>

    )
}

export default Navbar