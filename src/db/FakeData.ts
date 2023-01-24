type FakeAddOns = {
  name: string;
  title: string;
  description: string;
  price: AddOnPrice;
}

type AddOnPrice = {
  monthly: number;
  yearly: number;
}

export const fakeAddOns: FakeAddOns[] = [
  {
    name: "online-service",
    title: "Online Service",
    description: "Access to multiplayer games",
    price: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    name: "larger-storage",
    title: "Larger storage",
    description: "Increase storage capacity",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    name: "customizable-profile",
    title: "Customizable profile",
    description: "Custom theme on your profile",
    price: {
      monthly: 3,
      yearly: 30,
    },
  },
];

type FakePlans = {
  name: string;
  title: string;
  price: PlanPrice;
}

type PlanPrice = {
  monthly: number;
  yearly: number;
}

export const fakePlans: FakePlans[] = [
  {
    name: "arcade",
    title: "Arcade",
    price: {
      monthly: 9,
      yearly: 90,
    },
  },
  {
    name: "advanced",
    title: "Advanced",
    price: {
      monthly: 19,
      yearly: 190,
    },
  },
  {
    name: "pro",
    title: "Pro",
    price: {
      monthly: 29,
      yearly: 290,
    },
  },
];
