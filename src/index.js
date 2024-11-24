import React  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <App />
    

);


reportWebVitals();





// const st = useState(0); //[0 , f]
// // const count = st[0]
// // const setCount = st[1];
// const [count,setCount]=st // st => useState => [0 , f]







// const [value , setValue] = useState(0)
 
// //  بعرف ديستراجتينج من اراى 

// // destructing  array , object

// //array

// const arr = ['orange' , 'apple' , 'blueberry','astroberry' , 'a' , 'b' , 'c'];


//    const [x ,y , ,dd , ...otherArray]  = arr
// const myotherarr = [100 , 200 ,...otherArray]
//    console.log(otherArray)
//    console.log(...otherArray);
//    console.log(otherArray[0], otherArray[1], otherArray[2]);




//     const X = [1 , 2, 3 ,4]
//     console.log(X); // [1 , 2 , 3, 4 ]
//     console.log(...X); // 1 2 3 4


// // object

// const user = {
//   userName:"ahmed" , 
//   email:"ahmed@ahmed.com",
//   phone:"123456789",
//   age:"25"
// }


// const {userName , email , ...other} = user

// console.log(other)


// const ysdf = {
//   ...other
// }

// console.log(ysdf)

// const yyyyyy = {
//   className: "abc",
//   sd: "sd",
// };
