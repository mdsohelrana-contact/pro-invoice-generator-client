"use client";

import ProductCard from "@/components/Module/Dashboard/Product/ProductCard";
import { TProduct } from "@/types/product.type";
import { motion, AnimatePresence } from "framer-motion";
import { Package } from "lucide-react";
import EmptyState from "../../Shared/Components/EmptyState";

type ProductGridProps = {
  products: TProduct[];
  language: "en" | "bn";
  onEdit: (product: TProduct) => void;
  onDelete: (id: string) => void;
  setIsAddModalOpen?: (isOpen: boolean) => void;
};

const ProductGrid = ({
  products,
  language,
  onEdit,
  onDelete,
  setIsAddModalOpen,
}: ProductGridProps) => {
  if (products.length === 0) {
    return (
       <EmptyState
          icon={Package}
          title={
            language === "en" ? "No products found" : "কোন পণ্য পাওয়া যায়নি"
          }
          description={
            language === "en"
              ? "Try adjusting your search terms or add a new product."
              : "আপনার অনুসন্ধান শর্ত সামঞ্জস্য করুন বা একটি নতুন পণ্য যোগ করুন।"
          }
          buttonText={
            language === "en"
              ? "Add Your First Product"
              : "আপনার প্রথম পণ্য যোগ করুন"
          }
          onButtonClick={setIsAddModalOpen ? () => setIsAddModalOpen(true) : undefined}
        />
    );
  }

  return (
    <motion.div
      className="grid   lg:grid-cols-3 xl:grid-cols-4 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <ProductCard
              product={product}
              language={language}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProductGrid;
