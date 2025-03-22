# 🐾 Flatacuties

Flatacuties is a fun and interactive web application that displays adorable animals. Users can browse, view details, and "like" their favorite animals. The app uses **JSON Server** to simulate a backend.

## 📌 Features

✅ View a list of cute animals  
✅ See detailed information about each animal  
✅ Like animals and increase their like count  
✅ Data persistence using JSON Server  

---

## 🛠️ Installation & Setup

### 1️⃣ Install JSON Server
Ensure you have **Node.js** installed. Then, install JSON Server globally:

```sh
npm install -g json-server
```

### 2️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/flatacuties.git
cd flatacuties
```

### 3️⃣ Start JSON Server
Run the following command to start the backend:

```sh
json-server --watch db.json
```

This will start a local server at `http://localhost:3000`.

### 4️⃣ Open the App
Simply open `index.html` in your browser.

---

## 📂 Project Structure

```
flatacuties/
│── index.html        # Main HTML file
│── style.css         # CSS for styling
│── script.js         # JavaScript functionality
│── db.json           # JSON Server database
└── README.md         # Project documentation
```

---

## 🚀 API Endpoints

- **Get all animals**: `GET /animals`
- **Get a single animal**: `GET /animals/:id`
- **Update likes**: `PATCH /animals/:id`

### Example `db.json`:
```json
{
  "animals": [
    { "id": 1, "name": "Fluffy", "image": "fluffy.jpg", "likes": 5 },
    { "id": 2, "name": "Whiskers", "image": "whiskers.jpg", "likes": 10 }
  ]
}
```

---

## 🏆 How to Contribute

1. **Fork** this repository  
2. **Clone** your forked repo:  
   ```sh
   git clone https://github.com/your-username/flatacuties.git
   ```
3. **Create a new branch** for your changes:  
   ```sh
   git checkout -b feature-branch
   ```
4. **Make your changes and commit**:  
   ```sh
   git commit -m "Added a new feature"
   ```
5. **Push to your branch**:  
   ```sh
   git push origin feature-branch
   ```
6. **Submit a Pull Request** 🎉

---

## 🐝 License

This project is open-source and free to use.

---

🚀 Enjoy using **Flatacuties**! Let us know if you have any issues. 🐶🐱🎉

