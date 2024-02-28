console.log("This is script from output page")

const params = new URLSearchParams(window.location.search);

const name = params.get('name');
const age = params.get('age')
const weight = params.get('weight');
const height = params.get('height')

function getBMIResult(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}

// Define your React components here
const OutputPage = () => {

    let bmi = weight / (height * height)

    let bmi_result = getBMIResult(bmi)

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          
          <div className="bg-white p-8 rounded shadow-md my-10 w-3/4">
            <h1 className="text-2xl font-bold mb-4">BMI Result</h1>
      
            <div className="mb-4">
              <h2 className="text-lg font-bold">Your Name:</h2>
              <p>{name}</p>
            </div>
      
            <div className="mb-4">
              <h2 className="text-lg font-bold">Your Age:</h2>
              <p>{age}</p>
            </div>
      
            <div className="mb-4">
              <h2 className="text-lg font-bold">Your Weight:</h2>
              <p>{weight} (kg)</p>
            </div>
      
            <div className="mb-4">
              <h2 className="text-lg font-bold">Your Height:</h2>
              <p>{height} (m)</p>
            </div>
      
            <div className="mb-4">
              <h2 className="text-lg font-bold">Your BMI:</h2>
              <p>{bmi}</p>
            </div>
      
            <div className="mb-4">
              <h2 className="text-lg font-bold">Result:</h2>
              <p>{bmi_result}</p>
            </div>
      
            <a
              href="../index.html"
              className="block text-blue-500 hover:text-blue-700 mt-4"
            >
              Try Again
            </a>
          </div>
        </div>
      );      
};

// Render your React application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<OutputPage />);