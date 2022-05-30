export interface CustomButtonProps{
    children : any;
    onClick? : () => {} | void | null;
    variant : string;
    extraClass? : string | null;
}