import { useEffect, useState } from "react";
import * as IMAGES from "../images";
import { compressImage } from "../utils/imageCompressor";

const Items = [
  { id: 1, item: "Apartments", price: 1500, image: IMAGES.apartments },
  { id: 2, item: "Bull", price: 1200, image: IMAGES.bull },
  { id: 3, item: "Cows", price: 900, image: IMAGES.cows },
  { id: 4, item: "Diamond Ring", price: 5000, image: IMAGES.diamondRing },
  { id: 5, item: "Donation", price: 50, image: IMAGES.donation },
  { id: 6, item: "F1 Car", price: 2500000, image: IMAGES.f1car },
  { id: 7, item: "Family Home", price: 150000, image: IMAGES.familyHome },
  { id: 8, item: "Ferrari", price: 300000, image: IMAGES.ferrari },
  { id: 9, item: "Ford F150", price: 30000, image: IMAGES.fordF150 },
  { id: 10, item: "Gold Bar", price: 65000, image: IMAGES.goldBar },
  { id: 11, item: "Helicopter", price: 1200000, image: IMAGES.helicopter },
  { id: 12, item: "High-End Restaurant", price: 1500, image: IMAGES.highEndRestaurant },
  { id: 13, item: "Horses", price: 20000, image: IMAGES.horses },
  { id: 14, item: "Hulu", price: 10, image: IMAGES.hulu },
  { id: 15, item: "iPhone 17", price: 1500, image: IMAGES.iphone17 },
  { id: 16, item: "land", price: 1500, image: IMAGES.land },
  { id: 17, item: "Luxuru-wine", price: 1500, image: IMAGES.luxuryWine },
  { id: 18, item: "macbook", price: 1500, image: IMAGES.macbook },
  { id: 19, item: "mansion", price: 1500, image: IMAGES.mansion },
  { id: 20, item: "monster-truck", price: 1500, image: IMAGES.monsterTruck },
  { id: 21, item: "movie", price: 1500, image: IMAGES.movie },
  { id: 22, item: "netflix", price: 1500, image: IMAGES.netflix },
  { id: 23, item: "private-jet", price: 1500, image: IMAGES.privateJet },
  { id: 24, item: "resort-center", price: 1500, image: IMAGES.resortCenter },
  { id: 25, item: "rolex", price: 1500, image: IMAGES.rolex },
  { id: 26, item: "samsung", price: 1500, image: IMAGES.samsung },
  { id: 27, item: "ship", price: 1500, image: IMAGES.ship },
  { id: 28, item: "spottify", price: 1500, image: IMAGES.spotify },
  { id: 29, item: "Malls", price: 1500, image: IMAGES.supermarket },
  { id: 30, item: "Tesla", price: 1500, image: IMAGES.tesla },
  { id: 31, item: "vacation", price: 1500, image: IMAGES.vacation },
  { id: 32, item: "yatch", price: 1500, image: IMAGES.yacht },
  { id: 33, item: "youtube", price: 1500, image: IMAGES.youtube },
];

const ItemsList = () => {
  const [count, setCount] = useState(455_991_870_000);
  const [spent, setSpent] = useState(0);
  const [cart, setCart] = useState(0);
  const [compressedImages, setCompressedImages] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    async function loadCompressed() {
      const compressed: any = {};
      for (const product of Items) {
        compressed[product.id] = await compressImage(product.image);
      }
      setCompressedImages(compressed);
    }
    loadCompressed();
  }, []);

  function buyItems(price: number) {
    setCount(prev => prev - price);
    setSpent(prev => prev + price);
    setCart(prev => prev + 1);
  }

  function sellItems(price: number) {
    setCount(prev => prev + price);
    setSpent(prev => prev - price);
    setCart(prev => Math.max(prev - 1, 0));
  }

  return (
  <>
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-6">

  {/* NAVBAR */}
  <nav className="bg-white shadow-lg py-4 px-6 flex justify-between items-center sticky top-0 z-20 rounded-xl">
    <h1 className="text-3xl font-extrabold text-gray-900 tracking-wide">Elon Musk Property</h1>

    <p className="text-lg font-semibold text-gray-700">
      Balance: <span className="text-green-600 bg-green-100 px-2 py-1 rounded-lg">${count.toLocaleString()}</span>
    </p>
  </nav>

  {/* CART SUMMARY */}
  <div className="max-w-6xl mx-auto mt-6 bg-white shadow-md p-5 rounded-2xl border border-gray-200">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart Summary</h2>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-gray-50 p-3 rounded-lg shadow-sm border">
        <p className="text-gray-700">Items Bought:</p>
        <p className="font-bold text-gray-900 text-xl">{cart}</p>
      </div>

      <div className="bg-gray-50 p-3 rounded-lg shadow-sm border">
        <p className="text-gray-700">Money Spent:</p>
        <p className="font-bold text-red-600 text-xl">${spent.toLocaleString()}</p>
      </div>

      <div className="bg-gray-50 p-3 rounded-lg shadow-sm border">
        <p className="text-gray-700">Remaining Balance:</p>
        <p className="font-bold text-green-600 text-xl">${count.toLocaleString()}</p>
      </div>
    </div>
  </div>

  {/* MULTI-ROW GRID */}
  <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-2">

    {Items.map((Product) => (
      <div
        key={Product.id}
        className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-transform hover:-translate-y-1"
      >
        <img
          src={compressedImages[Product.id]}
          alt={Product.item}
          className="w-full h-48 object-cover"
        />

        <div className="p-5 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900">{Product.item}</h3>
          <p className="text-gray-700 my-3">
            Price: <span className="font-extrabold text-indigo-600">${Product.price.toLocaleString()}</span>
          </p>

          <div className="mt-auto flex gap-3">
            <button
              onClick={() => sellItems(Product.price)}
              className="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Sell
            </button>

            <button
              onClick={() => buyItems(Product.price)}
              className="flex-1 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    ))}

  </div>

</div>

  </> 
  );
};

export default ItemsList;
