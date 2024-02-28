console.log("This is script from input page")

const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const age = params.get('age')

const { useState } = React;

console.log(name, age)

// Define your React components here
const InputPage = () => {
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)

    const handleChangeWeight = (event) => {
        setWeight(event.target.value);
    }

    const handleChangeHeight = (event) => {
        setHeight(event.target.value);
    }

    function handleSubmit() {
        if (weight <= 0) {
            alert("Weight should bigger than 0")
            return
        }
        if (height <= 0) {
            alert("Height should bigger than 0")
            return
        }
        
        let url = `../Output/page.html?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}&weight=${encodeURIComponent(weight)}&height=${encodeURIComponent(height)}`

        window.location.href = url;
    }

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md">
          <h1 className="text-2xl font-bold mb-4">Enter Your Weight and Height</h1>
    
          <div className="mb-4">
            <label htmlFor="weight" className="block text-gray-700 font-bold mb-2">
              Your Weight (kg):
            </label>
            <input
              id="weight"
              type="number"
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
              value={weight}
              onChange={handleChangeWeight}
            />
          </div>
    
          <div className="mb-4">
            <label htmlFor="height" className="block text-gray-700 font-bold mb-2">
              Your Height (m):
            </label>
            <input
              id="height"
              type="number"
              className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
              value={height}
              onChange={handleChangeHeight}
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
root.render(<InputPage />);