import { describe, it, expect, vitest, vi, beforeEach, afterEach } from "vitest";
import { getByRole, render, screen } from "@testing-library/react";
import { Store } from "./store";
import {userEvent} from '@testing-library/user-event'

//mocking card components
vi.mock('../product-card/card',()=>({
    Card: ({name,price})=>(
        <div data-testid = "product-card">
            <span>{name}</span>
            <span>{price}</span>
        </div>
    ),
}));

//mocking fetched products
const mockProducts =[ 
    {id: 1, title: 'Product one', price: 10, image: 'img1', description: 'desc', rating: {rate: 4.5,count: 10}},
    {id: 2, title: 'Product Two', price: 20, image: 'img2', description: 'desc', rating: {rate: 4.2,count: 8}},
]
beforeEach(()=>{
    vi.stubGlobal('fetch', vi.fn(()=>{
        return Promise.resolve({
            status: 200,
            json: ()=> Promise.resolve(mockProducts),
        })
    }));
});

afterEach(()=>{
    vi.resetAllMocks();
})

describe('testing the store-page app',()=>{

    it("showes loading indicator while the products are being fetched form server",()=>{
        render(<Store />);

        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    })
    it("renders products after fetch",async()=>{
        render(<Store/>);

        const cards = await screen.findAllByTestId('product-card');

        expect(cards).toHaveLength(2);
        expect(screen.getByText('Product one')).toBeInTheDocument();
        expect(screen.getByText('Product Two')).toBeInTheDocument();
    })
    it("calls fetch only once",async()=>{
        render(<Store/>);

        await screen.findByText('Product one');

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products')
    })
})