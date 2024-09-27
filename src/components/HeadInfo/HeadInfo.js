import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { PiTrolleyDuotone } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";



export const HeadInfo = () => {
    return (
        <>
            <div className="w-full flex justify-around bg-[#383F4F] h-[50px] text-white text-[18px]">
                <div className="w-4/5 mx-auto flex justify-between">
                    <div className="flex justify-between items-center">
                        <p className="font-light">Have any question? Contact now</p>
                        <MdEmail className="ml-[30px] mr-[5px] text-orange-400"/>
                        <p className="border-r-2 border-r-amber-50 pr-[20px]	">abc@gmail.com</p>
                        <FaPhoneAlt className=" ml-[30px] mr-[5px] text-orange-400"/>
                        <p>360-779-2228</p>
                    </div>

                    <div className="inner-right flex items-center ">
                        <div className="flex justify-between">
                            <div className="text-[28px] mx-2 border-r-2 border-r-amber-50 pr-[20px]"><PiTrolleyDuotone /></div>
                            <div className="text-[28px] mx-2"><CiBellOn /></div>
                        </div>
                        <div className="ml-2 flex items-center">
                            <img src="https://www.svgrepo.com/show/382102/male-avatar-boy-face-man-user-8.svg" 
                                className="object-cover rounded w-[36px] h-[36px]" 
                                alt="User" />
                            <p className=" flex items-center text-[18px] ml-[5px]">Hi Adam <IoIosArrowDown/></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
