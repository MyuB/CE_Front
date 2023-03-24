function TrafficCarbon(props) {
  const busCarbon = (time) => {
    return time * 0.006;
  };
  const subwayCarbon = (time) => {
    return ((time * 0.424 * 34) / 60) * 0.000182;
  };

  return <div></div>;
}

export default TrafficCarbon;
