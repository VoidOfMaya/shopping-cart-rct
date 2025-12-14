import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { QuantityBtn } from "./quantity";
import {userEvent} from '@testing-library/user-event'

describe('item quantity selector',()=>{
    it("renders selector component",()=>{
        render(<QuantityBtn />);

        const incrementButton = screen.getByRole('button', { name: /increase item quantity/i });
        expect(incrementButton).toBeInTheDocument();

        const decrementButton = screen.getByRole('button', { name: /decrease item quantity/i });
        expect(decrementButton).toBeInTheDocument();

        const input = screen.getByRole('spinbutton', { name: /item quantity/i });
        expect(input).toHaveValue(1);

    })
    it("stops decrementing if quantity is <= 1",async ()=>{
        const user = userEvent.setup();
        render(<QuantityBtn />);
        
        const incrementButton = screen.getByRole('button', { name: /increase item quantity/i });
        const decrementButton = screen.getByRole('button', { name: /decrease item quantity/i });
        const input = screen.getByRole('spinbutton', { name: /item quantity/i });

        await user.click(incrementButton);
        await user.click(incrementButton);
        await user.click(incrementButton);
        expect(input.value).toBe('4');

        await user.click(decrementButton);
        await user.click(decrementButton);
        await user.click(decrementButton);
        await user.click(decrementButton);
        expect(input.value).toBe('1');

    })
})