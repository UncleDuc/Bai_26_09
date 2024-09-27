import { HeadInfo } from "./components/HeadInfo/HeadInfo";
import { HeadList } from "./components/HeadList/HeadList";
import { Section1 } from "./components/Section1/Section1";
import { Section2 } from "./components/Section2/Section2";
import { Section3 } from "./components/Section3/Section3";

export default function App() {
  return (
   <div className="App">
      <HeadInfo/>
      <HeadList/>
      <Section1/>
      <Section2/>
      <Section3
                 image ="https://res.cloudinary.com/easy-frontend/image/upload/v1624063424/blog/lo-trinh-fe_zzhxml.png"
                  discount = "28%"
                  desc ="[Tên Khóa học] cách hõ đoạn văn bản bất kì nhanh trong reacjt"
                  price = "1,272,000đ"
                  oldPrice = "1,272,000đ"
                  imageUser = "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  nameUser = "Nguyễn Minh Hà"
                  totalUser = "272"
                  time = "17h39p"
                />
    </div>
  )
}