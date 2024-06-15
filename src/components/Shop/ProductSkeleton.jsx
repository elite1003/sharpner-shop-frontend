import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Product.css";

const ProductSkeleton = () => {
  return (
    <main>
      <section className="product-item" style={{ margin: "auto" }}>
        <header className="card__header">
          <Skeleton height={30} width={`60%`} />
        </header>
        <div className="card__image">
          <Skeleton height={200} />
        </div>
        <div className="card__content">
          <Skeleton height={25} width={`40%`} />
          <Skeleton height={20} count={3} />
        </div>
        <div className="card__actions">
          <Skeleton height={40} width={100} />
        </div>
      </section>
    </main>
  );
};

export default ProductSkeleton;
