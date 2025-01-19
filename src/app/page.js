import Hero from "./components/Hero";
import TopCollection from "./components/TopCollection";
import NewArrival from "./components/NewArrival";
import BestFashion from "./components/BestFashion";
import ShippingDetails from "./components/ShippingDetails";

export default function Home() {
  return (
    <div className="flex flex-col gap-[3.125rem] items-center justify-center w-full max-w-[1440px] mx-auto">
      <Hero />
      <TopCollection />
      <NewArrival />
      <BestFashion />
      <ShippingDetails />
    </div>
  );
}
