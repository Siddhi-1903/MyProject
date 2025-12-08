import React from "react";
import ProductCard from "./ProductCard";
import "./ProductCard.css";

export default function ProductList() {
  const products = [
    {
      title: "Yelakki Banana",
      brand: "fresho!",
      weightOptions: ["250 g"],
      price: 21,
      oldPrice: 34,
      discount: "38%",
      time: "10 MINS",
      image: "/images/banana.jpg"
    },
    {
      title: "Nagpur Orange - Regular",
      brand: "fresho!",
      weightOptions: ["500 g"],
      price: 27.36,
      oldPrice: 36,
      discount: "24%",
      time: "10 MINS",
      image: "/images/orange.jpg"
    },
    {
      title: "Pomegranate - Regular",
      brand: "fresho!",
      weightOptions: ["1 kg - (5-6 pcs per kg)"],
      price: 229.6,
      oldPrice: 287,
      discount: "20%",
      time: "10 MINS",
      image: "/images/pomegranate.jpg"
    }
  ];

  return (
    <div className="product-container">
      {products.map((item, index) => (
        <ProductCard key={index} {...item} />
      ))}
    </div>
  );
}
