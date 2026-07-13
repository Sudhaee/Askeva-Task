import { FaHeart, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import "./PGCard.css";

function PGCard({ pg }) {

return(

<motion.div
className="pg-card"
whileHover={{y:-8}}
>

<div className="pg-image">

<img src={pg.image} alt={pg.title}/>

<div className="favorite">
<FaHeart/>
</div>

<div className="verified">
Verified
</div>

<div className="rating">
⭐ {pg.rating}
</div>

</div>

<div className="pg-info">

<h3>{pg.title}</h3>

<p className="location">
<FaMapMarkerAlt/>
{pg.location}
</p>

<div className="amenities">

{pg.amenities.map((item,index)=>(
<span key={index}>
{item}
</span>
))}

</div>

<div className="review">

<FaStar color="#f59e0b"/>

<span>

{pg.rating}

({pg.reviews} Reviews)

</span>

</div>

<div className="bottom">

<div>

<h2>

₹{pg.price.toLocaleString()}

</h2>

<p>/month</p>

</div>

<button>

View Details

</button>

</div>

</div>

</motion.div>

)

}

export default PGCard;