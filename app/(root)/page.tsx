import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/smaple-product";

export default function Home() {
  return (
    <div>
    <ProductList data={sampleData.products} title="Featured Products"/>
    </div>
  );
}
