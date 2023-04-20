export interface Laptop {
    id: number,
    brand: string,
    model: string,
    specs: {
       processor: string,
       memory: string,
       storage: string,
       graphics: string,
       display: string
    },
    price: number
}