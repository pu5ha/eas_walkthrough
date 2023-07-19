# eas_walkthrough

A user interface for creating attestations for completing the Crypto Zombies course using Ethereum Attestation Service (EAS).

## Getting Started

### Starting Point

You can start at the commit `01_BOILER_PLATE` to understand the initial boilerplate setup.

### Components

1. **Main Component**: Sets up the structure and styles for the UI, displaying a header, attestation form, and a zombie image at the bottom.
2. **EASAttest Component**: The core of the UI where users can input their name, address, and message to submit their completion attestation for the Crypto Zombies course.

### Functionality

The EASAttest component leverages the Ethereum Attestation Service (EAS) SDK to create attestations on the Ethereum blockchain. The attestations are generated based on user inputs and stored with a unique identifier (UID) for reference.

## Installation

Ensure you have `next`, `@ethereum-attestation-service/eas-sdk`, `ethers`, and `react` installed.

1. Clone this repository:

git clone https://github.com/ChaskinOnChain/eas_walkthrough.git

2. Install the dependencies:

npm install

3. Run the development server:

npm run dev


Visit `http://localhost:3000` to view the application.

## Usage

1. Input your `Name`, `Address`, and a `Message` indicating completion.
2. Click on `Submit Attestation`.
3. Wait for the attestation to be processed.
4. Once done, you will receive a confirmation message displaying the unique identifier (UID) of the submitted attestation.

## License

This project is licensed under the MIT License.
