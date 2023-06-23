import './index.css'

function App(){
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

    return(
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
}

export default App;

