import '/Users/nishitasingh/tourandtravel/src/components/TripsStyles.css'
import TripData from './TripData'
import Trip1 from '/Users/nishitasingh/tourandtravel/src/img/kerelaaa.avif'
import Trip2 from '/Users/nishitasingh/tourandtravel/src/img/Goa.avif'
import Trip3 from '/Users/nishitasingh/tourandtravel/src/img/ladakh.avif'
function Trip(){
    return(
        <div className='trip'>
          <h1>Recent Trips</h1>
          <p>Some of our recent trip plans</p>
          <div className='tripcard'>
            <TripData
            image={Trip1}
            heading="Trip to Kerala"
            text="Kerala, on India's southwest coast, is a serene haven famed for tranquil backwaters, lush landscapes, and golden beaches. Known as Gods Own Country Kerala beckons with houseboat cruises, rejuvenating Ayurvedic experiences, and vibrant cultural festivals. From misty Munnar hills to sun-kissed Kovalam shores, Kerala is a brief yet enchanting escape into nature's beauty and cultural richness."
            />
            <TripData
            image={Trip2}
            heading="Trip to Goa"
            text="Goa, a coastal haven in India, lures with sun-soaked beaches, Portuguese charm, and a vibrant atmosphere. From lively beach shacks to tranquil shores, it's a captivating blend of relaxation and energy."
            />
            <TripData
            image={Trip3}
            heading="Trip to Ladakh"
            text="Ladakh, a Himalayan desert, enchants with stark beauty—snowy peaks, serene monasteries, and pristine lakes. This high-altitude haven, rich in Buddhist culture, beckons adventurers to trek and raft amid its awe-inspiring landscapes."
            />
          </div>
        </div>
    )
}
export default Trip