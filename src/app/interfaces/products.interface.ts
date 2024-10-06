export interface Products {
  products: Product;
}

export interface Product {
  image: ImageDefinitions,
  name: string,
  category: string,
  price: string,
}

export interface ImageDefinitions {
  thumbnail: string,
  mobile: string,
  tablet: string,
  desktop: string
}