import { RiFlashlightFill } from "react-icons/ri";

export const Section2 = () =>{
    return (
        <>
            <div className="w-full py-6">
                <div className="w-4/5 mx-auto flex items-center justify-between bg-gradient-to-r from-orange-600 to-orange-400 rounded-md">
                        <h3 className="flex items-center text-white px-[15px] py-[10px] text-[20px]">FL<RiFlashlightFill />ASH <span className="ml-[7px] text-orange-400 font-bold"> DEAL</span></h3>
                        <div className="flex text-[20px]">
                            <h3 className="text-[20px] mr-[5px]">THỜI GIAN CÒN LẠI:</h3>
                                <p className=" bg-black text-white mr-[3px] p-[5px] text-[15px] rounded-md" >01</p>
                                <p className="bg-black text-white mr-[3px] p-[5px] text-[15px] rounded-md">02</p>
                                <p className="bg-black text-white mr-[5px] p-[5px] text-[15px] rounded-md">03</p>
                        </div>
                </div>
            </div>
        </>
    )
}