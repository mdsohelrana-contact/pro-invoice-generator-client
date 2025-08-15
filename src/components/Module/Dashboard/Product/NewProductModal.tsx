"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { TProduct } from "@/types/product.type";
import React from "react";

type NewProductModalProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: Omit<TProduct, "id" | "image">) => void;
  productToEdit?: TProduct | null;
  categories: string[];
  language: "en" | "bn";
};

export default function NewProductModal({
  isOpen,
  onOpenChange,
  onSubmit,
  productToEdit,
  categories,
  language,
}: NewProductModalProps) {
  const { register, handleSubmit, reset, control } = useForm<Omit<TProduct, "id" | "image">>({
    defaultValues: productToEdit || { name: "", description: "", price: 0, category: "", unit: "piece", stock: undefined },
  });

  // reset form when productToEdit changes
  React.useEffect(() => {
    reset(productToEdit || { name: "", description: "", price: 0, category: "", unit: "piece", stock: undefined });
  }, [productToEdit, reset]);

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button>
          {language === "en" ? "Add Product" : "পণ্য যোগ করুন"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {productToEdit
              ? language === "en" ? "Edit Product" : "পণ্য সম্পাদনা"
              : language === "en" ? "Add New Product" : "নতুন পণ্য যোগ করুন"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="name">{language === "en" ? "Product Name" : "পণ্যের নাম"}</Label>
            <Input id="name" {...register("name", { required: true })} />
          </div>
          <div>
            <Label htmlFor="description">{language === "en" ? "Description" : "বিবরণ"}</Label>
            <Textarea id="description" {...register("description")} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="price">{language === "en" ? "Price" : "মূল্য"}</Label>
              <Input type="number" id="price" {...register("price", { valueAsNumber: true, required: true })} />
            </div>
            <div>
              <Label htmlFor="unit">{language === "en" ? "Unit" : "একক"}</Label>
              <Controller
                control={control}
                name="unit"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="piece">Piece</SelectItem>
                      <SelectItem value="hour">Hour</SelectItem>
                      <SelectItem value="project">Project</SelectItem>
                      <SelectItem value="month">Month</SelectItem>
                      <SelectItem value="kg">KG</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="category">{language === "en" ? "Category" : "ক্যাটেগরি"}</Label>
              <Controller
                control={control}
                name="category"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div>
              <Label htmlFor="stock">{language === "en" ? "Stock (Optional)" : "স্টক (ঐচ্ছিক)"}</Label>
              <Input type="number" id="stock" {...register("stock", { valueAsNumber: true })} />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => { reset(); onOpenChange(false); }}>
              {language === "en" ? "Cancel" : "বাতিল"}
            </Button>
            <Button type="submit">
              {productToEdit
                ? language === "en" ? "Update" : "আপডেট"
                : language === "en" ? "Add Product" : "পণ্য যোগ করুন"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
