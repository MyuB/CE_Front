import { setTrafficCarbon } from "API/traffic";

function TrafficCarbon({ busTime, subwayTime, traffic = true }) {
  const busCarbon = (time) => {
    const t = parseInt(time);
    return t * 0.006;
  };

  const subwayCarbon = (time) => {
    const t = parseInt(time);
    return ((t * 0.424 * 34) / 60) * 0.000182 * 100;
  };
  //여기서 보내긴 해야되는데 구글 맵스 api key 다시 결재해야함.
  const totalCarbonFootprint = () => {
    const transportationCarbon = busCarbon(busTime) + subwayCarbon(subwayTime);
    // setTrafficCarbon(5);
    return transportationCarbon;
  };

  return (
    <div>
      {traffic ? totalCarbonFootprint() : totalCarbonFootprint() * 2.43}
    </div>
  );
}

export default TrafficCarbon;
