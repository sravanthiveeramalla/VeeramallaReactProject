import {useState,useEffect} from 'react'; 
export default function Login() {
    const [myArray, updateMyArray] = useState([]);
  const handleChange = (e) =>{   
  const newArr = [...myArray,e.target.value];
   updateMyArray(newArr);
   e.preventDefault();
  }
  
  return (
    <div className="df flex-col vh-100">
      <div className="form-container">
        <div className="form-login-wrapper">
          <div className="form-wrap-col2">
        <h2 className="form-heading">Form Page</h2>
            <div className="form-group">
              <label id="email-label">Email Address</label>
              <div className="form-input">
                <input type="text" name="email" onBlur={handleChange} placeholder="Email" />
              </div>
            </div>
            <div className="form-group" >
              <input type="submit" className="btn submit-btn" value="Add Email" />
            </div>
            <div className="form-group"   >
              {myArray.length!=0 && 
        <div className="">
          <h3>Results</h3>
            {myArray.map(el=> <div>{el} </div>)}
        </div>
        }
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
