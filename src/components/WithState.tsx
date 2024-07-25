import { useState } from "react";

export const WithState = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {counter}
      <br />
      <button
        className="p-2 bg-black text-white rounded-md mt-2"
        onClick={() => setCounter((counter) => counter + 1)}
      >
        Increase
      </button>
    </div>
  );
};
