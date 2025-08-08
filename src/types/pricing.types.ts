type Price = {
  monthly: number;
  yearly: number;
};

type Plan = {
  name: string;
  description: string;
  price: Price;
  popular: boolean;
  features: string[];
  limitations: string[];
};

type Plans = {
  free: Plan;
  professional: Plan;
  enterprise: Plan;
};

type FaqItem = {
  question: string;
  answer: string;
};

export type Translation = {
  title: string;
  subtitle: string;
  billing: {
    monthly: string;
    yearly: string;
    save: string;
  };
  plans: Plans;
  faq?: {
    title: string;
    items: FaqItem[];
  };
};
