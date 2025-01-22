export interface IRadio {
    name: "price" | "rating";
    isChecked: boolean;
    onChange: (text: "price" | "rating" | "") => void;
}