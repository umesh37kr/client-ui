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
        <Dialog>
          <DialogTrigger className="bg-orange-200 hover:bg-orange-300 text-orange-500 px-6 py-2 rounded-full shadow hover:shadow-lg outline-none ease-linear transition-all duration-150">
            Choose
          </DialogTrigger>
          <DialogContent className="max-w-3xl p-0">
            <div className="flex">
              <div className="w-1/3 bg-white rounded p-8 flex items-center justify-center">
                <Image
                  src={product.image}
                  width={450}
                  height={450}
                  alt="Picture of the author"
                />
              </div>
              <div className="container w-2/3 py-5">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="mt-1">{product.description}</p>
                <div>
                  <h4 className="mt-4">Choose the size</h4>
                  <RadioGroup
                    defaultValue="small"
                    className="grid grid-cols-3 gap-4 mt-2"
                  >
                    <div>
                      <RadioGroupItem
                        value="small"
                        id="small"
                        aria-label="small"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="small"
                        className="flex flex-col items-center justify-between rounded-md bg-white border-2 p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        Small
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="medium"
                        id="medium"
                        aria-label="medium"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="medium"
                        className="flex flex-col items-center justify-between rounded-md bg-white border-2 p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        Medium
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="large"
                        id="large"
                        aria-label="large"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="large"
                        className="flex flex-col items-center justify-between rounded-md bg-white border-2 p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        Large
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <h4 className="mt-4">Choose the size</h4>
                  <RadioGroup
                    defaultValue="small"
                    className="grid grid-cols-3 gap-4 mt-2"
                  >
                    <div>
                      <RadioGroupItem
                        value="thin"
                        id="thin"
                        aria-label="Thin"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="thin"
                        className="flex flex-col items-center justify-between rounded-md bg-white border-2 p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        Thin
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem
                        value="thick"
                        id="thick"
                        aria-label="Thick"
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor="thick"
                        className="flex flex-col items-center justify-between rounded-md bg-white border-2 p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                      >
                        Thick
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <ToppingList />
                <div className="flex items-center justify-between mt-10">
                  <span className="font-bold">₹500</span>
                  <Button>
                    <ShoppingCart size={20} />
                    <span className="ml-2">Add to Cart</span>
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
