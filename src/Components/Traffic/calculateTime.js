const calculateTime = (routes) => {
  const bus = routes.filter((e) => e.instructions.at(0) === "버");
  const subway = routes.filter((e) => e.instructions.at(0) === "지");

  let busTime = 0;
  let subwayTime = 0;

  for (const val of bus) {
    busTime += val.duration.value;
  }
  for (const val of subway) {
    subwayTime += val.duration.value;
  }

  busTime /= 60;
  busTime = Math.ceil(busTime);
  subwayTime /= 60;
  subwayTime = Math.ceil(subwayTime);

  return { busTime, subwayTime };
};

export default calculateTime;
