import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ToppingList from "./topping-list";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/lib/types";
import ProductModal from "./product-modal";

type propsType = { product: Product };

const ProductCard = ({ product }: propsType) => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-center">
        <Image
          src={product.image}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="mt-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between mt-4">
        <p>
          <span>From</span>
          <span className="font-bold"> ₹{100}</span>
        </p>
        <ProductModal product={product} />
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
