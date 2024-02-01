import { Products } from "./products";

export type Package = {
    id : string;
    title : string;
    slug : string;
    category : string;
    description : string;
    price : number;
    image : string;
    products : Products[];
}
