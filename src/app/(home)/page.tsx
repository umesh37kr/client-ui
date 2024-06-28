import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./components/product-card";
import { Category, Product } from "@/lib/types";

export default async function Home() {
  // todo: do concurrent request -> Promise.all
  const categoryResponse = await fetch(
    `${process.env.BACKEND_URL}/api/catalog/categories/all`,
    {
      next: {
        revalidate: 3600, //1 hour
      },
    }
  );
  if (!categoryResponse.ok) {
    throw new Error("unable to fetch category data");
  }
  const categories: Category[] = await categoryResponse.json();
  // todo: add pagination
  // todo: add dynamic tenant id
  const productsResponse = await fetch(
    `${process.env.BACKEND_URL}/api/catalog/products/?perPage=100&tenantId=1`,
    {
      next: {
        revalidate: 3600, //1 hour
      },
    }
  );
  if (!productsResponse.ok) {
    throw new Error("unable to fetch category data");
  }
  const products: { data: Product[] } = await productsResponse.json();

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
          <Tabs defaultValue={categories[1]._id}>
            <TabsList>
              {categories.map((category) => {
                return (
                  <TabsTrigger
                    key={category._id}
                    value={category._id}
                    className="text-md"
                  >
                    {category.name}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {categories.map((category) => {
              return (
                <TabsContent key={category._id} value={category._id}>
                  <div className="grid grid-cols-4 gap-6 mt-6">
                    {products.data
                      .filter(
                        (product) => product.category._id === category._id
                      )
                      .map((product) => (
                        <ProductCard product={product} key={product._id} />
                      ))}
                  </div>
                </TabsContent>
              );
            })}

            {/* <TabsContent value="bevrages">
              <div className="grid grid-cols-4 gap-6 mt-6">
                {products.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </TabsContent> */}
          </Tabs>
        </div>
      </section>
    </>
  );
}
