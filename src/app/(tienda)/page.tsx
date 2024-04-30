import { ProductGrid, Title } from "@/components";
import { products } from "@/seed/seed";
export default function Home() {
  return (
    <>
      <Title title="Zapatos" subTitle="Todos los productos" />
      <div className="mx-2 my-3 sm:mx-auto sm:w-[97vw]">
        <ProductGrid products={products} />
      </div>
    </>
  );
}
