import { useEffect } from "react"



const PartIndex = ({ parts, setParts }) => {

    useEffect(() => {
        const fetchParts = async () => {
            try {
                let res = await fetch(`${import.meta.env.VITE_API_URL}/BusParts`); // matches the route defined in express
                let JSONdata = await res.json()
                console.log(JSONdata);
                setParts(JSONdata)
    
            } catch (error) {
                console.error('Error fetching data');
            }
        };
        fetchParts()
    }, []); //no dependencies

    return (
        <div className="container">
            {parts.length ? (
                parts.map((part, idx) => (
                    <div className="card_container" key={idx}>
                        <img src={part.img} alt={part.name} />
                        <h3>{part.itemName}</h3>
                        <h5>{part.brand}</h5>
                        <p>Cost: ${part.cost}</p>
                        <p>
                            Bought
                            <input 
                            type='checkbox'  
                            checked={part.hasBought}
                            />
                        </p>
                        <a href={part.link}>Purchase</a>
            
                    </div>
                ))
            ) : (
                <p> You have not saved parts.</p>
            )}
        </div>
    )
}

export default PartIndex