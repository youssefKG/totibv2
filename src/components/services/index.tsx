import ServiceCard from "../serviceCard";
import servicesData from "../../assets/services";
import AnimatedDiv from "../../lib/animateDiv";
import { useColorScheme } from "@/hooks/useContext";
import Title from "../Title";

const Services = () => {
  const { colorScheme } = useColorScheme();
  return (
    <div id="SERVICES" className="flex gap-5 flex-col justify-center">
      <Title colorScheme={colorScheme} title="SERVICES" />
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
              colorScheme={colorScheme}
            />
          </AnimatedDiv>
        ))}
      </div>
    </div>
  );
};

export default Services;
