import { useEffect } from "react"



const PartList = ({ parts, setParts }) => {

    useEffect(() => {
        const fetchParts = async () => {
            try {
                let res = await fetch(`${process.env.REACT_APP_API_URL}/BusParts`); // matches the route defined in express
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
                        <h3>{part.name}</h3>
                        <h5>{part.brand}</h5>
                        <p>Cost: ${part.cost}</p>
                        <p>
                            Bought
                            <input 
                            type='checkbox'  
                            checked={part.hasBought === 'true'}
                            />
                            </p>
            
                    </div>
                ))
            ) : (
                <p> You have not saved parts.</p>
            )}
        </div>
    )
}

export default PartList