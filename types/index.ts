import { manufacturers } from './../constants/index';
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    btnType?: "button" | "submit";
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;

}

export interface searchManufacturerProps{
    manufacturer?: string;
    setManufacturer?: (manufacturer:string) => void;
}
export interface CarProps{
    city_mpg:number,
class:string,
combination_mpg:number,
cylinders:number,
displacement:number,
drive:string,
fuel_type:string,
make:string,
model:string,
transmission:string,
year:number,
}