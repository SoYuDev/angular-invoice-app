import { Invoice } from "../../model/invoice";

// Exports a TS Object 
// We are somehow simulating a Json that we would get from a server response.
export const invoiceData: Invoice = {
    id: 1,
    name: 'Pc components',
    client: {
        name: 'Luis',
        lastname: 'Rodríguez',
        address: {
            country: 'Spain',
            city: 'Madrid',
            street: 'Dummy street value',
            number: 99
        }
    },
    company: {
        name: 'Dummy company',
        taxIdNumber: 98
        },
    items: [
        {
            id: 1,
            productName: 'Razer Mouse',
            price: 1000,
            quantity: 2
        },
        {
            id: 2,
            productName: 'Intel CPU',
            price: 1500,
            quantity: 3
        },
        {
            id: 3,
            productName: 'NVDIA GTX 180',
            price: 500,
            quantity: 1
        }
    ]
}