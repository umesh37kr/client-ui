"use client";
import { useState } from "react";
import ToppingCard, { Topping } from "./topping-card";

const toppings = [
  {
    id: "1",
    name: "chicken",
    image: "/chicken.png",
    price: 50,
    isAvailable: true,
  },
  {
    id: "2",
    name: "Jelapeno",
    image: "/jelapeno.png",
    price: 50,
    isAvailable: true,
  },
  {
    id: "3",
    name: "Cheese",
    image: "/cheese.png",
    price: 50,
    isAvailable: true,
  },
];
const ToppingList = () => {
  const [selectedToppings, setSelectedToppings] = useState([toppings[0]]);
  const handleCheckBoxCheck = (topping: Topping) => {
    const isAlreadyExist = selectedToppings.some(
      (element) => element.id === topping.id
    );
    if (isAlreadyExist) {
      setSelectedToppings((prev) =>
        prev.filter((ele) => ele.id !== topping.id)
      );
      return;
    }
    setSelectedToppings((prev) => [...prev, topping]);
  };
  return (
    <section className="mt-6">
      <h3>Extra toppings</h3>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {toppings.map((topping) => {
          return (
            <ToppingCard
              topping={topping}
              key={topping.id}
              selectedToppings={selectedToppings}
              handleCheckBoxCheck={handleCheckBoxCheck}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ToppingList;
