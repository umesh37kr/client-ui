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

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
};
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
          <span className="font-bold"> ₹{product.price}</span>
        </p>
        <Button className="bg-orange-200 hover:bg-orange-300 text-orange-500 px-6 py-2 rounded-full shadow hover:shadow-lg outline-none ease-linear transition-all duration-150">
          Choose
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
