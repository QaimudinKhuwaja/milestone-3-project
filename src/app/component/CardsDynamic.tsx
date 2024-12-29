import Image from 'next/image';
import pro5 from '../assets/pro5.png'
import pro6 from '../assets/pro6.png'
import pro7 from '../assets/pro7.png'
import pro8 from '../assets/pro8.png'
import pro9 from '../assets/pro9.png'
import {data} from '../data/cardData'
import Link from  'next/link'



const ShopPage = () => {
  return (
    <>
   
    <div className="p-4 place-items-center">
      {/* Left Side Heading */}
      <div className="mb-8">
        <h1 className="text-[#D84727] text-3xl font-bold underline ">Our Products</h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] justify-center">
        
      {data.map((item)=>{
        return(
          <Link href={`/Cards/${item.slug}`} key={item.id}>

  <div className="relative py-2 px-1 shadow-lg shadow-black rounded ">
          <Image
            src={item.image}
            alt="Card 1"
            layout="intrinsic"
            width={180}
            height={180}
            className="rounded-md"
          />
         <h1 className='text-[20px] font-[600]'>{item.title}</h1>
         <p className='text-red-600 text-[14px]'>{item.desc}</p>
         <h1 className='text-blue-400 hover:text-blue-700 text-[13px] font-[700]'>{item.btn}</h1>
        </div>
        
          </Link>
        )
      })}




      </div>
    </div>
    </>
  )}
  export default ShopPage


  // Card 2
  // <div className="relative w-[205px] h-[223px]">
  //   <Image
  //     src={pro6}
  //     alt="Card 2"
  //     layout="intrinsic"
  //     width={205}
  //     height={223}
  //     className="rounded-md"
  //   />
  // </div>

  // {/* Card 3 */}
  // <div className="relative w-[205px] h-[223px]">
  //   <Image
  //     src={pro7}
  //     alt="Card 3"
  //     layout="intrinsic"
  //     width={205}
  //     height={223}
  //     className="rounded-md"
  //   />
  // </div>

  // {/* Card 4 */}
  // <div className="relative w-[205px] h-[223px]">
  //   <Image
  //     src={pro8}
  //     alt="Card 4"
  //     layout="intrinsic"
  //     width={205}
  //     height={223}
  //     className="rounded-md"
  //   />
  // </div>

  // {/* Card 5 */}
  // <div className="relative w-[205px] h-[223px]">
  //   <Image
  //     src={pro9}
  //     alt="Card 5"
  //     layout="intrinsic"
  //     width={205}
  //     height={223}
  //     className="rounded-md"
  //   />
  // </div>