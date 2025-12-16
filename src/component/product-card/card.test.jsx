import { describe, it, expect, vitest, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "./card";
import { QuantityBtn } from "../quantity-btn/quantity";
import {userEvent} from '@testing-library/user-event'

describe('product card',()=>{
    it("renders card component",()=>{
        render(<Card
            id={1}
            name="Sample Product"
            price={19.99}
            photo="https://example.com/product.jpg"
            info="This is a test product."
            rating={{ rate: 4.5, count: 120 }} />
        );

        const card = screen.getByLabelText('card-element');
        expect(card).toBeInTheDocument();

        const productName = screen.getByText('Sample Product');
        expect(productName).toBeInTheDocument();
        
        const photo = screen.getByAltText('Sample Product photo')
        expect(photo).toBeInTheDocument();

        const price = screen.getByLabelText('product price');
        expect(price.textContent).toBe('19.99$');

    })
    
    it("displayes add to card elements on hover and none when !hover",async ()=>{
        const user = userEvent.setup();
        render(<Card
            id={1}
            name="Sample Product"
            price={19.99}
            photo="https://example.com/product.jpg"
            info="This is a test product."
            rating={{ rate: 4.5, count: 120 }} />
        );
        const card = screen.getByLabelText('card-element');
        await user.hover(card)
        expect(await screen.findByLabelText('Add to cart')).toBeInTheDocument();


    })
    
})
