// import Link from "next/link";
 import Image from "next/image";
 import React from "react";
 import { FaDownload } from "react-icons/fa";
//  import Link from "next/link"; 
 export default function Home() {
   return ( 
    <main>
    <div className="flex flex-col md:flex-row justify-center items-center mx-auto">
      <div className="w-full md:w-1/2 pt-[4vh] md:pt-[12vh] h-screen bg-[#151231] overflow-hidden mb-20">
        <div className="flex flex-col justify-center items-center w-4/5 h-full mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4">I m Sarwat Afreen</h1>
          <h2 className="text-lg md:text-xl text-gray-300 mb-6">Graphic Designer & Front-end Web Developer</h2>
          <p className="text-sm md:text-base text-white text-opacity-60 mb-8">Expert web developer crafting responsive, scalable, and user-friendly digital experiences.</p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded">
            <FaDownload /> Download CV
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 ">
        <Image src="/pic2.png" alt="about" width={700} height={700} />
      </div>
    </div>
  </main>
   );
  };
//     <main>
//       <div className="flex justify-center items-center mx-auto md:flex-row">
//         <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#151231] overflow mb-20">
//           <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
              
//               {/* Left Column - Text Section */}
//               <div className="order-2 lg:order-1">
//                 <div data-aos="fade-up-left" className="bg-[#151231]">
//                   <h1 className="text-2xl md:text-3xl lg:text-2xl mb-5 text-gray-300 font-semibold mt-80">I’m Sarwat Afreen</h1>
//                   <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">Graphic Designer and Front-end Web Developer</h1>
//                   <p className="mt-6 text-sm md:text-base text-white text-opacity-60">Expert web developer crafting responsive, scalable, and user-friendly digital experiences</p>
                  
                  
                  
//                   <button className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-yellow-500 hover:bg-yellow-400 flex items-center space-x-2">
//                     <span>Download CV</span>
//                     <FaDownload/>
//                   </button>
//                 </div>
//               </div>

//               {/* Right Column - Image Section */}
//               <div className="order-1 lg:order-2 lg:flex lg:justify-end rounded-[3.5rem] border-[3.5px] border-yellow-500 mt-4 mx-auto">
//                 <Image src="/pic2.png" alt="about" width={700} height={700} />
//               </div>
            
//             </div>
//           </div>
//         </div>
//       </div>
    


//     </main>
// );
// };

{/* //     <main>
//                  <div className="flex justify-center items-center mx-auto md:flex-row">
//                  <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#151231] overflow mb-20">
//         <div className="flex justify-center flex-col w-4/5 h-full mx-auto ">
//          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
//              <div>
//              <div data-aos="fade-up-left  bg-[#151231]">
//                 <h1 className="text-2xl md:text-3xl lg:text-2xl mb-5 text-gray-300 font-semibold mt-80"> I m Sarwat Afreen </h1>
//                 <h1 className="text-bg text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">Graphic Designer and  Front-end Web Developer</h1>
//                 <p className="mt-6 text-sm md:text-base bg-graytext-white text-opacity-60">Expert web developer crafting responsive, scalable, and user-friendly digital experiences</p>
//                 <button className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm: md:text-lg 
//                  transition-all duration-200 rounded-lg mt-8 bg-yellow-500 hover:bg-yellow-400 flex items-center space-x-2">
//                     <span>Download CV</span>
//                     <FaDownload/>
//                 </button>
//              </div>
//              <div className=" lg:block rounded-[3.5rem] border-[3.5px]   border-yellow-500 mt-4 mx-auto">
//                 <Image src="/pic2.png" alt="about"width={700} height={700}/>
//             </div>
//             </div>
//         </div>
//         </div>
//     </div>
       
// </div>
        
      
                 
                   
//           </main>
         
  );
};
// }flex-col   */}