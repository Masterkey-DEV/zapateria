import { Product } from "@/interfaces";
import { ProductCard } from "../product/ProductCard";
interface Props {
  products: Product[];
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
      {products.map((product) => {
        return <ProductCard product={product} key={product.productId} />;
      })}
    </div>
  );
};
