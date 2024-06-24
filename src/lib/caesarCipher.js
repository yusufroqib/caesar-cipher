export const encrypt = (plaintext, key) => {
	return shiftText(plaintext, key);
};

export const decrypt = (ciphertext, key) => {
	return shiftText(ciphertext, -key);
};

const shiftText = (text, shift) => {
	return text
		.split("")
		.map((char) => {
			if (char.match(/[a-z]/i)) {
				const code = char.charCodeAt(0);
				const isUpperCase = code >= 65 && code <= 90;
				const limit = isUpperCase ? 90 : 122;

				let shiftedCode = code + shift;

				if (shiftedCode > limit) {
					shiftedCode -= 26;
				} else if (shiftedCode < (isUpperCase ? 65 : 97)) {
					shiftedCode += 26;
				}

				return String.fromCharCode(shiftedCode);
			}
			return char;
		})
		.join("");
};
