import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";


export default function Home() {
  return (
      <div className="bg-slate-50 min-h-screen">
        <section>

        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
         <div className="bg-slate-200 col-span-2 px-6 lg:pt-4 lg:px-0 border border-green-400">
              <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                  <div className="absolute w-28 left-0 -top-20 hidden lg:block border border-green-400">
                        <img src="/snake-1.png" className="w-full "></img>
                  </div>
                  <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl"> Your Image on a <span className="bg-green-600 px-2 text-white">Custom</span> Phone case</h1>

                 <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">Capture your favorite memories with your own ,{' '}<span className="font-semibold">one-of-one </span>
                 phone case.
                 CaseCobra allows you to protect your memories , not just your phone case
                 </p> 
                 <ul className="  mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                    <div className="space-y-2">
                       
                        <li className="flex gap-1.5 items-center text-left">
                          <Check className="h-5 w-5 shrink-0"/>
                          High-quality, durable material
                        </li>
                        <li className="flex gap-1.5 items-center text-left">
                          <Check className="h-5 w-5 shrink-0"/>
                          1 year print gurantee
                        </li>
                        <li className="flex gap-1.5 items-center text-left">
                          <Check className="h-5 w-5 shrink-0"/>
                         Morden phone models supported
                        </li>
                    </div>
                 </ul>

                 <div className="mt-12  flex flex-col sm:flex-col items-center 
                 sm:items-start gap-5 xl:flex-row">
                  <div className="flex -space-x-4 ">
                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100
                    " src="users/user-1.png"/>
                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100
                    " src="users/user-2.png"/>
                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100
                    " src="users/user-3.png"/>
                    <img className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100
                    " src="users/user-4.jpg"/>
                    <img className=" object-cover inline-block h-10 w-10 rounded-full ring-2 ring-slate-100
                     " src="users/user-5.jpg"/>
                  </div>

                  <div className="flex flex-col justify-between border border-slate-900 items-center sm:items-start">
                      <div className="flex gap-0.1 ">
                        <Star className="h-4 text-green-600 fill-green-600"/>
                        <Star className="h-4 text-green-600 fill-green-600"/>
                        <Star className="h-4 text-green-600 fill-green-600"/>
                        <Star className="h-4 text-green-600 fill-green-600"/>
                        <Star className="h-4 text-green-600 fill-green-600"/>
                      </div>
                      
                    <p>
                      <span className="font-semibold">
                        1,250 
                      </span>
                      happy customers
                    </p>
                  </div>
                 </div>
              </div>
        </div>
        
        <div className=" col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
  
            <div className="relative md:max-w-xl">
              <img src="/your-image.png" className="w-40 lg: w-52  left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"/>
              <img src="/line.png" className="absolute w-20 -left-6 -bottom-6 select-none"/> 
             
            </div>
        </div>
       
        </MaxWidthWrapper>

        </section>
      
        
      </div>
  );
}
