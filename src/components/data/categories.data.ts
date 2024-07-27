export interface CategoriesType {
    title: string;
    link: string;
    text: string;
    image?: string;
}

export const categoriesData: CategoriesType[] = [
    
    {
        title: "Lighting", 
        link: "products/category/men's clothing",
        text: "4 products"
    },
    {
        title: "electronics", 
        link: "/products/category/electronics",
        text: "6 products"
    },
    {
        title: "Jewelry", 
        link: "products/category/jewelery",
        text: "4 products"
    },
    {
        title: "women's clothing", 
        link: "products/category/women's clothing",
         text: "6 products"
    }
    ];
