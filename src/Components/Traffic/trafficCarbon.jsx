import { setTrafficCarbon } from "API/traffic";

function TrafficCarbon({ busTime, subwayTime, traffic = true }) {
  const busCarbon = (time) => {
    const t = parseInt(time);
    return t * 0.006;
  };

  const subwayCarbon = (time) => {
    const t = parseInt(time);
    return Math.floor(((t * 0.424 * 34) / 60) * 0.000182 * 10000);
  };

  const totalCarbonFootprint = () => {
    const transportationCarbon = busCarbon(busTime) + subwayCarbon(subwayTime);
    return transportationCarbon;
  };

  return (
    <div>
      {traffic ? totalCarbonFootprint() : totalCarbonFootprint() * 2.43}
    </div>
  );
}

export default TrafficCarbon;
