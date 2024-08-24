import Strings from "../Shared/Strings";

function Services() {
  return (
    <div id="services" className='px-12 mt-12'>
      <div className='flex items-center'>
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
        <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
        <h2 className='text-[24px] font-bold'>{Strings.SKILLS}</h2>
        <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
      </div>
    </div>
  );
}

export default Services;