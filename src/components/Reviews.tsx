"use client"
import { HTMLAttributes, useEffect, useState } from "react";
import { useRef } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import Phone from "./Phone";
import { img } from "framer-motion/client";

const PHONES = ["/testimonials/1.jpg",
                "/testimonials/2.jpg",
                "/testimonials/3.jpg",
                "/testimonials/4.jpg",
                "/testimonials/5.jpg",
                "/testimonials/6.jpg",

];

function splitArray<T>(array: Array<T>,numParts:number)
{
        const result : Array<Array<T>> = [];

        for (let index = 0; index < array.length; index++) {
            const i = index%numParts;

            if(!result[index])
            {
                result[index] = [];
            }

            result[i].push(array[index]);
            
        }

        return result;
}

//second function to call

function ReviewColumn({
    reviews,
    classname,
    reviewClassName,
    msPerPixel =0
}:{
    reviews : string[],
    classname?:string,
    reviewClassName?: (reviewIndex: number) => string,
    msPerPixel?:number
})
{

    const columnRef = useRef<HTMLDivElement | null>(null);
    const [columnHeight, setColumnHeight] = useState(0);
    const duration = `${columnHeight*msPerPixel}ms`


    // to check the resize event that window could me of any size 
    useEffect(()=>{
        if(!columnRef.current) return;

        // You're absolutely correct that the useEffect with an empty dependency array ([]) runs only once, after the component mounts. The ResizeObserver doesn't force useEffect to run again; instead, the observer itself takes over the task of detecting changes to the size of the DOM element independently of React's lifecycle.
        
        const resizeObserver = new window.ResizeObserver(()=>{
            setColumnHeight(columnRef?.current?.offsetHeight ?? 0);
        })


        // The effect itself runs only once, when the component mounts, because of the empty dependency array. In that first run, the ResizeObserver is initialized and attached to the DOM element.

       resizeObserver.observe(columnRef.current);

       return ()=>{
        resizeObserver.disconnect();
       }

    },[]);


    return  <div ref={columnRef} className={cn("animate-marquee space-y-8 py-4",classname)}
     style={{'--marquee-duration':duration} as React.CSSProperties}
    >
            {reviews.concat(reviews).map((imgSrc,reviewIndex)=>(
                <Review key={reviewIndex}
                imgSrc={imgSrc}/>
            ))}
        </div>
}

interface ReviewProps extends HTMLAttributes<HTMLDivElement>{
    imgSrc: string
}

function Review({imgSrc,className,...props}:ReviewProps)
{
    const POSSIBLE_ANIMATION_DELAYS =['0.1s','0.2s','0.3s','0.4s','0.5s','0.6s'];


    const animationDelay = POSSIBLE_ANIMATION_DELAYS[Math.floor(Math.random()*POSSIBLE_ANIMATION_DELAYS.length)];

   return   <div className={cn('animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5',className)} {...props}
   style={{animationDelay}}>
    <Phone imgSrc={imgSrc}/>
   </div>
}


// first component to call
function ReviewGrid()
{
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(containerRef,{once:true, amount:0.4});

   // console.log(containerRef);
    const columns = splitArray(PHONES,3);

    const column1 = columns[0];
    const column2 = columns[1];
    const column3 =  splitArray(columns[2],2 );

    return <div ref={containerRef} className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh]
    grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
        {isInView ? <>
        
           <ReviewColumn reviews={[...column1,...column3.flat(), ...column2]}
           reviewClassName={(reviewIndex) =>cn({
           "md: hidden": reviewIndex >=column1.length + column3[0].length,
           "lg: hidden":reviewIndex>=column1.length,
           })}
           msPerPixel={10}
           /> 


           <ReviewColumn reviews={[...column3[1], ...column2]}
           classname="hidden md:block"
           reviewClassName={(reviewIndex) =>(
             reviewIndex >= column2.length ? 'lg:hidden' : ''
           )
           }
           msPerPixel={15}
           /> 


           <ReviewColumn reviews={column3.flat()} 
            classname="hidden md:block"
            msPerPixel={10}
           /> 

        </>:null}
    </div>
}

export function Reviews()
{
    return <MaxWidthWrapper className="relative max-w-5xl "> 
    
    <img aria-hidden="true" src="/what-people-are-buying.png"
    className="absolute select-none hidden lg:block -left-32 top-1/3"></img>

    <ReviewGrid/>
    </MaxWidthWrapper>
}