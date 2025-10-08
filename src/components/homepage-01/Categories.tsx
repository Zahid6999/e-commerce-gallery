'use client';
import categories from '@/data/json/categories/categories.json';
import products from '@/data/json/products/products.json';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import smallLogo from '../../../public/images/icons/logo-small.svg';

interface Category {
  id: number;
  name: string;
  icon: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  icon: string;
  publishDate: string;
  image: string;
  quantity: number;
  discount: number;
  saleStatus: string;
  rating: number;
  brand: string;
}

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    const filtered = products.filter((product) => product.category === categoryName);
    setFilteredProducts(filtered);
  };

  return (
    <section>
      <div className="main-container">
        <div className="space-y-3 text-center">
          <span
            className="text-tagline-1 inline-block bg-primary-light/25 px-4
                 py-2 rounded-lg text-primary">
            Categories
          </span>
          <h2 className="text-heading-2 text-secondary font-bold">Explore Our Product Categories</h2>
          <p className="text-heading-4 text-secondary/60 italic">Find your desired items in categories</p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-6 mt-20 gap-x-18">
          {categories.map((category: Category) => (
            <div key={category.id} className="space-y-4">
              <button
                onClick={() => handleCategoryClick(category.name)}
                className={` p-7 rounded-4xl transition-all size-50 duration-200 ease-in-out ${
                  selectedCategory === category.name
                    ? 'border-primary-light/80 bg-white shadow-6 border-1'
                    : 'bg-primary-light/5 hover:border-primary hover:border-1'
                }`}>
                <figure className="size-27 p-3 rounded-xl bg-white/10 flex justify-center items-center mx-auto">
                  <Image src={category.icon} alt="category" width={168} height={168} className="shrink-0" />
                </figure>
              </button>
              <h3 className="text-heading-5  font-semibold text-secondary text-center">{category.name}</h3>
            </div>
          ))}
        </div>
        {/* Best Selling Products display section */}
        <div className="space-y-3 text-left mt-30">
          <span
            className="text-tagline-1 inline-block bg-primary-light/25 px-4
                 py-2 rounded-lg text-primary">
            Products
          </span>
          <h2 className="text-heading-2 text-secondary font-bold">Best Selling Products</h2>
        </div>
        {/* Products Display */}
        {(selectedCategory || filteredProducts.length > 0) && (
          <div className="mt-2">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-bold text-secondary/90">
                {selectedCategory && `${selectedCategory} - Products`}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-8">
              {filteredProducts.slice(0, 8).map((product: Product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-black/15 hover:shadow-md transition-shadow duration-200">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-tagline-1 text-white bg-green px-2 py-1.5 rounded-sm">
                        {product.discount}% OFF
                      </span>
                      <figure className="w-15 h-3.5">
                        <Image src={smallLogo} alt="small logo" width={60} height={14} className="shrink-0" />
                      </figure>
                    </div>

                    <div className="aspect-square w-full h-[250px] mb-4 bg-gray-50 rounded-xl flex items-center justify-center">
                      {/* <Image
                        src={product.image}
                        alt={product.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover rounded-xl"
                        onError={(e) => {
                          e.currentTarget.src = product.icon;
                        }}
                      /> */}
                    </div>
                    <div>
                      <h4 className="font-medium text-[18px] text-secondary line-clamp-1">{product.name}</h4>
                      <p className="text-sm text-secondary/60">{product.brand}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">
                        ${product.price}
                        {product.discount > 0 && (
                          <span className="text-sm text-red-500 ml-1">-{product.discount}%</span>
                        )}
                      </span>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm text-secondary/60 ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-secondary/60">
                      <span>Stock: {product.quantity}</span>
                      <span
                        className={`px-2 py-1 rounded-full ${
                          product.saleStatus === 'on' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                        }`}>
                        {product.saleStatus === 'on' ? 'On Sale' : 'Out of Stock'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <button className="w-full bg-primary text-white px-4 py-2.5 rounded-sm text-heading-5 font-bold">
                        Add to Cart
                      </button>
                      <button className="w-full bg-gray-200 text-secondary px-4 py-2.5 rounded-sm text-heading-5 font-medium">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/products" className="flex justify-end mt-10">
              <span className="text-primary-light   font-bold text-heading-4 px-4 py-3 border-2 border-primary-light rounded-lg">
                View All Products
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
export default Categories;
