import { titleFont } from "@/configs/fonts";
import { products } from "@/seed/seed";
import Image from "next/image";
import { notFound } from "next/navigation";
interface Props {
  params: {
    id: string;
  };
}

export default function Producto({ params }: Props) {
  const { id } = params;
  const product = products.find((pro) => pro.productId.toString() === id);
  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 grid gap-3 md:grid-cols-3">
      <div className="col-span-1 bg-red-50 md:col-span-2">
        <Image
          className="mb-2 h-screen w-full object-fill"
          src={`/products-images/${product.imageURL}`}
          alt={product.productName}
          width={500}
          height={500}
        />
      </div>
      <div className="cols-span-1 bg-blue-200 px-5">
        <h1 className={`${titleFont.className} font-bold antialiased`}>
          {product.productName}
        </h1>
        <p className="mb-5 text-lg">${product.productPrice}</p>
        <button className="btn-primary my-5">Comprar</button>
        <h3 className="text-sm font-bold">Descripcion</h3>
        <p className="font-light">descripcion del producto</p>
      </div>
    </div>
  );
}
