export class Item {
    id!: number;
    productName!: string;
    price!: number;
    quantity!: number;

    total(): number {
        return (this.price * this.quantity);
    }
}