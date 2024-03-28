import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



function Productlist({thumbnail,title,description,price,brand,images}){
    function handleclick({images}){
        return(
            <div>
                <img src={images}/> 
            </div>
            
        )
    }
    return(
        <div>
            <div>
                <img src={thumbnail} />
                <h1>{title}</h1>
                <h2>${price}</h2>
                <p>{brand}</p>
            </div>
        </div>
    )
}

export default Productlist;