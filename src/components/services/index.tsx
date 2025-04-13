import ServiceCard from "../serviceCard";
import servicesData from "../../assets/services";
import AnimatedDiv from "../../lib/animateDiv";

const Services = () => {
  return (
    <div className="flex gap-5 flex-col  bg-[#edede9] justify-center">
      <h1 className="font-extrabold text-3xl border-x-[#606c38] w-fit px-4 border-x-[6px] text-[#780000] tracking-widest">
        Servvices
      </h1>
      <p className="">
        I offer a range of services to help businesses build and optimize their
        digital presence.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {servicesData.map((service) => (
          <AnimatedDiv>
            <ServiceCard
              key={service.id}
              name={service.name}
              imgURL={service.imgURL}
              description={service.description}
              id={service.id}
            />
          </AnimatedDiv>
        ))}
      </div>
    </div>
  );
};

export default Services;
