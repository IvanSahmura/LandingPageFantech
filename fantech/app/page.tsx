import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <div className="px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <Product
              imageUrl="/assets/1.png"
              name="Fantech HG15 Gaming Headset"
              price="$79.99"
              rating={5}
              discount="40%"
            />
            <Product
              imageUrl="/assets/2.png"
              name="Fantech X9 Thor II Gaming Mouse"
              price="$39.99"
              rating={4}
              discount="40%"
            />
            <Product
              imageUrl="/assets/4.png"
              name="Fantech X15 Phantom Gaming Mouse"
              price="$44.99"
              rating={4}
              discount="40%"
            />
            <Product
              imageUrl="/assets/3.png"
              name="Fantech ECHO Gaming Headset"
              price="$69.99"
              rating={3}
              discount="40%"
            />
            <Product
              imageUrl="/assets/6.png"
              name="Fantech UX2 HIVE Gaming Mouse"
              price="$34.99"
              rating={5}
              discount="40%"
            />
            <Product
              imageUrl="/assets/7.png"
              name="Fantech X17 BLAKE Gaming Mouse"
              price="$29.99"
              rating={4}
              discount="40%"
            />
            <Product
              imageUrl="/assets/5.png"
              name="Fantech CRYPTO VX7 Gaming Mouse"
              price="$49.99"
              rating={3}
              discount="40%"
            />
            <Product
              imageUrl="/assets/8.png"
              name="Fantech UX1 HERO Optical Gaming Mouse"
              price="$54.99"
              rating={5}
              discount="40%"
            />
          </div>
        </div>
      </div>
    </main>
  );
}