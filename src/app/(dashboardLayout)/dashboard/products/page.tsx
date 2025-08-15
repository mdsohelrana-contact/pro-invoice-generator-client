"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Plus,
  Search,
  MoreHorizontal,
  Edit,
  Trash2,
  Tag,
  DollarSign,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useStore } from "@/lib/store";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import ProductCard from "@/components/Module/Dashboard/Product/ProductCard";
import ProductGrid from "../../../../components/Module/Dashboard/Product/ProductGrid";
import SearchFilterBar from "@/components/Module/Shared/Components/SearchFilterBar";
import EmptyState from "@/components/Module/Shared/Components/EmptyState";
import { TProduct } from "@/types/product.type";
import NewProductModal from "@/components/Module/Dashboard/Product/NewProductModal";

const ProductsPage = () => {
  const { language, products, addProduct, updateProduct, deleteProduct } =
    useStore();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingProduct, setEditingProduct] = useState<TProduct | null>(null);

  const categories = [
    "Services",
    "Products",
    "Design",
    "Development",
    "Consulting",
    "Other",
  ];

  const dummyProducts: TProduct[] = [
    {
      id: "1",
      name: "Creative Web Design",
      description: "Modern, responsive web design service.",
      price: 599,
      category: "Design",
      unit: "project",
      stock: undefined,
      image: "https://source.unsplash.com/random/300x300?webdesign",
    },
    {
      id: "2",
      name: "Coffee Mug",
      description: "Beautiful ceramic mug for your morning coffee.",
      price: 15,
      category: "Products",
      unit: "piece",
      stock: 25,
      image: "https://source.unsplash.com/random/300x300?mug",
    },
    {
      id: "3",
      name: "Consultancy Session",
      description: "1 hour consulting session for your project.",
      price: 99,
      category: "Consulting",
      unit: "hour",
      stock: undefined,
      image: "https://source.unsplash.com/random/300x300?consulting",
    },
  ];

  const listToFilter: TProduct[] =
    products.length > 0 ? products : dummyProducts;

  const filteredProducts = listToFilter.filter((product:TProduct) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEdit = (product: TProduct) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (
      confirm(
        language === "en"
          ? "Are you sure you want to delete this product?"
          : "আপনি কি এই পণ্যটি মুছে ফেলতে চান?"
      )
    ) {
      deleteProduct(id);
    }
  };

  const handleSubmit = (data: Omit<TProduct, "id" | "image">) => {
    if (editingProduct) {
      updateProduct(editingProduct.id, data);
    } else {
      addProduct(data);
    }
    setEditingProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {language === "en" ? "Products & Services" : "পণ্য ও সেবা"}
            </h1>
            <p className="text-gray-600">
              {language === "en"
                ? "Manage your products and services for quick invoice creation"
                : "দ্রুত ইনভয়েস তৈরির জন্য আপনার পণ্য ও সেবা পরিচালনা করুন"}
            </p>
          </div>
        <NewProductModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSubmit={handleSubmit}
        productToEdit={editingProduct}
        categories={categories}
        language={language}
      />
        </div>
      </motion.div>

      {/* Search & Filter */}
      <SearchFilterBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        badgeText={String(filteredProducts.length)}
      />

      {/* Product Grid */}
      <ProductGrid
        products={filteredProducts}
        language={language}
        onEdit={handleEdit}
        onDelete={handleDelete}
        setIsAddModalOpen={ setIsModalOpen}
      />
    </div>
  );
};

export default ProductsPage;
