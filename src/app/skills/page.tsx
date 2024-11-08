import React from "react";
// import Link from "next/link";
// import IMAGE from "next/image";
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
export default function skills(){
       
            return (
              <main>
                 <div> 
                <div className=" flex justify-center  font-semibold text-6xl ">
                  <h1 className="flex-2"> MY SKILLS</h1>
                </div>
                </div>
                    
                      {/*  <div >
                      <div className="flex-row  bg-blue-950">
                       <div className="flex-row">
                  <div className=" bg-gray-900 p-6  flex flex-row items-center service-card">
                    <div className=" flex-1 mr-6 card-icon">
                      <i className="fas fa-calendar"></i>
                    </div>
                    <div className="flex justify-start mx-20 ml-20 smt-15  ">
            <IMAGE src="/pic3.jpg" alt="about" width={400} height={400}className="image-style" />
            </div>
            <div> */}
            <div>
             {/* <div className=" flex mr-6 card-icon">
                      <i className="fas fa-wrench"></i>
                      <div className="flex-row">
                    
                    
                    <div className="flex-2 bg-gray-900 ">
                    <h3 className=" text-4xl  bg-yellow-500 font-bold mb-4 rounded-[12rem] borderr-[3,5px] border-4 border-indigo-200 border-t-indigo-500  border-indigo-500/100 card-title">HTML</h3>
    
    <div className='flex justify-end'>
    <p className=" text-white text-sm  card-description">      
    We all use HTML daily, even if we don’t <br/> realize it. It’s the backbone <br/> of every website, providing structure and 
    meaning <br/> to content on the web. Whenever you read an article, <br/> watch a video, or shop online, HTML is there behind  <br/>
    the scenes, organizing text, images, <br/> and links to create a seamless experience. <br/> Simple yet powerful, HTML is a 
    universal language  <br/>that connects us to information, entertainment, and each other on the internet     <br/>        
                     </p>
                     <Link href="/nextjs-services">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 roundedcard-button">Read</button>
                    </Link>
                    
    </div> */}
    
    </div>
                     
                    <Section1 />
                    <div>
                  {/* <div className=" bg- gray-100 p-6 flex flex-row items-center service-card">
                    <div className=" flex-1 mr-6 card-icon">
                      <i className="fas fa-wrench"></i>
                      <div className="flex-row">
                    </div>
                    
                    <div className="flex-2 bg-gray-900 ">
                    <h3 className=" text-4xl  bg-yellow-500 font-bold mb-4 rounded-[12rem] borderr-[3,5px] border-4 border-indigo-200 border-t-indigo-500  border-indigo-500/100 card-title">TypeScript</h3>
                   <p className=" text-white text-sm  card-description">      
                       
                      TypeScript is a programming language that builds<br/> on JavaScript by adding static
                       typing, which<br/> makes it easier to catch errors early in <br/>development.
                      Developed by Microsoft,<br/> TypeScript is often used in large-scale<br/> applications,
                       as its type-checking helps<br/> prevent bugs and improves code readability. <br/>
                       It compiles down to plain JavaScript,<br/> so it can run in any environment
                        where<br/> JavaScript is supported, like web browsers<br/> and Node.js.
                      TypeScript also brings modern<br/> JavaScript features to older platforms,<br/>
                      </p> 
                      <Link href="/typescript-services">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded card-button">Read </button>
                    </Link>
                      <div>
                        <div>
                          <div>
                      <div className="flex justify-end items-center mx-auto float-right{20px} mr-4 py-8">
                      <IMAGE src="/pic4.jpg" alt="about" width={600} height={600} className="image-style" /> 
                      </div>
                       </div>
                                         </div>
                                         </div>         
                    
                  </div> */}
                  </div>
                       <Section2 />
                 
                  <div>
                  {/* <div className=" bg-gray-900 p-6 flex flex-row items-center service-card">
                    <div className="flex-1 mr-6 card-icon">
                      <i className="fas fa-handshake"></i>
                    </div>
                                         
                    <div className="flex space-x-5 items-center justify-center mx-auto mr-9  ">
            <IMAGE src="/pic5.jpg" alt="about" width={400} height={400} className="image-style" />
            </div>
                    <div className="  ">
                    <h3 className=" text-4xl bg-yellow-500  font-bold mb-4 rounded-[12rem] borderr-[3,5px] border-4 border-indigo-200 border-t-indigo-500  border-indigo-500/100 card-title">Next.js</h3>
                    <p className="flex text-white text-sm card-description">
               
                      Next.js is a powerful React framework <br/>that simplifies building fast, 
                      scalable web<br/> applications by providing features like <br/>server-side rendering (SSR), 
                      static site <br/>generation (SSG), and API routes out <br/>of the box. Developed by Vercel,<br/>
                       Next.js allows developers to create <br/>dynamic and SEO-friendly pages with <br/>minimal setup,
                        enhancing performance <br/>and user experience. Its routing system,<br/> automatic code splitting, 
                        and optimized<br/> image handling make it ideal for both<br/> small projects and large-scale<br/> applications.
                      With Next.js, <br/>developers can focus on<br/> building engaging interfaces, while<br/> the framework takes care
                       of backend<br/> processes and deployment efficiency.<br/>
                    </p>
              
                       
                    <Link href="/nextjs-services">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 roundedcard-button">Read</button>
                    </Link>
                    </div>
                  </div> */}
                </div>
                <Section3 />
                
                {/* </div>
           </div>
              </div>*/}
             {/* </div>  */}
             {/* </div>  */}
            {/* //  </div> */}
           </main>

            );
          };
          
       