import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./AddProduct.module.css";

const EditProductSkeleton = () => {
  return (
    <main>
      <section>
        <form className={styles["product-form"]}>
          <h1>
            <Skeleton width={200} />
          </h1>
          <div className={styles["form-control"]}>
            <label>
              <Skeleton width={100} />
            </label>
            <Skeleton height={35} />
          </div>
          <div className={styles["form-control"]}>
            <label>
              <Skeleton width={100} />
            </label>
            <Skeleton height={35} />
          </div>
          <div className={styles["form-control"]}>
            <label>
              <Skeleton width={100} />
            </label>
            <Skeleton height={35} />
          </div>
          <div className={styles["form-control"]}>
            <label>
              <Skeleton width={100} />
            </label>
            <Skeleton height={80} />
          </div>
          <Skeleton height={40} width={150} />
        </form>
      </section>
    </main>
  );
};

export default EditProductSkeleton;
