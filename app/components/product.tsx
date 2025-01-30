import Image from "next/image"

export default function Product() {
  return (
    <>
    <div className=" h-[250px] w-[200px]">
        <div><Image src={"/Blog images/blog image.jpg"} width={200} height={100} alt=""></Image></div>
        <div><h1 className="text-2xl font-semibold">Dazzling Leather</h1></div>
        <div><p>Leather Baba</p></div>
        <div>riews</div>
        <div className="flex gap-2"><p>$225.00</p><p>$169.00</p></div>
    </div>
    
    </>
  )
}
