type Product = {
  id: number;
  name: string;
  quantity: number;
};

export type Package = {
  id: number;
  title: {
    rendered: string;
  };
  slug: string;
  featured_media: string | null;
  price: number;
  content: {
    rendered: string;
  };
  products: Product[];
};
