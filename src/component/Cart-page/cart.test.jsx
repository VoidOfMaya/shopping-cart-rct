import { describe, it, expect, vitest, vi } from "vitest";
import { getByRole, render, screen } from "@testing-library/react";
import { Cart } from "./cart";
import {userEvent} from '@testing-library/user-event'

vi.mock('react-router',async()=>{
    const actual =await vi.importActual('react-router');
    return{
        ...actual,
        useOutletContext: vi.fn(),
    };
})
import { useOutletContext } from "react-router";
import { QuantityBtn } from "../quantity-btn/quantity";

const mockCartItems =[
    { id: 1, price: 10, quantity: 2, photo: 'img1' },
    { id: 2, price: 5, quantity: 1, photo: 'img2' },
];

const renderCart =({
  cartItems = [],
  updateCart = vi.fn(),
} = {}) => {
  useOutletContext.mockReturnValue({
    cartItems,
    updateCart,
  });

  const user = userEvent.setup();

  return {
    user,
    updateCart,
    ...render(<Cart />),
  };
};
describe('testing cartpage',()=>{
    it('renders correctly',()=>{
        renderCart({ cartItems: mockCartItems });
        expect(screen.getByText('10$')).toBeInTheDocument();
        expect(screen.getByText('5$')).toBeInTheDocument();
    })
    it('displays cart is empty when empty',()=>{
        renderCart();
        expect(screen.getByText(/cart is empty/i)).toBeInTheDocument();
    })
    it('removes items when delet is clicked', async()=>{
        const {user, updateCart} = renderCart({cartItems: mockCartItems,});
        const deleteBtns = screen.getAllByRole('button',{name: /delet item/i});

        await user.click(deleteBtns[0]);

        expect(updateCart).toHaveBeenCalledTimes(1);
    })
    //mocks quantityBtn
     vi.mock('../quantity-btn/quantity',()=>({
        QuantityBtn:({handleQuantity})=>(
             <button onClick={()=>handleQuantity([])}>change quantity</button>
        ),
    }));

    it('changes quanity when an update is triggered',async ()=>{

        const {user , updateCart}= renderCart({cartItems: mockCartItems});
        const buttons = screen.getAllByRole('button',{ name: /change quantity/i})

        await user.click(buttons[0]);

        expect(updateCart).toHaveBeenCalled();
    })
    it('gives correct total cost ',()=>{
        renderCart({cartItems: mockCartItems});

        expect(
            screen.getByText((text) =>
            text.includes('25.00') && text.toLowerCase().includes('total')
            )
        ).toBeInTheDocument();
    })
})