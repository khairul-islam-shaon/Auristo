import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.actions";

export default async function Home() {
  const latestProducts = await getLatestProducts()
  return (
    <div>
    <ProductList data={latestProducts} title="Featured Products"/>
    </div>
  );
}
