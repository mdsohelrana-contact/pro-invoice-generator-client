// Just export array of icon names matching lucide-react export names:
const iconNames = [
  "Apple",
  "Beer",
  "Car",
  "Dragon",
  "Feather",
  "Ghost",
  "Heart",
  "IceCream",
  "Jedi",
  "KiwiBird",
];

const fonts = [
  "'Roboto Mono', monospace",
  "'Courier New', Courier, monospace",
  "'Georgia', serif",
  "'Arial', sans-serif",
  "'Comic Sans MS', cursive, sans-serif",
  "'Times New Roman', Times, serif",
  "'Verdana', Geneva, sans-serif",
  "'Lucida Console', Monaco, monospace",
  "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
  "'Trebuchet MS', Helvetica, sans-serif",
];

const colorSchemes = [
  {
    primary: "#B9121C",
    secondary: "#6B7280",
    background: "#F5F5F5",
    textPrimary: "#111827",
    textSecondary: "#4B5563",
    border: "#D1D5DB",
  },
  {
    primary: "#2563EB",
    secondary: "#1E40AF",
    background: "#EFF6FF",
    textPrimary: "#1E3A8A",
    textSecondary: "#3B82F6",
    border: "#93C5FD",
  },
  {
    primary: "#D97706",
    secondary: "#92400E",
    background: "#FFFBEB",
    textPrimary: "#78350F",
    textSecondary: "#B45309",
    border: "#FBBF24",
  },
  {
    primary: "#059669",
    secondary: "#064E3B",
    background: "#ECFDF5",
    textPrimary: "#065F46",
    textSecondary: "#10B981",
    border: "#34D399",
  },
  {
    primary: "#7C3AED",
    secondary: "#4C1D95",
    background: "#F5F3FF",
    textPrimary: "#5B21B6",
    textSecondary: "#8B5CF6",
    border: "#C4B5FD",
  },
  {
    primary: "#DC2626",
    secondary: "#991B1B",
    background: "#FEE2E2",
    textPrimary: "#7F1D1D",
    textSecondary: "#EF4444",
    border: "#FCA5A5",
  },
  {
    primary: "#2563EB",
    secondary: "#1D4ED8",
    background: "#DBEAFE",
    textPrimary: "#1E40AF",
    textSecondary: "#3B82F6",
    border: "#BFDBFE",
  },
  {
    primary: "#EA580C",
    secondary: "#78350F",
    background: "#FFEDD5",
    textPrimary: "#9A3412",
    textSecondary: "#F97316",
    border: "#FDBA74",
  },
  {
    primary: "#059669",
    secondary: "#065F46",
    background: "#D1FAE5",
    textPrimary: "#047857",
    textSecondary: "#10B981",
    border: "#6EE7B7",
  },
  {
    primary: "#8B5CF6",
    secondary: "#5B21B6",
    background: "#EDE9FE",
    textPrimary: "#6D28D9",
    textSecondary: "#A78BFA",
    border: "#C4B5FD",
  },
];

// Generate 10 dummy invoices with companyLogoName string
export const dummyInvoices = Array.from({ length: 10 }).map((_, i) => {
  const baseNumber = 20220811 + i;
  const date = new Date(2025, 7, 11 + i);

  const items = [
    { description: "Fried Chicken (Crispy & Juicy)", amount: 399 + i * 10 },
    { description: "Fried Rice with Herbs", amount: 599 + i * 5 },
    { description: "Short Ribs Steak (Tender Cut)", amount: 1009 + i * 20 },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
  const discount = 100 + i * 10;
  const deliveryFee = 200 + i * 15;
  const totalDue = subtotal - discount + deliveryFee;

  return {
    id: `invoice-${i}`,
    companyName: `Fradel & Spies #${i + 1}`,
    companyTagline: "Culinary Excellence Delivered",
    companyLogoName: iconNames[i],  // <-- icon name as string here
    invoiceNumber: `INV-${baseNumber}`,
    issueDate: date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    items,
    subtotal,
    discount,
    deliveryFee,
    totalDue,
    paymentDetails: {
      bankName: "Fradel & Spies Culinary",
      accountNumber: "123-456-7890",
      accountHolder: "Fradel & Spies Culinary",
    },
    watermarkContent: "InvoicePro BD",
    fontFamily: fonts[i],
    colors: colorSchemes[i % colorSchemes.length],
    premium: i % 3 === 0,
    rating: 4 + (i % 2),
    description: "Sample invoice description here.",
    features: ["Feature A", "Feature B", "Feature C"],
    downloads: 1000 + i * 200,
    preview: "/placeholder.svg",
  };
});
