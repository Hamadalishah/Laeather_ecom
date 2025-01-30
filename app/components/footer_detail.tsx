import Link from "next/link";

// Define the type for footer details
interface FooterDetailType {
    id: number;
    h1: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5?: string;
}

export default function Footer_Detail() {
    // Define footer details with the type
    const footer_detail: FooterDetailType[] = [
        {
            id: 1,
            h1: "Top brands",
            p1: "Leather Baba",
            p2: "hats and jacs",
            p3: "My vest",
            p4: "Lapron",
            p5: ""
        },
        {
            id: 2,
            h1: "Information",
            p1: "Leather Baba",
            p2: "hats and jacs",
            p3: "My vest",
            p4: "Lapron",
            p5: "Sell on leather baba"
        },
        {
            id: 3,
            h1: "Customer Service",
            p1: "Leather Baba",
            p2: "hats and jacs",
            p3: "My vest",
            p4: "Lapron",
            p5: "Sell on leather baba"
        },
        {
            id: 4,
            h1: "My Account",
            p1: "Leather Baba",
            p2: "hats and jacs",
            p3: "My vest",
            p4: "Lapron",
            p5: "Sell on leather baba"
        },
        {
            id: 5,
            h1: "Categories",
            p1: "Leather Baba",
            p2: "hats and jacs",
            p3: "My vest",
            p4: "Lapron",
            
        },
    ];

    return (
        <>
            {footer_detail.map((detail) => (
                <div key={detail.id} className=" mt-4 md:w-[15%] w-[40%]">
                 <Link href="/">   <h1 className=" text-2xl font-semibold cursor-pointer">{detail.h1}</h1></Link>
                    <p className="text-lg mt-5 hover:underline hover:text-red-500 cursor-pointer text-slate-600">{detail.p1}</p>
                    <p className="text-lg hover:underline hover:text-red-500 cursor-pointer text-slate-600">{detail.p2}</p>
                    <p className="text-lg hover:underline hover:text-red-500 cursor-pointer text-slate-600">{detail.p3}</p>
                    <p className="text-lg hover:underline hover:text-red-500 cursor-pointer text-slate-600">{detail.p4}</p>
                    <p className="text-lg hover:underline hover:text-red-500 cursor-pointer  text-slate-600">{detail.p5}</p>
                </div>
            ))}
        </>
    );
}
