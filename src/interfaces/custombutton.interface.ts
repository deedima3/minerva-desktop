export interface CustomButtonProps{
    children : any;
    onClick? : ( event : any ) => void | null;
    variant : string;
    extraClass? : string | null;
}