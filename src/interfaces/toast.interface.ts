export interface ToastProps {
    title: string;
    message: string;
    variant: "success" | "warning" | "error" | "info";
    extraClass?: string | null;
    icon : any
    show : boolean
}