import '/Users/nishitasingh/tourandtravel/src/components/ContactFormStyles.css'
function ContactForm(){
    return(
        <div className='form-container'>
            <h1>Send a message to us!</h1>
            <form action="">
                <input type="text"  placeholder='Name'/>
                <input type="email"  placeholder='email'/>
                <input type="text"  placeholder='Subject'/>
                <textarea name="" id=""  rows="4" placeholder='message'></textarea>
                <button>Send message</button>
            </form>
        </div>
    )
}
export default ContactForm