import logo from '../../assets/Logo/logo.png';
import { FaSearch } from "react-icons/fa";
import  './Header.css';

export default function Header() {
    return (
        <div className="navbar bg-none fixed z-40">
            <div className="flex-1">
                <div className="w-16 rounded-full">
                    <img alt="companyLogo" src={logo} />
                </div>
            </div>

            {/* end */}
            <div className="dropdown dropdown-end">
                <label className="input flex items-center bg-opacity-0 gap-2 custom-focus">
                    <input type="text" placeholder="Search" className="text-[#FFF]" />
                    <FaSearch className='text-[#FFF] text-xl cursor-pointer'/>
                </label>
            </div>

        </div>
    )
}
