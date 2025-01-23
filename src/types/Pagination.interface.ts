export interface IPagination {
    activePage: number;
    noOfPages: number;
    onPrev: () => void;
    onNext: () => void;
}