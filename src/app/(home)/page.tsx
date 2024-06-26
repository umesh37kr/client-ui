import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard, { Product } from "./components/product-card";

const products: Product[] = [
  {
    id: "1",
    name: "Margarita",
    description: "this is very tasty pizza",
    image: "/pizza-main.png",
    price: 480,
  },
  {
    id: "2",
    name: "Margarita",
    description: "this is very tasty pizza",
    image: "/pizza-main.png",
    price: 480,
  },
  {
    id: "3",
    name: "Margarita",
    description: "this is very tasty pizza",
    image: "/pizza-main.png",
    price: 480,
  },
  {
    id: "4",
    name: "Margarita",
    description: "this is very tasty pizza",
    image: "/pizza-main.png",
    price: 480,
  },
  {
    id: "5",
    name: "Margarita",
    description: "this is very tasty pizza",
    image: "/pizza-main.png",
    price: 480,
  },
];
export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="container flex items-center justify-between">
          <div>
            <h1 className="text-6xl font-black font-sans leading-2">
              Super Delicious pizza in <br />
              <span className="text-primary">Only 45 minutes!</span>
            </h1>
            <p className="text-2xl mt-8 max-w-lg leading-snug">
              Enjoy a free meal if orders takes more than 30 minutes!
            </p>
            <Button className="mt-8 text-xl rounded-full py-7 font-bold">
              Get your pizza now
            </Button>
          </div>
          <div>
            <Image
              src="/pizza-main.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container py-12">
          <Tabs defaultValue="pizza">
            <TabsList>
              <TabsTrigger value="pizza" className="text-md">
                Pizza
              </TabsTrigger>
              <TabsTrigger value="bevrages" className="text-md">
                Bevrages
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pizza">
              <div className="grid grid-cols-4 gap-6 mt-6">
                {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="bevrages">
              <div className="grid grid-cols-4 gap-6 mt-6">
                {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
