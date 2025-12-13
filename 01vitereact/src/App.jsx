import { useCallback, useEffect, useRef, useState } from "react";

// default export and can be only one default export

export default function App() {
  //  let count=0;
  let [count, setCount] = useState(0);
  function increaseNumber() {
    //   count++;
    //   const para=document.querySelector('p');
    //   para.innerText=`Counters:${count}`
    count = count + 1;
    if (count < 21) {
      setCount(count + 1);
    }
    else return;
  }
  return (

    <div style={{ display: 'flex', flexDirection: 'column', height: '25vh', justifyContent: 'center', alignItems: 'center', }}>
      <p>Counter:{count}</p>
      <button onClick={increaseNumber}>Increment</button>
    </div>

  );

}

// named export
export function NavBar() {
  return (

    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </>




  );
}


export function UserImageFn() {
  const [usersImg, setUsersImg] = useState([]);
  const [name, setName] = useState();

  useEffect(() => {
    async function fetchImage() {
      // const response=await fetch("https://api.github.com/users");
      const response = await fetch(`https://api.github.com/users?per_page=${name}`);
      const usersImgData = await response.json();
      setUsersImg(usersImgData);
    }
    fetchImage();
  }, [name]);

  return (
    <>
      <hr></hr>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>GitHub Users</h1>
      <input type="text" value={name} style={{ display: 'block', margin: '10px auto' }} onChange={(e) => setName(e.target.value)} placeholder="Search Users" />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {
          usersImg.map((user) => (

            <img src={user.avatar_url} alt={user.login} style={{ width: '100px', height: '100px' }} key={user.login} />

          ))
        }
      </div>
    </>
  )
}


export function Clock() {

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [showTime, setShowTime] = useState(true);
  useEffect(() => {
    if (!showTime) {
      return;
    }
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log("Clock Rendered");
    }, 1000);
    return () => {
      clearInterval(intervalId);
    }
  }, [showTime]);

  let timeBtn = document.querySelector('.timeBtn');
  let timeContainer = document.querySelector('.timeContainer');

  function manageTime() {
    if (showTime) {
      setShowTime(false);
      timeBtn.innerText = "Show";
      timeContainer.style.display = "none";
    } else {
      setShowTime(true);
      timeBtn.innerText = "Hide";
      timeContainer.style.display = "block";
    }
  }

  return (
    <>
      <hr></hr>
      <div style={{ display: 'flex', flexDirection: 'column', height: '25vh', justifyContent: 'center', alignItems: 'center', }}  >
        <h1>Current Time</h1>
        <div className="timeContainer" style={{ textAlign: 'center', marginTop: '20px' }}>
          <h2> {time}</h2>
        </div>
        <button className="timeBtn" onClick={manageTime}>Hide</button>
      </div>
    </>
  )
}

export function BackgroundColor() {
  const [bgColor, setBgColor] = useState('white');
  document.querySelector('#root').style.backgroundColor = `${bgColor}`
  return (
    <>

      <div className="container-fluid position-fixed bottom-0 mb-2">
        <div className="container rounded-5 bg-white p-2 ">
          <div className="row row-cols-7 d-flex gap-2 text-center m-2 flex-wrap justify-content-center align-items-center text-white">
            <button className="col bg-primary text-white border-1 rounded-4 " onClick={() => setBgColor("blue")} >Blue</button>
            <button className="col bg-warning text-dark border-1 rounded-4" onClick={() => setBgColor("yellow")}>Yellow</button>
            <button className="col bg-danger text-white border-1 rounded-4" onClick={() => setBgColor("red")}>Red</button>
            <button className="col bg-dark text-white border-1 rounded-4" onClick={() => setBgColor("black")}>Black</button>
            <button className="col text-dark rounded-4 border-1 " onClick={() => setBgColor("white")}>White</button>
            <button className="col bg-success text-white rounded-4 border-1" onClick={() => setBgColor("green")}>Green</button>
          </div>
        </div>
      </div>
    </>
  )
}

