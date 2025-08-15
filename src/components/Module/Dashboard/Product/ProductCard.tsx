"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, MoreHorizontal, Trash2, Tag, DollarSign } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { TProduct } from "@/types/product.type";



type ProductCardProps = {
  product: TProduct;
  language: "en" | "bn";
  onEdit: (product: TProduct) => void;
  onDelete: (id: string) => void;
};

const ProductCard = ({ product, language, onEdit, onDelete }: ProductCardProps) => {
  return (
    <Card className=" transition-all duration-300 border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-xl overflow-hidden flex flex-col h-[360px]">
      {/* Image */}
      <div className="relative w-full h-32 md:h-36">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-t-xl"
        />
        <div className="absolute top-2 right-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="p-1 cursor-pointer">
                <MoreHorizontal className="w-8 h-8 "  />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="cursor-pointer" onClick={() => onEdit(product)}>
                <Edit className="w-4 h-4 mr-2" />
                {language === "en" ? "Edit" : "সম্পাদনা"}
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-red-600       cursor-pointer"
                onClick={() => onDelete(product.id)}
              >
                <Trash2 className="w-4 h-4 mr-2 cursor-pointer" />
                {language === "en" ? "Delete" : "মুছে ফেলুন"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Content */}
      <CardContent className="flex flex-col flex-1 p-3 md:p-4 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-md md:text-lg font-semibold text-gray-800 dark:text-gray-100 truncate">
            {product.name}
          </h3>
          <Badge
            variant="secondary"
            className="text-xs flex items-center gap-1 px-2 py-1 sm:px-3"
          >
            <Tag className="w-3 h-3" />
            {product.category}
          </Badge>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {product.description}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-auto gap-2">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-green-600" />
            <span className="text-md font-bold text-green-600">
              {formatCurrency(product.price, language)}
            </span>
            <Badge variant="outline" className="text-xs">
              / {product.unit}
            </Badge>
          </div>

          {product.stock !== undefined && (
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600 dark:text-gray-300">
                {language === "en" ? "Stock:" : "স্টক:"}
              </span>
              <Badge
                variant={
                  product.stock > 10
                    ? "default"
                    : product.stock > 0
                    ? "secondary"
                    : "destructive"
                }
              >
                {product.stock} {language === "en" ? "units" : "একক"}
              </Badge>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
