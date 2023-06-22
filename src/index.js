import reactDOM from 'react-dom/client'
import './index.css'

let msg="";
let msgStyle ={};
const currHrs = new Date().getHours();
if(currHrs >= 16){
  msg = "Good Evening"
  msgStyle.color = "green"
}
else if(currHrs <16 && currHrs>=12){
  msg = "Good Afternoon"
  msgStyle.color = "red"
}
else{
  msg = "Good Morning"
  msgStyle.color = "blue"
}


const root = reactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className="container">
        <h1>Hello Sir,
          <span className="greet" style={msgStyle}>
          {` ${msg}`}
          </span>
        </h1>
    </div>
  </>
)


// reactDOM.render(
//   <>
//     <div className="container">
//         <h1>Hello Sir,
//           <span className="greet" style={{color:msgStyle}}>
//           {` ${msg}`}
//           </span>
//         </h1>
//     </div>
//   </>,
//   document.getElementById('root')
// )