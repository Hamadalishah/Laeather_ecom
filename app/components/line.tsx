


interface LineType {
  title: string;
}

export default function Line(props:LineType) {
  return (
    <>
     <div className="flex flex-col items-center py-12">
            <h1 className=" text-4xl font-semibold text-center">{props.title}</h1>
            <h2 className=' text-4xl font-semibold text-center'>The Latest Product are here </h2>
             {/* <p className="w-[300px] h-[6px] mt-4 rounded-2xl bg-red-600"></p> */}
        </div>
    
    </>
  )
}
