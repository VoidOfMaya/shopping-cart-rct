import style from './footer.module.css'
const Footer =()=>{
    return(
        <footer>
            <div className={style.footerContainer}>
                <div className={style.brand}>© 2025 MyShop</div>
                <div className={style.links}>
                    <a href="#">Home</a>
                    <a href="#">Store</a>
                    <a href="#">Cart</a>
                    <a href="#">About</a>
                </div>
                <div className={style.social}>
                    <a href="#">FB</a>
                    <a href="#">TW</a>
                    <a href="#">IG</a>
                </div>
                <div className={style.cartSummary}>
                    3 items — $75 total
                </div>
            </div>
        </footer>
    )
}
export{
    Footer
}