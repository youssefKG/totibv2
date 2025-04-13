interface ServiceCardPropsI {
  name: string;
  imgURL: string;
  description: string;
  id: number;
}
const ServiceCard = ({ name, description, imgURL }: ServiceCardPropsI) => {
  return (
    <div
      className="flex h-full hover:scale-108  transition-all  duration-500 flex-col
    bg-[#bc6c25]/20 p-4 rounded-md border border-black items-center max-w-xs
    gap-4"
    >
      <img className="size-28" src={imgURL} />
      <h1 className="font-semibolda text-xl text-[#606c38]">{name}</h1>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
