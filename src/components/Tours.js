import './Tours.css';
import Card from './Card';

//Functions
function Tours(props){
    let tours=props.tours;    

    //HTML contents
    return(
        <div className='container'>
            <h2 className='title'>Plan With Love</h2>
            <div className='cards'>
                {
                    tours.map((tour)=>{
                        return(
                            <Card {...tour} key={tour.id} removeTour={props.removeTour}></Card>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Tours;