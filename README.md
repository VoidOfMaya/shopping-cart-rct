# React Shopping cart
    project source: https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart

## Project requirments:-
- project has three pages
    * Homepage
        - page content up to the developer

    * Shop page
        - product card containing {photo,name,price, amazon style quantity field= +(input)-, addToCartBtn}

    * cart bag/checkout
        - display cart items + item quantity
        - enable quantity increas and decrease
        - remove item from cart functionality
        - !IMPORTANT! no checkout/payment system required

- fixed top navigation bar
    * if cart has 1 item or more display quantity of cart items in a small icon next to the link/icon in the nav bar
      this shoud update in real time

- fetch items from fakestoreAPi

- handle proper property typing

- implement thorough testing (refer back to course for more info)

- style application

- DEPLOY on netlify


## React skelton project Template - info
  * note on css: this project is intended for using modular js for scoping.
### included packages:-
- react basic project with vite: npm  create vite@latest <peoject-name> -- --template react
- component folder
- testing with: vitest
    * follow this setup guid: https://www.robinwieruch.de/vitest-react-testing-library/
    * after that in bash: npm install @testing-library/user-event --save-dev

- proptyping with: prop-type (react v^19 do not use defaultProp instead declare in prop of component)
    * in bash: npm install --save prop-types

- basic router setup: react-router
    * in bash: npm install react-router