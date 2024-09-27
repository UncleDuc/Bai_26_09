import { BsPeople } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";



export const Section3 = (props) =>{
    const {image, discount, desc, price, oldPrice, imageUser, nameUser, totalUser, time} = props;
    return(
        <>
            <div className="w-full mt-[50px]">
                <div className=" relative w-4/5 mx-auto flex grid-cols-3 ">
                    <div className=" block w-1/3 bg-white rounded-lg shadow-md overflow-hidden m-4">
                        <div className="relative">
                            <img src={image}
                                alt="/" 
                                className="w-full object-cover"/>
                            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                                {discount}
                            </span>    
                        </div>
                        <div className="p-4">
                            <span className="font-[600] text-[20px]">{desc}</span>
                            <div className=" flex">
                                <span className="mr-[15px] text-[#426A65] font-bold text-[24px]">{price}</span>
                                <p className="text-[20px] line-through font-medium  text-[#C2C5C7] ">{oldPrice}</p>
                            </div>
                        </div>
                        <div className= "border-t-2  pt-5">
                            <div className="flex  justify-between ">
                                <div className="flex items-center ml-[18px] mb-[6px]">
                                    <img src={imageUser} 
                                        alt="/" 
                                        className="w-8 h-8 rounded-full"/>
                                    <p className = " ml-[5px] text-[20px]">{nameUser}</p>
                                </div>
                                <div className="flex items-center mr-[8px] mb-[6px]">
                                    <div className="flex items-center ">
                                        <BsPeople className="text-[green]"/>
                                        <p className="mr-[30px] ml-[5px]">{totalUser}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <FaRegClock  className="text-[#ce8f1c]"/>
                                        <p className=" ml-[6px]">{time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" block w-1/3 bg-white rounded-lg shadow-md overflow-hidden m-4">
                        <div className="relative">
                            <img src={image}
                                alt="/" 
                                className="w-full object-cover"/>
                            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                                {discount}
                            </span>    
                        </div>
                        <div className="p-4">
                            <span className="font-[600] text-[20px]">{desc}</span>
                            <div className=" flex">
                                <span className="mr-[15px] text-[#426A65] font-bold text-[24px]">{price}</span>
                                <p className="text-[20px] line-through font-medium  text-[#C2C5C7] ">{oldPrice}</p>
                            </div>
                        </div>
                        <div className= "border-t-2  pt-5">
                            <div className="flex  justify-between ">
                                <div className="flex items-center ml-[18px] mb-[6px]">
                                    <img src={imageUser} 
                                        alt="/" 
                                        className="w-8 h-8 rounded-full"/>
                                    <p className = " ml-[5px] text-[20px]">{nameUser}</p>
                                </div>
                                <div className="flex items-center mr-[8px] mb-[6px]">
                                    <div className="flex items-center ">
                                        <BsPeople className="text-[green]"/>
                                        <p className="mr-[30px] ml-[5px]">{totalUser}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <FaRegClock  className="text-[#ce8f1c]"/>
                                        <p className=" ml-[6px]">{time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" block w-1/3 bg-white rounded-lg shadow-md overflow-hidden m-4">
                        <div className="relative">
                            <img src={image}
                                alt="/" 
                                className="w-full object-cover"/>
                            <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                                {discount}
                            </span>    
                        </div>
                        <div className="p-4">
                            <span className="font-[600] text-[20px]">{desc}</span>
                            <div className=" flex">
                                <span className="mr-[15px] text-[#426A65] font-bold text-[24px]">{price}</span>
                                <p className="text-[20px] line-through font-medium  text-[#C2C5C7] ">{oldPrice}</p>
                            </div>
                        </div>
                        <div className= "border-t-2  pt-5">
                            <div className="flex  justify-between ">
                                <div className="flex items-center ml-[18px] mb-[6px]">
                                    <img src={imageUser} 
                                        alt="/" 
                                        className="w-8 h-8 rounded-full"/>
                                    <p className = " ml-[5px] text-[20px]">{nameUser}</p>
                                </div>
                                <div className="flex items-center mr-[8px] mb-[6px]">
                                    <div className="flex items-center ">
                                        <BsPeople className="text-[green]"/>
                                        <p className="mr-[30px] ml-[5px]">{totalUser}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <FaRegClock  className="text-[#ce8f1c]"/>
                                        <p className=" ml-[6px]">{time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}