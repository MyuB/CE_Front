function TrafficCarbon({ busTime, subwayTime }) {
  const busCarbon = (time) => {
    const t = parseInt(time);
    return t * 0.006;
  };

  const subwayCarbon = (time) => {
    const t = parseInt(time);
    return ((t * 0.424 * 34) / 60) * 0.000182;
  };
  const totalCarbonFootprint = () => {
    return busCarbon(busTime) + subwayCarbon(subwayTime);
  };

  return (
    <div>
      교통에서 소비된 탄소발자국은 {totalCarbonFootprint()}㎏-CO2 입니다.
    </div>
  );
}

export default TrafficCarbon;
