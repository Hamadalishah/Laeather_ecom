import { PropsType } from "../types/navetype";
import Image from "next/image";

const Slide: React.FC<PropsType> = ({ image }) => {
  return (
    <div className='w-full h-[680px]  relative flex flex-wrap'>
      {/* Image container */}
      <div className="relative h-full w-full">
        <Image 
          src={image}
          alt="Description of the image"
          width={1100}
          height={1000}
          className=" w-full h-full "
          priority
        />
      </div>
    </div>
  );
};

export default Slide;