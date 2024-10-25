"use client"
import {useState, useTransition}  from "react"
import { cn } from "@/lib/utils"
import Dropzone, {FileRejection} from "react-dropzone"
import { Highlighter, MousePointerSquareDashed, Loader2 , Image} from "lucide-react"
import { Progress } from "@/components/ui/progress"

const Page = () =>{

    const [isDragOver,setIsDragOver] = useState<boolean>(false);
    const [uploadProgress]
    const isUploading = false;
    const [isPending, startTransition] = useTransition()
    if(isDragOver){
        console.log(isDragOver);
    }
    const onDropRejected = () =>{

    }
    const onDropAccepted = () =>{
        console.log("accepted");
    };


     
    return  <div className="bg-slate-50 min-h-screen">


            
            <div className={cn("relative h-full flex-1  w-full rounded-xl bg-gray-900/5  ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",{"ring-blue-900/25 bg-blue-900/10":isDragOver})}>
          <div className="relative flex flex-1 flex-col items-center justify-center w-full ">
                <Dropzone onDropRejected={onDropRejected}
                onDropAccepted={onDropAccepted}
                accept={{
                    "image/png":[".png"],
                    "image/jpeg":[".jpeg"],
                    "image/jpg":[".jpg"],

                }}
                onDragEnter={() => setIsDragOver(true)}
                onDragLeave={()=> setIsDragOver(false)}

                >

                    {({getRootProps,getInputProps})=>(

                        <div className="h-full w-full flex-1 flex flex-col items-center justify-center text-black"{...getRootProps()}>
                            <input {...getInputProps} className="bg-black"/>

                           {isDragOver ? <MousePointerSquareDashed className="h-6 w-6 text-zinc-500 mb-2 "/> : isUploading || isPending ? <Loader2 className="animate-spin h-6 w-6 text-zinc-500 mb-2"/> : <Image className="h-6 w-6 text-zinc-500" />}
                      

                      <div className="flex flex-col justify-center mb-2 text-sm text-zinc-700">
                            {

                            isUploading ? <div className="flex flex-col items-center"> Uploading... 
                            <Progress value={uploadProgress} className="mt-2 w-40 h-2 bg-gray-300"/>
                            </div> :
                             isPending ? <div></div> :
                            isDragOver ? <span></span> : <span></span>
                            }
                      </div>
                        </div>
                    )}
                </Dropzone>
          </div>
        </div>
        
    </div>
    
   
}

export default Page