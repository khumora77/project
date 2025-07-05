"use client";

type Beer = {
  name: string;
  description: string;
  imageUrl: string;
};

const beers: Beer[] = [
  {
    name: "German Pilsner",
    description:
      "A crisp and refreshing lager with light body and floral aroma.",
    imageUrl: "/images/pilsner.jpg",
  },
  {
    name: "Amber Ale",
    description: "Balanced ale with rich malt flavors and a hint of caramel.",
    imageUrl: "/images/amber.jpg",
  },
  {
    name: "Hazy IPA",
    description:
      "Juicy and smooth with tropical fruit aromas and low bitterness.",
    imageUrl:
      "https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd00aae3bc311e2f3cc4eb_Black%20Coffee.avif",
  },
  {
    name: "Stout Classic",
    description: "Bold roasted flavor with notes of chocolate and coffee.",
    imageUrl: "/images/stout.jpg",
  },
];

export default function BeerCardSection() {
  return (
    <section className="bg-[#f4eee1] py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Our Beers</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-16">
          Handcrafted beers brewed with love and tradition. Discover our core
          lineup.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {beers.map((beer, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-full h-60"></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{beer.name}</h3>
                <p className="text-gray-600 mb-4">{beer.description}</p>
                <button className="border border-black px-4 py-2 text-sm rounded-full hover:bg-black hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
