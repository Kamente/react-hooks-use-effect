// import React, { useState, useEffect } from 'react';

// function DogPics() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     fetch("https://dog.ceo/api/breeds/image/random/3")
//       .then((resp) => resp.json())
//       .then((data) => {
//         setImages(data.message);
//       });
//   }, []);

//   return (
//     <div>
//       {images.map((image, index) => (
//         <img src={image} key={index} />
//       ))}
//     </div>
//   );
// }

// export default DogPics;



// import React, { useEffect } from "react";


// function App() {
//   useEffect(() => {
//     console.log("useEffect called");
//   }, []);

//   console.log("Component rendering");

//   return (
//     <div>
//       <input type="text" placeholder="Type Here" />
//       <button style={{ color: "black", backgroundColor: "yellow"}}>Click Me</button>
//     </div>
//   );
// }

// export default App;




import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    console.log('useEffect called');
  }, []);

  console.log('Component Rendering');

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        I have been Clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Type Here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default App;
