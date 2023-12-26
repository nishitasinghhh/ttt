import imgg1 from '/Users/nishitasingh/tourandtravel/src/img/tajmahal.avif'
import imgg2 from '/Users/nishitasingh/tourandtravel/src/img/taj2.avif'
import imgg3 from '/Users/nishitasingh/tourandtravel/src/img/jaipur1.avif'
import imgg4 from '/Users/nishitasingh/tourandtravel/src/img/jaipur2.avif'
import '/Users/nishitasingh/tourandtravel/src/components/DestinationStyles.css'
import DestinationData from './DestinationData'
const Destination =()=>{
    return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Journey whispers, adventure calls, soul unfolds.</p>
      <DestinationData
      classname="first-des"
      heading="AGRA"
      text="Agra, a city steeped in the rich tapestry of India's history, stands as a testament to architectural brilliance and cultural grandeur. Nestled on the banks of the Yamuna River, Agra is most renowned for the iconic Taj Mahal, a sublime white marble mausoleum that reflects the eternal love story of Shah Jahan and Mumtaz Mahal. The city's historic significance extends beyond the Taj, encompassing the majestic Agra Fort and Fatehpur Sikri, both UNESCO World Heritage Sites that bear witness to the Mughal dynasty's opulence and power. A stroll through the bustling bazaars reveals a vibrant blend of tradition and modernity, with intricate handicrafts, vivid textiles, and delectable street food, making Agra an immersive experience that captures the essence of India's diverse heritage."
      img11={imgg1}
      img22={imgg2}
      />
      <DestinationData
      classname="first-des-reverse"
      heading="JAIPUR"
      text="Jaipur, often referred to as the Pink City is a captivating gem in the crown of Rajasthan, India. Steeped in history and adorned with architectural splendors, Jaipur is a vibrant tapestry of rich cultural heritage. The city's iconic Hawa Mahal, a palace with intricately designed windows, stands as a testament to its royal past. The grandeur of the Amer Fort, perched atop a hill, echoes the tales of valor and opulence of the Rajput rulers. Jaipur's bustling markets, filled with colorful textiles, handicrafts, and traditional jewelry, offer a sensory delight to visitors. With its regal charm, bustling bazaars, and warm hospitality, Jaipur invites travelers to immerse themselves in a timeless journey through India royal legacy"
      img11={imgg3}
      img22={imgg4}
      />
    </div>
    )
}
export default Destination