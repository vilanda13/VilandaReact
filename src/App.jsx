import React from "react";
  class Button extends React.Component {

    render() {
      return (
        <button
            className="h-10 px-6 font-semibold rounded-md bg-orange-600 text-white"
            type="submit"
            >
              Beli Sekarang
            </button>
      );
    }
  }

  function ButtonGreen() {
    return (
      <button
          className="h-10 px-6 font-semibold rounded-md bg-black text-white"
          type="submit"
          >
            Beli Sekarang
          </button>
    );
  }

  function ButtonRed() {
    return (
      <button
          className="h-10 px-6 font-semibold rounded-md bg-green-700 text-white"
          type="submit"
          >
            Beli Sekarang
          </button>
    );
  }
  function App() {
    return (
      <div className="flex justify-center bg-purple-300 min-h-screen items-center">
        <div>
          <Button></Button>
          <Button></Button>
          <ButtonGreen></ButtonGreen>
          <ButtonRed></ButtonRed>
        </div>
      </div>
    );
  }

  export default App;