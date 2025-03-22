# fllattercuttie
# Flatacuties

Flatacuties is a simple web application where users can vote for the cutest animal! The application fetches data from a local JSON server and dynamically updates the UI.

## Setup Instructions
### **1. Clone the Repository**
```sh
git clone https://github.com/jbrown37/fllattercuttie.git
cd fllattercuttie
```

### **2. Install JSON Server**
Ensure you have `json-server` installed globally or install it locally:
```sh
npm install -g json-server
```

### **3. Start the Backend Server**
Run the following command to start the local API:
```sh
json-server --watch db.json
```
- The server will run at `http://localhost:3000/`
- Test by visiting: `http://localhost:3000/characters`

### **4. Open the Application**
Open `index.html` in your browser or start a local server:
```sh
open index.html
```

## Features
- Displays a list of animal characters fetched from `db.json`
- Click on a character to view its details
- Add votes for a character
- Reset votes to zero

## API Endpoints
- `GET /characters` - Retrieves all characters
- `GET /characters/:id` - Retrieves a single character by ID
- `PATCH /characters/:id` - Updates the vote count
- `POST /characters` - Adds a new character

## File Structure
```
📂 fllattercuttie
├── 📂 assets          # Images & GIFs
├── 📜 index.html      # Main HTML file
├── 📜 style.css       # Stylesheet
├── 📜 index.js        # JavaScript logic
├── 📜 db.json         # Local JSON Server database
└── 📜 README.md       # Documentation
```

## Contributing
Feel free to fork the repository and submit pull requests!

## License
This project is open-source and available under the MIT License.

