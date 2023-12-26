import '/Users/nishitasingh/tourandtravel/src/components/HeroStyles.css'
import img1 from '/Users/nishitasingh/tourandtravel/src/img/desert.avif'
function Hero(props){
   return(
    <>
    <div className={props.cName}>
       <img src={props.heroImg} alt="" />
    </div>
    <div className={props.ccName}>
     <h1>{props.title}</h1>
     <p>{props.text}</p> 
     <a href={props.url} className={props.btnClass}>
        {props.btnText}
     </a>
    </div>
    </>
   )
}
export default Hero
