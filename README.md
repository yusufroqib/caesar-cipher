
## Usage

1. Open the application in your web browser.
2. In the text area, enter the text you want to encrypt or decrypt.
3. Enter a key value between 0 and 25 in the "Key" input field. This determines how many positions each letter in the alphabet will be shifted.
4. Select either "Encrypt" or "Decrypt" from the dropdown menu.
5. Click the button to process your action.
6. The result will be displayed in the "Result" section below the form.

## Implementation Details

This application is built using React and implements the Caesar Cipher algorithm without relying on any external encryption libraries. Here's an overview of the key components:

- `App.jsx`: The main component that manages the application state and renders other components.
- `InputForm.jsx`: Handles user input for text, key, and operation type.
- `OutputDisplay.jsx`: Displays the result of the encryption or decryption process.
- `caesarCipher.js`: Contains the core logic for the Caesar Cipher algorithm.

The encryption and decryption functions work by shifting each letter in the input text by the specified key value. Non-alphabetic characters are left unchanged.

## Installation

To install and run this application locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yusufroqib/caesar-cipher.git
   cd caesar-cipher
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

3. **Start the development server:**

   Using npm:

   ```bash
   npm run dev
   ```

## Testing

This project includes basic unit tests for the Caesar Cipher algorithm. To run the tests, use the following command:

Using npm:

```bash
npm test
```

