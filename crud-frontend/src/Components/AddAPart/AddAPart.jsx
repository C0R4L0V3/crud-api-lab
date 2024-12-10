import { useState } from "react";


const AddAPart = () => {
	// state variable for form data
	const [formData, setFormData] = useState({
		itemName: "",
		brand: "",
		img: "",
		cost: "",
		link: "",
	});

	// error state variables
	const [entryError, setEntryError] = useState();
	const [errorMessage, setErrorMessage] = useState();

	// success state variables
	const [formSuccess, setFormSuccess] = useState();
	const [partName, setPartName] = useState();

	// function for API post
	const postAPI = async () => {
		await fetch(`${import.meta.env.VITE_API_URL}/BusParts`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});
	};

	// function for controlled form entry
	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.id]: event.target.value });
	};

	// function for controlled form submit
	const handleSubmit = (event) => {
		// prevent page reload
		event.preventDefault();

		try {
			// adds formData to API via backend
			postAPI();
			// displays success message
			setFormSuccess(true);
			setPartName(formData.itemName);
			// reset form to empty
			setFormData({
				itemName: "",
				brand: "",
				img: "",
				cost: "",
				link: "",
			});
		} catch {
			setEntryError(true);
			setErrorMessage("Form entry error. Please try again!");
		}
	};

	const style = {
		display: "flex",
		flexDirection: "column",
		gap: "5px",
		width: "50%",
		maxWidth: "600px",
	};

	return (
		<>
			<h2>Enter Part Info</h2>
			<form onSubmit={handleSubmit} style={style}>
				{/* name of part (string) */}
				<label htmlFor="itemName">Part</label>
				<input
					type="text"
					name="itemName"
					id="itemName"
					onChange={handleChange}
					value={formData.itemName}
				/>

				{/* brand of part (string) */}
				<label htmlFor="brand">Brand</label>
				<input
					type="text"
					name="brand"
					id="brand"
					onChange={handleChange}
					value={formData.brand}
				/>

				{/* cost of part (number) */}
				<label htmlFor="cost">Cost (Number Only)</label>
				<input
					type="number"
					placeholder="0.00"
					step=".01"
					name="cost"
					id="cost"
					onChange={handleChange}
					value={formData.cost}
				/>

				{/* url/path for image (string) */}
				<label htmlFor="img">Image URL</label>
				<input
					type="text"
					name="img"
					id="img"
					onChange={handleChange}
					value={formData.img}
				/>

				{/* url for amazon link (string) */}
				<label htmlFor="link">Shopping URL</label>
				<input
					type="text"
					name="link"
					id="link"
					onChange={handleChange}
					value={formData.link}
				/>

				{/*   */}
				<button
					type="submit"
					disabled={!Object.values(formData).every(Boolean)}
				>
					Submit
				</button>
			</form>
			{entryError ? <p>{errorMessage}</p> : ""}
			{formSuccess ? <p>{partName} added successfully!</p> : ""}
		</>
	);
};

export default AddAPart;

/* const BusPartsSchema = mongoose.Schema({

    itemName: String,
    brand: String,
    img: String,
    cost: Number,
    link: String,
    hasBought: Boolean, (not part of form)

});*/
