import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./components/product-card";
import { Category, Product } from "@/lib/types";
import { Suspense } from "react";
import ProductList from "./components/product-list";

export default async function Home() {
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
      {/* todo: add skeleton components */}
      <Suspense fallback="loading...">
        <ProductList />
      </Suspense>
    </>
  );
}
