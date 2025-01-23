export interface INavbar {
    navText: string;
    showSideNav?: boolean;
    handleToastDisplay: () => void;
    toggleSideNav: () => void;
}