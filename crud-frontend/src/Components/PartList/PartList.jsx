import { useState, useEffect } from "react"

const PartList = ({ parts, setParts }) => {

    const [totalCost, setTotalCost] = useState(0)

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


//add function to add total cost of parts 
    useEffect(() =>{
        //calculate total
        const total = parts
            .filter((part) => !parts.hasBought) // filter only parts that have not been purchased
            .reduce((sum, part) => sum + part.cost, 0) // adds total cost
        setTotalCost(total) //updates state
    }, [parts]) // recall whenevet the parts array change



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

// deleteHandler

const deleteHandler = async (partId) => {

    console.log('trying to delete part with Id:', partId);

    try {
        // delete from backend API
        let res = await fetch(`${import.meta.env.VITE_API_URL}/BusParts/${partId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (res.ok){
            //update the state of the front end
            setParts((previousParts) => 
                //need to use the filter method to find, remove and delete the part with a specifed partID
                previousParts.filter((part) => part._id !== partId)
            );
        } else {
            console.error('Failed to delete part'); 
        }
    } catch (error) {
        console.error('cannot find Item');
        
        
    }

}


    return (
        <div className="container">
            <div>
                {/* toFixed() turns a number into a string and the (2) determines how many numbers are after a decimal */} 
                <h1>Total Cost of Parts: ${totalCost.toFixed(2)}</h1>
            </div>            
            {parts.length ? (
                parts
                .filter((part) => !part.hasBought) // filter parts that are not bought
                .map((part, idx) => (
                        <div className="card_container" key={idx}>
                            <div>
                                <img src={part.img} alt={part.name} />
                                <h3>{part.itemName}</h3>
                                <h5>{part.brand}</h5>
                                <p>Cost: ${part.cost}</p>
                            </div>
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
                            <div>
                                <a href={part.link}>Purchase</a>
                            </div>
                            <div>
                                <button type="button" onClick={() => deleteHandler(part._id)}>Remove Part</button>
                            </div>
                        </div>
                    ))
            ) : (
                <p> You have not saved parts.</p>
            )}
        </div>
    );

};

export default PartList