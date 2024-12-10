import { useState } from "react";

const AddAPart = () => {
	// state variable for form data
	const [formData, setFormData] = useState();

	// function for controlled form entry
	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.id]: event.target.value });
	};

	// function for controlled form submit
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const style = { display: "flex", flexDirection: "column" };

	return (
		<form onSubmit={handleSubmit} style={style}>
			{/* name of part (string) */}
			<label htmlFor="itemName"></label>
			<input
				type="text"
				name="itemName"
				id="itemName"
				onChange={handleChange}
				value={formData}
			/>

			{/* brand of part (string) */}
			<label htmlFor="brand"></label>
			<input
				type="text"
				name="brand"
				id="brand"
				onChange={handleChange}
				value={formData}
			/>

			{/* url/path for image (string) */}
			<label htmlFor="img"></label>
			<input
				type="text"
				name="img"
				id="img"
				onChange={handleChange}
				value={formData}
			/>

			{/* cost of part (number) */}
			<label htmlFor="cost"></label>
			<input
				type="text"
				name="cost"
				id="cost"
				onChange={handleChange}
				value={formData}
			/>

			{/* url for amazon link (string) */}
			<label htmlFor="link"></label>
			<input
				type="text"
				name="link"
				id="link"
				onChange={handleChange}
				value={formData}
			/>

			{/* bought or not checkbox (boolean) */}
			<label htmlFor="hasBought"></label>
			<input
				type="checkbox"
				name="hasBought"
				id="hasBought"
				onChange={handleChange}
				value={formData}
			/>
			<input type="submit" />
		</form>
	);
};

export default AddAPart;

/* const BusPartsSchema = mongoose.Schema({

    itemName: String,
    brand: String,
    img: String,
    cost: Number,
    link: String,
    hasBought: Boolean,

});*/
