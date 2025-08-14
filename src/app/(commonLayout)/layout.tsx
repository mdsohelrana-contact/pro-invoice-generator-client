import Footer from "@/components/Module/Shared/Footer/Footer";
import Header from "@/components/Module/Shared/Header/Header";


const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;
