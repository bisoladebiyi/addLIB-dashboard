export interface IDropdown {
    value: string;
    options: IDropdownOption[];
    onChange: (option: IDropdownOption) => void;
}

export interface IDropdownOption {
    value: string;
    label: string;
}