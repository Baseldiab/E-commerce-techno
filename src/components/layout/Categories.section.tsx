import CategoriesSectionItem from "./Categories.section.item";
import CategoryFirst from "/images/categories/category-1-min.jpg.webp";
import CategorySecond from "/images/categories/category-2-min.jpg.webp";
import CategoryThird from "/images/categories/category-3-min.jpg.webp";
import CategoryForth from "/images/categories/category-4.jpg.webp";

export default function CategoriesSection() {
  return (
    <section
      id="CategoriesSection"
      className="myContainer grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-center py-8"
    >
      <CategoriesSectionItem
        link="products/category/men's clothing"
        title={"Lighting"}
        text="4 products"
        image={CategoryFirst}
      />
      <div className="flex gap-4 flex-col">
        <CategoriesSectionItem
          link="/products/category/electronics"
          title={"electronics"}
          text="6 products"
          image={CategorySecond}
        />
        <CategoriesSectionItem
          link="products/category/jewelery"
          title={"Jewelry"}
          text="4 products"
          image={CategoryThird}
        />
      </div>
      <CategoriesSectionItem
        link="products/category/women's clothing"
        title={"women"}
        text="6 products"
        image={CategoryForth}
      />
    </section>
  );
}