export function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [password, setPassword] = useState("");

 const generator = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) {
      chars += "0123456789";
    }
    if (specialChar) {
      chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
    let passwordResult = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length+1);
      passwordResult += chars.charAt(randomIndex);
    }
    setPassword(passwordResult);
  }, [length, number, specialChar]);

  const passwordRef=useRef(null);
  const copyPassword=useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,19);
   window.navigator.clipboard.writeText(password);

  },[password]);
  useEffect(() => { 
    generator();
  }, [length, number, specialChar]);

  return ( 
    <>
    <hr></hr>
      <h2 className="text-center">Password Generator</h2>
      <div className="conainer-fluid">
        <div className="container w-50 border p-4 rounded-4 bg-light px-5">
          <div className="row d-flex flex-row justify-content-center align-items-center gap-3 gap-lg-0">
            <div className="col-12 col-lg-10 p-0">
              <input type="text"  ref={passwordRef} style={{ "height": "35px", "padding-left": "10px" }} value={password} readOnly placeholder="Generated Password" className="w-100 border-1 rounded-2" />
            </div>
            <div className="col-12 col-lg-2 p-0">  <button className="btn btn-primary px-3 py-1 w-100 rounded-2 "onClick={copyPassword}>Copy </button></div>
          </div>
    <div className="d-flex flex-lg-row flex-column gap-4 mt-3 ">

  <div className="d-flex align-items-center gap-2">
    <input type="range" min="4" max="20" value={length}
      onChange={(e) => setLength(e.target.value)} />
    <label>Length: {length}   </label>
  </div>

  <div className="d-flex align-items-center gap-2">
    <input type="checkbox" checked={number}
      onChange={() => setNumber((prev)=>!prev)} />
    <label>Numbers</label>
  </div>

  <div className="d-flex align-items-center gap-2">
    <input type="checkbox" checked={specialChar}
      onChange={() => setSpecialChar((prev)=>!prev)} />
    <label>Characters</label>
  </div>

</div>

        </div>
        </div>
      </>
      )
 }

 export function TodoList() { 
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask(){ 
    if(task==="")
      return;
    setTasks([...tasks,{text:task,done:false}]);
    setTask("")
  }

  function manageRemove(index)
  { 
    setTasks(tasks.filter((_, i) => i !== index));
  }
 function toggleDone(index)
 { 
  const newTasks=[...tasks];
  tasks[index].done=!tasks[index].done;
   setTasks(newTasks);
 }
  
  return( 
    <> 
    <hr></hr>
              <h1 className="text-center">TodoList</h1>
          <div className="conatiner-fluid">
            <div className="container w-50 border rounded-3 bg-light "> 
              <div className="row "> 
                 <ol className="list-group " style={{padding:"10px"}}>
                { 
                 tasks.map((t,index)=>(
                    <li className="list-group-item" key={index}>
                    { 
                      <div className="d-flex flex-row justify-content-between align-items-center"> 
                         <div style={{ textDecoration: t.done ? "line-through" : "none" }}>{index+1}.   {t.text}</div>
                       <div className="d-flex flex-row justify-content-justify-content-evenly align-items-center gap-2 "> 
                         <button className="btn btn-secondary" style={{backgroundColor: t.done?"gray":"black"}}onClick={()=>toggleDone(index)}>{t.done?"Undo":"Done"}</button>
                         <button className="btn btn-danger" onClick={()=>manageRemove(index)}>Remove</button>
                       </div>
                      </div>
                    }
                     </li>
                 ))
                  
                }
              </ol>
              </div>
               <div className="row d-flex flex-row justify-content-center align-items-center gap-2 gap-lg-2 mt-2 p-2">
            <div className="col-12 col-lg-7 p-0">
              <input type="text" style={{ "height": "35px", "padding-left": "10px" }} value={task} onChange={(e)=>{ setTask(e.target.value)}} placeholder="add task" className="w-100 border-1 rounded-2" />
            </div>
            <div className="col-12 col-lg-2 p-0">  <button className="btn btn-primary px-3 py-1 w-100 rounded-2 "onClick={addTask}>Add </button></div>
          </div>
             
            </div>
            
          </div>
    </>
  )
 }