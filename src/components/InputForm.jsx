import React, { useEffect, useState } from "react";

const InputForm = ({ onSubmit }) => {
	const [text, setText] = useState("");
	const [key, setKey] = useState(0);
	const [mode, setMode] = useState("encrypt");
    const [isValid, setIsValid] = useState(false)

    useEffect(() => {
        const valid = text.length > 0 && key >= 0 && key <= 25;
        setIsValid(valid);
    }, [text, key])
    

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(text, parseInt(key), mode);
	};

	return (
		<form onSubmit={handleSubmit}>

			<label htmlFor="input-text"> Text:</label>
			<textarea
				value={text}
				name="input-text"
				onChange={(e) => setText(e.target.value)}
				placeholder="Enter text"
				required
			/>

			<label htmlFor="input-key">Key:</label>
			<input
				type="number"
				name="input-key"
				value={key}
				onChange={(e) => setKey(e.target.value)}
				placeholder="Enter key (0-25)"
				min="0"
				max="25"
				required
			/>
			<label htmlFor="operation">Operation:</label>
			<select
				name="operation"
				value={mode}
				onChange={(e) => setMode(e.target.value)}
			>
				<option value="encrypt">Encrypt</option>
				<option value="decrypt">Decrypt</option>
			</select>
			<button disabled={!isValid} type="submit">{mode.toUpperCase()}</button>
		</form>
	);
};

export default InputForm;
