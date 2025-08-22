import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

export default function Home() {
  return (
    <div>
    <ProductList data={sampleData.products} title="Featured Products"/>
    </div>
  );
}
