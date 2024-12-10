import { useEffect } from "react"

const PartList = ({ parts, setParts }) => {

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

// need to add patch route!
    const hasBoughtHandler = async (partId) => {

        console.log('trying to update part with Id:', partId);
        
        try {
            //update the item in the backend
            let res = await fetch(`${import.meta.env.VITE_API_URL}/BusParts/${partId}`, { // matches the route defined in express
                method: 'PATCH', //using patch as we are only updating the hasBought field
                headers: {
                    'Content-Type': 'application/json',
                },
                //this makes the body object into a JSON string and changes the hasBought key value to 'true'
                body: JSON.stringify({ hasBought: true }),
            })
            //update the local state
            if (res.ok){ //if back end update response is successful
                setParts((previousParts) =>
                    //map through previous state
                    previousParts.map((part) =>
                        // if the part id === the PartId, make a copy of the array and change hasBought key value to true, otherwise add part
                        part._id === partId ? { ...part, hasBought: true } : part 
                    )
                );
            } else {
                console.log(partId);   
                console.error(`Failed to update part. ${res.statusText}`);
            }
        } catch (error) {
            console.error('Error updating data');
        }
    };

    return (
        <div className="container">
            {parts.length ? (
                parts
                .filter((part) => !part.hasBought) // filter parts that are not bought
                .map((part, idx) => (
                        <div className="card_container" key={idx}>
                            <img src={part.img} alt={part.name} />
                            <h3>{part.itemName}</h3>
                            <h5>{part.brand}</h5>
                            <p>Cost: ${part.cost}</p>
                            <form>
                                <label>
                                    Bought
                                    <input type='checkbox' checked={false} readOnly/>
                                </label>
                                <button 
                                    type="button"
                                    onClick={() => hasBoughtHandler(part._id)}
                                >
                                    Mark as Purchased
                                </button>
                            </form>
                            <a href={part.link}>Purchase</a>
                        </div>
                    ))
            ) : (
                <p> You have not saved parts.</p>
            )}
        </div>
    );

};

export default PartList