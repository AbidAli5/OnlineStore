import { ContactUSComponent } from './contact-us/contact-us.component';
export interface Product{
    id : number,
    title : string,
    description : string,
    handle : string,
    product_type : string,
    vendor : string,
    price : number,
    image : string,
    rating: string
}
export interface rating{
    rate :number;
    Count: number
}