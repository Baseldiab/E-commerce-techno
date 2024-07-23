import { ProductModel } from "../types/productModel";
import MainCard from "../products/mainCard";
import { randomNumber } from "../util";

export function RenderProduct(product: ProductModel, index: number) {
  return (
    <MainCard
      key={`product-${index}-${product.id}-${randomNumber}`}
      id={product.id}
      image={product.image}
      title={product.title}
      category={product.category}
      price={product.price}
      description={product.description}
      rating={product.rating}
    />
  );
}
