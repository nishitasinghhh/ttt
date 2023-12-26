import { Component } from 'react';
import '/Users/nishitasingh/tourandtravel/src/components/DestinationStyles.css'
import imgg1 from '/Users/nishitasingh/tourandtravel/src/img/tajmahal.avif'
import imgg2 from '/Users/nishitasingh/tourandtravel/src/img/taj2.avif'
class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.classname}>
        <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img src={this.props.img11} alt="" />
          <img src={this.props.img22} alt="" />
        </div>
      </div>
        )
    }
}
export default DestinationData