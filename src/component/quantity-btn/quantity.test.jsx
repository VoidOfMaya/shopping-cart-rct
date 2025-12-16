import { describe, it, expect, vitest } from "vitest";
import { render, screen } from "@testing-library/react";
import { QuantityBtn } from "./quantity";
import {userEvent} from '@testing-library/user-event'

describe('item quantity selector',()=>{
    it("renders selector component",()=>{
        const handleQuantityMock= vitest.fn();
        render(<QuantityBtn handleQuantity={handleQuantityMock} quantity={1}/>);

        const incrementButton = screen.getByRole('button', { name: /increase item quantity/i });
        expect(incrementButton).toBeInTheDocument();

        const decrementButton = screen.getByRole('button', { name: /decrease item quantity/i });
        expect(decrementButton).toBeInTheDocument();

        const input = screen.getByRole('spinbutton', { name: /item quantity/i });
        expect(input).toHaveValue(1);

    })

})