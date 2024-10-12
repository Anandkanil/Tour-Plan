import { useState } from 'react';
import './Card.css';
function Card(props) {
    let id = props.id;
    let name = props.name;
    let info = props.info;
    let image = props.image;
    let price = props.price;
    const [readmore, setReadmore] = useState(false);
    const description = readmore?info:info.substring(0, 200);

    function readmoreHandler() {
        setReadmore(!readmore);
    }



    return (

        <div className='card'>
            <img src={image} className='image' alt='there is an image here'></img>
            <div className='tour-info'>
                <div className='tour-details'>
                    <h4 className='tour-price'>₹{price}</h4>
                    <h4 className='tour-name'>{name}</h4>
                </div>
                <div className='description'>
                    {description}
                    <span className='read-more' onClick={readmoreHandler}>
                        {readmore ? ` Show Less` : ` Read more`}
                    </span>
                </div>
                <div className='btn-container'>
                <button className='btn-red' onClick={()=>props.removeTour(id)}>
                    Not Intersted
                </button>
                </div>
            </div>
        </div>


    );
}
export default Card;