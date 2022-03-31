export interface ModalProps {
    show: boolean;
    onClose: () => void;
    children: JSX.Element;
    title?: string | null;
    extraClass?: string;
    thing: string;
    word: string;
  }