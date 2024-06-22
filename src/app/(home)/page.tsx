import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
          <Tabs defaultValue="pizza" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="pizza" className="text-md">
                Pizza
              </TabsTrigger>
              <TabsTrigger value="bevrages" className="text-md">
                Bevrages
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pizza">Pizza list</TabsContent>
            <TabsContent value="bevrages">Beverages List</TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
