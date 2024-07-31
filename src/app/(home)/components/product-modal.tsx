import React from "react";
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
import { Value } from "@radix-ui/react-select";

const ProductModal = ({ product }: { product: Product }) => {
  return (
    <>
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
                alt={product.name}
              />
            </div>
            <div className="container w-2/3 py-5">
              <h3 className="text-xl font-bold">{product.name}</h3>
              <p className="mt-1">{product.description}</p>
              {Object.entries(product.category.priceConfiguration).map(
                ([key, Value]) => {
                  return (
                    <div key={key}>
                      <h4 className="mt-4">Choose the {key}</h4>
                      <RadioGroup
                        defaultValue={Value.availableOptions[0]}
                        className="grid grid-cols-3 gap-4 mt-2"
                      >
                        {Value.availableOptions.map((option) => {
                          return (
                            <div key={option}>
                              <RadioGroupItem
                                value={option}
                                id={option}
                                aria-label={option}
                                className="peer sr-only"
                              />
                              <Label
                                htmlFor={option}
                                className="flex flex-col items-center justify-between rounded-md bg-white border-2 p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                              >
                                {option}
                              </Label>
                            </div>
                          );
                        })}
                      </RadioGroup>
                    </div>
                  );
                }
              )}

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
    </>
  );
};

export default ProductModal;
