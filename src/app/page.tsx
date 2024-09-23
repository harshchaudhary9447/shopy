import MaxWidthWrapper from "@/components/MaxWidthWrapper";


export default function Home() {
  return (
      <div className="bg-slate-50 min-h-screen">
        <section>

        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="bg-slate-200">
        hi
        </div>
        <div className="bg-red-300">
        hi
        </div>
        <div className="bg-slate-200">
        hi
        </div>
        </MaxWidthWrapper>

        </section>
      
        
      </div>
  );
}
