import style from './footer.module.css'
import mailSvg from '/src/assets/email-fast-outline.svg'
import phoneSvg from '/src/assets/phone (1).svg'
const Footer =()=>{
    return(
        <footer>
            <div className={style.compContainer}>
                <div className={style.footerContainer}>
                    <h1 >Contact us</h1>
                    <p >
                        Ushop is a global ecommers platform!.<br/>
                        your experience is very important to us<br/>
                        for all enqueries please contact us</p>
                    <div className={style.brand}>© 2025 UShop</div>

                </div>
                <div>
                    <address>
                        <b>address:</b> 123 Random Road, Random Town,jupiter 12345<br/>
                        <div className={style.footerContact} aria-label='Phone info:'>
                        <img className={style.footerIcon} src={phoneSvg} alt="Phone:" /> +123456789<br/>
                        </div>
                        <div className={style.footerContact} aria-label='Mail info:'>
                        <img className={style.footerIcon} src={mailSvg} alt="Mail:" /> example123@examplemail.com
                        </div>
                    </address>
                </div>
            </div>

        </footer>
    )
}
export{
    Footer
}