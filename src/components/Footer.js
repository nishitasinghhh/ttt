import '/Users/nishitasingh/tourandtravel/src/components/FooterStyles.css'
const Footer=()=>{
    return(
        <div className='footer'>
            <div className='top'>
                <div>
                    <h1>MYSTIC INDIA</h1>
                    <p>Choose your favourite destination</p>
                </div>
                <div>
                    <a href="/">
                    <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="/">
                    <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="/">
                    <i class="fa-brands fa-behance"></i>
                    </a>
                    <a href="/">
                    <i class="fa-brands fa-twitter"></i>
                    </a>
                </div>
            </div>
            <div className='bottom'>
                <div>
                    <h4>PROJECT</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All versions</a>
                </div>
                <div>
                    <h4>COMMUNITY</h4>
                    <a href="/">Github</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>HELP</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact us</a>
                </div>
                <div>
                    <h4>OTHERS</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy of policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}
export default Footer