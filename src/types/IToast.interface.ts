export interface IToast {
    show: boolean;
    close: () => void;
    text: string;
    duration?: number;
}