export interface Product {
  id: string;
  name: string;
  model: string;
  motor: string;
  controller: string;
  wheels: string;
  brakes?: string;
  highlights: string[];
  description: string;
  image?: string;
}

export const products: Product[] = [
  {
    id: "di-model",
    name: "DI Model",
    model: "DI",
    motor: "1000W Motor",
    controller: "60/72V Controller",
    wheels: "12\" Front Alloy + 10\" Front Wheel",
    highlights: [
      "Strong power & quick acceleration",
      "Reliable uphill performance",
      "Perfect for daily commuting",
      "Ideal for delivery applications",
    ],
    description: "A powerful motor, flexible voltage controller, and compact wheel setup make it ideal for daily commuting and delivery applications.",
    image: "/products/1.jpeg",
  },
  {
    id: "si-model",
    name: "SI Model",
    model: "SI",
    motor: "1000W Motor",
    controller: "60/72V Controller",
    wheels: "12\" Front Alloy + 10\" Front Wheel",
    highlights: [
      "Strong power & quick acceleration",
      "Reliable uphill performance",
      "Perfect for daily commuting",
      "Ideal for delivery applications",
    ],
    description: "A powerful motor, flexible voltage controller, and compact wheel setup make it ideal for daily commuting and delivery applications.",
    image: "/products/2.jpeg",
  },
  {
    id: "bmw-model",
    name: "BMW Model",
    model: "BMW",
    motor: "1200W Powerful Motor",
    controller: "60/72V Smart Controller",
    wheels: "12\" Front Alloy Wheel",
    brakes: "Double Disc Braking System",
    highlights: [
      "High torque & fast pickup",
      "Superior stopping power",
      "Premium road grip",
      "Smooth power delivery",
    ],
    description: "High-performance rear hub design for smooth power delivery, better balance, and low maintenance.",
    image: "/products/3.jpeg",
  },
  {
    id: "fh-big-activa",
    name: "FH Big Activa",
    model: "FH BIG ACTIVA",
    motor: "1200W Powerful Motor",
    controller: "60/72V Smart Controller",
    wheels: "12\" Front Alloy Wheel",
    brakes: "Double Disc Braking System",
    highlights: [
      "High torque & fast pickup",
      "Superior stopping power",
      "Premium road grip",
      "Smooth power delivery",
    ],
    description: "High-performance rear hub design for smooth power delivery, better balance, and low maintenance.",
    image: "/products/4.jpeg",
  },
  {
    id: "e4-model",
    name: "E4 Model",
    model: "E4",
    motor: "1200W Powerful Motor",
    controller: "60/72V Smart Controller",
    wheels: "12\" Front Alloy Wheel",
    brakes: "Double Disc Braking System",
    highlights: [
      "High torque & fast pickup",
      "Superior stopping power",
      "Premium road grip",
      "Smooth power delivery",
    ],
    description: "High-performance rear hub design for smooth power delivery, better balance, and low maintenance.",
    image: "/products/6.jpeg",
  },
  {
    id: "ola-model",
    name: "OLA Model",
    model: "OLA",
    motor: "1200W Powerful Motor",
    controller: "60/72V Smart Controller",
    wheels: "12\" Front Alloy Wheel",
    brakes: "Double Disc Braking System",
    highlights: [
      "High torque & fast pickup",
      "Superior stopping power",
      "Premium road grip",
      "Smooth power delivery",
    ],
    description: "High-performance rear hub design for smooth power delivery, better balance, and low maintenance.",
    image: "/products/7.jpeg",
  },
  {
    id: "vespa-3",
    name: "Vespa 3",
    model: "VESPA 3",
    motor: "1200W Powerful Motor",
    controller: "60/72V Smart Controller",
    wheels: "12\" Front Alloy Wheel",
    brakes: "Double Disc Braking System",
    highlights: [
      "High torque & fast pickup",
      "Superior stopping power",
      "Premium road grip",
      "Smooth power delivery",
    ],
    description: "High-performance rear hub design for smooth power delivery, better balance, and low maintenance.",
    image: "/products/1.jpeg", // Using first image as fallback, can be updated later
  },
];

