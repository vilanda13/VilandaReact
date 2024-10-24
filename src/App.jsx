import React from "react";
const Button = (props) => {
  const { children= "...", variant = "bg-black"} = props;
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`} type="submit">
    {children}
      </button>
  );
}
function App() {
  return (
    <div className="flex justify-center bg-cyan-100 min-h-screen items-center">
      <div className="flex gap-x-3">
      <Button variant="bg-green-300">Login</Button>
      <Button variant="bg-blue-400">Logout</Button>
      <Button></Button>
      <Button variant="bg-red-500">Submit</Button>
      </div>
    </div>
  )
}

export default App