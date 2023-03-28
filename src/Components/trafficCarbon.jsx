function TrafficCarbon({ busTime, subwayTime }) {
  const busCarbon = (time) => {
    const t = parseInt(time);
    return t * 0.006;
  };

  const subwayCarbon = (time) => {
    const t = parseInt(time);
    return ((t * 0.424 * 34) / 60) * 0.000182 * 100;
  };
  const totalCarbonFootprint = () => {
    return busCarbon(busTime) + subwayCarbon(subwayTime);
  };

  return <div>{totalCarbonFootprint()}</div>;
}

export default TrafficCarbon;
