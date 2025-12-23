export interface Product {
  id: string;
  name: string;
  model: string;
  motor?: string;
  motorOptions?: string[];
  motorDescription?: string;
  controller?: string;
  controllerDescription?: string;
  rearMotorDescription?: string;
  wheels?: string;
  wheelDescription?: string;
  speed?: string;
  range?: string;
  batteryCapacity?: string;
  brakes?: string;
  tyre?: string;
  highlights?: string[];
  description?: string;
  modelDescription?: string;
  image?: string;
}

export const products: Product[] = [
  {
    id: "sl-model",
    name: "SL Model",
    model: "SL",
    motorOptions: ["600W", "800W", "1200W", "1500W"],
    motorDescription: "Delivers strong power, quick acceleration, and reliable uphill performance.",
    controller: "60/72V Controller",
    controllerDescription:
      "Compatible with both 60V & 72V systems for better top speed, smooth throttle response, and improved efficiency.",
    rearMotorDescription:
      '10" Rear Split Motor - Compact high-torque hub motor design ensures strong performance with low maintenance.',
    wheels: '12" Front Alloy Wheel + 10" Front Wheel',
    wheelDescription: "Durable alloy rim with a stable and agile wheel setup for better control in city riding.",
    speed: "40~55km/h",
    range: "50-120km/charge",
    batteryCapacity: "60 / 72v & 32ah",
    brakes: "Front Disc Rear Drum",
    tyre: "Front 90/90-10 & 90/90-12 , Rear 90/90-10",
    modelDescription:
      "A powerful motor, flexible voltage controller, and compact wheel setup make it ideal for daily commuting and delivery applications.",
    image: "/products/1.jpeg",
  },
  {
    id: "new-model",
    name: "DL Model",
    model: "DL",
    motorOptions: ["600W", "800W", "1200W", "1500W"],
    motorDescription: "Delivers strong power, quick acceleration, and reliable uphill performance.",
    controller: "60/72V Controller",
    controllerDescription:
      "Compatible with both 60V & 72V systems for better top speed, smooth throttle response, and improved efficiency.",
    rearMotorDescription:
      '12" Rear Split Motor - High-performance rear hub design for smooth power delivery, better balance, and low maintenance.',
    wheels: '12" Front Alloy Wheel',
    wheelDescription: "Stylish and durable alloy rim offering stability, comfort, and premium road grip.",
    speed: "45-60km/h",
    range: "50-120km",
    batteryCapacity: "60 / 72v & 32ah",
    brakes: "Front disc and Rear drum",
    tyre: "Front 90/90-10 & 90/90-12 , Rear 90/90-10",
    modelDescription:
      "High-performance design with superior stopping power and premium road grip for smooth power delivery.",
    image: "/products/new-model.jpeg",
  },
  {
    id: "si-model",
    name: "Vsp 3",
    model: "VSP",
    motorOptions: ["600W", "800W", "1200W", "1500W"],
    motorDescription: "Delivers strong power, quick acceleration, and reliable uphill performance.",
    controller: "60/72V Controller",
    controllerDescription:
      "Compatible with both 60V & 72V systems for better top speed, smooth throttle response, and improved efficiency.",
    rearMotorDescription:
      '10" Rear Split Motor - Compact high-torque hub motor design ensures strong performance with low maintenance.',
    wheels: '12" Front Alloy Wheel + 10" Front Wheel',
    wheelDescription: "Durable alloy rim with a stable and agile wheel setup for better control in city riding.",
    speed: "40~55km/h",
    range: "50-120km/charge",
    batteryCapacity: "60 / 72v & 32ah",
    brakes: "Double Disc Braking System",
    tyre: " 90/90-12 ",
    modelDescription:
      "A powerful motor, flexible voltage controller, and compact wheel setup make it ideal for daily commuting and delivery applications.",
    image: "/products/2.jpeg",
  },
  {
    id: "bmw-model",
    name: "OVA",
    model: "OVA",
    motorOptions: ["600W", "800W", "1200W", "1500W"],
    motorDescription: "Delivers strong power, quick acceleration, and reliable uphill performance.",
    controller: "60/72V Controller",
    controllerDescription:
      "Compatible with both 60V & 72V systems for better top speed, smooth throttle response, and improved efficiency.",
    rearMotorDescription:
      '12" Rear Split Motor - High-performance rear hub design for smooth power delivery, better balance, and low maintenance.',
    wheels: '12" Front Alloy Wheel',
    wheelDescription: "Stylish and durable alloy rim offering stability, comfort, and premium road grip.",
    speed: "45~60km/h",
    range: "52-120km",
    batteryCapacity: "60 / 72v & 32ah",
    brakes: "Double Disc Braking System",
    tyre: " 90/90-12 ",
    modelDescription:
      "High-performance design with superior stopping power and premium road grip for smooth power delivery.",
    image: "/products/3.jpeg",
  },
  {
    id: "fh-big-activa",
    name: "FH Big Activa",
    model: "FH BIG ACTIVA",
    motorOptions: ["600W", "800W", "1200W", "1500W"],
    motorDescription: "Delivers strong power, quick acceleration, and reliable uphill performance.",
    controller: "60/72V Controller",
    controllerDescription:
      "Compatible with both 60V & 72V systems for better top speed, smooth throttle response, and improved efficiency.",
    rearMotorDescription:
      '12" Rear Split Motor - High-performance rear hub design for smooth power delivery, better balance, and low maintenance.',
    wheels: '12" Front Alloy Wheel',
    wheelDescription: "Stylish and durable alloy rim offering stability, comfort, and premium road grip.",
    speed: "45-60km/h",
    range: "52-120km",
    batteryCapacity: "60 / 72v & 32ah",
    brakes: "Double Disc Braking System",
    tyre: " 90/90-12 ",
    modelDescription:
      "High-performance design with superior stopping power and premium road grip for smooth power delivery.",
    image: "/products/4.jpeg",
  },
  {
    id: "e4-model",
    name: "E4 Model",
    model: "E4",
    motorOptions: ["600W", "800W", "1200W", "1500W"],
    motorDescription: "Delivers strong power, quick acceleration, and reliable uphill performance.",
    controller: "60/72V Controller",
    controllerDescription:
      "Compatible with both 60V & 72V systems for better top speed, smooth throttle response, and improved efficiency.",
    rearMotorDescription:
      '12" Rear Split Motor - High-performance rear hub design for smooth power delivery, better balance, and low maintenance.',
    wheels: '12" Front Alloy Wheel',
    wheelDescription: "Stylish and durable alloy rim offering stability, comfort, and premium road grip.",
    speed: "45-60km/h",
    range: "50-120km",
    batteryCapacity: "72V32A Lead-acid",
    brakes: "Double Disc Braking System",
    tyre: " 90/90-12 ",
    modelDescription:
      "High-performance design with superior stopping power and premium road grip for smooth power delivery.",
    image: "/products/6.jpeg",
  },
  {
    id: "ola-model",
    name: "BMW Model",
    model: "BMW",
    motorOptions: ["600W", "800W", "1200W", "1500W"],
    motorDescription: "Delivers strong power, quick acceleration, and reliable uphill performance.",
    controller: "60/72V Controller",
    controllerDescription:
      "Compatible with both 60V & 72V systems for better top speed, smooth throttle response, and improved efficiency.",
    rearMotorDescription:
      '12" Rear Split Motor - High-performance rear hub design for smooth power delivery, better balance, and low maintenance.',
    wheels: '12" Front Alloy Wheel',
    wheelDescription: "Stylish and durable alloy rim offering stability, comfort, and premium road grip.",
    speed: "45-60km/h",
    range: "50-120km",
    batteryCapacity: "60 / 72v & 32ah",
    brakes: "Double Disc Braking System",
    tyre: " 90/90-12 ",
    modelDescription:
      "High-performance design with superior stopping power and premium road grip for smooth power delivery.",
    image: "/products/7.jpeg",
  },
  {
    id: "ola-model",
    name: "CS Model",
    model: "CS",
    motorOptions: ["600W", "800W", "1200W", "1500W"],
    motorDescription: "Delivers strong power, quick acceleration, and reliable uphill performance.",
    controller: "60/72V Controller",
    controllerDescription:
      "Compatible with both 60V & 72V systems for better top speed, smooth throttle response, and improved efficiency.",
    rearMotorDescription:
      '12" Rear Split Motor - High-performance rear hub design for smooth power delivery, better balance, and low maintenance.',
    wheels: '12" Front Alloy Wheel',
    wheelDescription: "Stylish and durable alloy rim offering stability, comfort, and premium road grip.",
    speed: "45-60km/h",
    range: "50-120km",
    batteryCapacity: "60 / 72v & 32ah",
    brakes: "Double Disc Braking System",
    tyre: " 90/90-12 ",
    modelDescription:
      "High-performance design with superior stopping power and premium road grip for smooth power delivery.",
    image: "/products/102.png",
  },
];
