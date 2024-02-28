const { useState } = React;

// Define your React components here
const App = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    // Handler functions to update state variables
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    function handleSubmit() {
        if (name == "") {
            alert("Please input name!")
            return
        }
        if (age <= 0) {
            alert("Age should bigger than 0")
            return
        }
        let url = `./Input/page.html?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}`
        window.location.href = url;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md">
            <h1 className="text-2xl font-bold mb-4">BMI Calculator</h1>
      
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Your Name:
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                value={name}
                onChange={handleNameChange}
              />
            </div>
      
            <div className="mb-4">
              <label htmlFor="age" className="block text-gray-700 font-bold mb-2">
                Your Age:
              </label>
              <input
                id="age"
                type="number"
                className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                value={age}
                onChange={handleAgeChange}
              />
            </div>
      
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      );      
};

// Render your React application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
