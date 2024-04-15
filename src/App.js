import logo from './logo.svg';
import './App.css';
export default
function App() {
  return (
    <>
    <html>
    <head></head>
  
      <body style={{backgroundcolor:'red'}}>
       <h1 style={{color:'red'}}>Registration form</h1>
       <lable>Student Name</lable>
       <input type="text"></input><br/><br/>
       <lable>Father Name</lable>
       <input type="text"></input><br/><br/>
       <lable>Mother Name</lable>
       <input type="text"></input><br/><br/>
       <lable>DOB</lable>
       <input type="date"></input><br/><br/>
       <lable>Mobile Number</lable>
       <input type="number"></input><br/><br/>
       <lable>category</lable>
       <select>
        <option>General</option>
        <option>OBC</option>
        <option>SC</option>
        <option>ST</option>
       </select><br/><br/>
       <lable>Address</lable>
       <input type="text"></input>
       
      
  
      </body>
      </html>
   
    </>
  )
    
}

