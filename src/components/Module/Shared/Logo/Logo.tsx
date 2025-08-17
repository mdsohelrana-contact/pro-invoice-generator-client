import { FileText } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
        <FileText className="w-5 h-5 text-white" />
      </div>
      <span className="gradient-text">InvoicePro BD</span>
    </Link>
  );
};

export default Logo;
