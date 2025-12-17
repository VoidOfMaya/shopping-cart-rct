import { describe, it, expect, vitest, vi } from "vitest";
import { render, screen , fireEvent} from "@testing-library/react";
import { Card } from "./card";
import {userEvent} from '@testing-library/user-event'

//mocking useoutletcontext
vi.mock('react-router', async()=>{
    const actual =await vi.importActual('react-router');
    return{
        ...actual,
        useOutletContext: vi.fn(),
    };
});
import { useOutletContext } from "react-router";

//mocking quantity button
vi.mock('../quantity-btn/quantity',()=>({
    QuantityBtn: ({handleQuantity})=>(
        <button onClick={()=> handleQuantity(3)}>mock quantity</button>
    )
}))

//mocking props
const mockProps={id: 1, name: 'Test Product', price: 25, photo: 'img.jpg', info: 'desc', rating: {rate: 4.5},}

//render helper
const renderCard = () =>{
    const addItemToCart = vi.fn();
    useOutletContext.mockReturnValue({
        addItemToCart,
    });
    const user = userEvent.setup();
    render(<Card {...mockProps}/>);
    return {user, addItemToCart};
};

describe('product card',()=>{
    it("renders card component",()=>{
        renderCard();
        expect(screen.getByText('Test Product')).toBeInTheDocument();
        expect(screen.getByText('25$')).toBeInTheDocument();

    })
    
    it("displayes add to card on hover",async ()=>{
        const {user} = renderCard();

        const card = screen.getByLabelText('card-element');
        await user.hover(card)
        expect(screen.getByRole('button',{name: /add to cart/i})).toBeInTheDocument();


    })
    it('sends correct data on add to cart', async ()=>{
        const {user, addItemToCart} = renderCard();
        const card = screen.getByLabelText('card-element');
        await user.hover(card)
        await user.click(screen.getByRole('button',{name: /mock quantity/i}))

        const addBtn = screen.getByLabelText( /add to cart/i)
        await user.click(addBtn)
        
        expect(addItemToCart).toHaveBeenCalledWith({
            id: 1, 
            name: 'Test Product', 
            price: 25, 
            photo: 'img.jpg', 
            quantity: 3,
        })
    })
    it('handles quantity setting', async()=>{
        const {user} = renderCard();
        const card = screen.getByLabelText('card-element');
        await user.hover(card)
        await user.click(screen.getByRole('button',{name: /mock quantity/i}))
    })
    
})
