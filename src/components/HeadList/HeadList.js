import { IoIosArrowDown } from "react-icons/io";
export const HeadList = () =>{
    return(
        <>
           <nav className="w-full bg-[#ddd]">
                <div className="container w-4/5 mx-auto flex justify-between grid-cols-3 items-center py-2 px-4 text-[24px]">
                    <div className="inner-left w-2/5 flex justify-between items-center ">
                        <a className=" hover:text-orange-500" href="/">
                            TRANG CHỦ
                        </a>
                        <a className="hover:text-orange-500" href="/">
                            GIỚI THIỆU
                        </a>
                        <div className= "flex items-center">
                            <a className="mr-[5px] hover:text-orange-500" href="/">
                                HỌC ONLINE
                            </a>
                            <IoIosArrowDown/>
                        </div>
                    </div>
                    <div className="inner-middle ">
                        <div className="inner-middle__image ">
                            <img src="https://www.svgrepo.com/show/303106/mcdonald-s-15-logo.svg" alt="" className="bg-[#ddd] bg-transparent w-[50px] h-[50px]"/>
                        </div>
                    </div>
                    <div className="inner-right w-2/5 flex justify-between items-center">
                            <div className = "flex items-center mr-[5px]">
                                <a className="hover:text-orange-500" href="/">
                                    KHÓA HỌC
                                </a>
                                <IoIosArrowDown/>
                            </div>
                            <a className="hover:text-orange-500" href="/">
                                BÀI VIẾT
                            </a>
                            <a className="hover:text-orange-500" href="/">
                                LIÊN HỆ
                            </a>
                    </div>
                </div>
            </nav>    
        </>
    )
}


























// import React from "react";

// export const Navbar = () => {
//   return (
//     <nav className="w-full bg-white shadow">
//       <div className="container mx-auto flex justify-between items-center py-2 px-4">
//         {/* Left side - Navigation Links */}
//         <div className="flex items-center space-x-6">
//           <a href="/" className="text-gray-700 hover:text-orange-500 font-medium">
//             TRANG CHỦ
//           </a>
//           <a href="/about" className="text-gray-500 hover:text-orange-500 font-medium">
//             GIỚI THIỆU
//           </a>
//           <div className="relative group">
//             <a href="/online-learning" className="text-gray-500 hover:text-orange-500 font-medium">
//               HỌC ONLINE
//             </a>
//             {/* Dropdown example (Học Online) */}
//             <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2">
//               <a href="/course-1" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
//                 Course 1
//               </a>
//               <a href="/course-2" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
//                 Course 2
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Middle - Logo */}
//         <div>
//           <img
//             src="https://via.placeholder.com/50x50"
//             alt="Logo"
//             className="w-12 h-12 object-contain"
//           />
//         </div>

//         {/* Right side - Navigation Links */}
//         <div className="flex items-center space-x-6">
//           <div className="relative group">
//             <a href="/courses" className="text-gray-500 hover:text-orange-500 font-medium">
//               KHÓA HỌC
//             </a>
//             {/* Dropdown example (Khoá Học) */}
//             <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 py-2">
//               <a href="/course-1" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
//                 Course 1
//               </a>
//               <a href="/course-2" className="block px-4 py-2 text-gray-600 hover:bg-gray-200">
//                 Course 2
//               </a>
//             </div>
//           </div>
//           <a href="/posts" className="text-gray-500 hover:text-orange-500 font-medium">
//             BÀI VIẾT
//           </a>
//           <a href="/contact" className="text-gray-500 hover:text-orange-500 font-medium">
//             LIÊN HỆ
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };
