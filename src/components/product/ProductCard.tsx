import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="fade-in overflow-hidden rounded-md shadow-lg transition-shadow duration-300 ease-in hover:shadow-xl">
      <Link href={`/producto/${product.productURL}`} className="block">
        <Image
          className="max-h-[450px] w-full object-cover transition-all duration-300 hover:-translate-y-2"
          alt={product.productName}
          src={`/products-images/${product.imageURL}`}
          width={500}
          height={500}
          style={{ objectPosition: "bottom" }}
        />
      </Link>
      <div className="flex flex-col items-center p-4 text-center">
        <Link
          href={`/producto/${product.productURL}`}
          className="text-lg font-medium hover:underline"
        >
          {product.productName}
        </Link>
      </div>
    </div>
  );
};
