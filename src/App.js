import './styles/App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [text , setText] = useState('')
  const[radiobtn , setradioBtn] = useState()
  const [permissions,setPermissions] = useState([]);


const handleCheck = (event) => {
  var permissions_array = [...permissions];
  if (event.target.checked) {
    permissions_array = [...permissions,event.target.value];
  } else {
    permissions_array.splice(permissions.indexOf(event.target.value), 1);
  }
  setPermissions(permissions_array);

};

  
  return (
    <div className="container">
      <h1>React Controlled Forms</h1>
      <div className="row">
        <div className="col md-6">
          <h3>Controlled Form</h3>
          <form>
            <label htmlFor="text" className="form-label">
              Example textarea
            </label>
            <textarea  onChange = {(e)=>{setText(e.target.value)}}className="form-control" id="text" rows="3" name="text"></textarea>
            <label className="form-check-label" htmlFor="radio">
              Default radio
            </label>
            <div className="form-check">
              <input  onClick ={(e)=>{setradioBtn(1)}} className="form-check-input" type="radio" value="1" id="radio1" name="radio"  />
              <label className="form-check-label" htmlFor="radio1">
                Radio 1
              </label>
            </div>
            <div className="form-check">
              <input onClick ={(e)=>{setradioBtn(2)}} className="form-check-input" type="radio" value="2" id="radio2" name="radio"  />
              <label className="form-check-label" htmlFor="radio2">
                Radio 2
              </label>
            </div>
            <div className="form-check">
              <input  onClick ={(e)=>{setradioBtn(3)}} className="form-check-input" type="radio" value="3" id="radio3" name="radio"  />
              <label className="form-check-label" htmlFor="radio3">
                Radio 3
              </label>
            </div>
            <label className="form-check-label" htmlFor="checkbox">
              Default checkbox
            </label>
            <div className="form-check">
              <input onChange={handleCheck} className="form-check-input" type="checkbox" value="1" id="checkbox1" name="checkbox"  />
              <label className="form-check-label" htmlFor="checkbox1">
                Checkbox 1
              </label>
            </div>
            <div className="form-check">
              <input onChange={handleCheck} className="form-check-input" type="checkbox" value="2" id="checkbox2" name="checkbox"  />
              <label className="form-check-label" htmlFor="checkbox2">
                Checkbox 2
              </label>
            </div>
            <div className="form-check">
              <input onChange={handleCheck} className="form-check-input" type="checkbox" value="3" id="checkbox3" name="checkbox" />
              <label className="form-check-label" htmlFor="checkbox3">
                Checkbox 3
              </label>
            </div>
          </form>
        </div>
        <div className="col md-6">
          <h3>Form Output</h3>
          <p className="text">
            <span className="title">Text :{text} </span>
          </p>
          <p className="radio">
            <span className="title">Radio :{radiobtn} </span>
          </p>
          <p className="checkbox">
            <span className="title">Checkbox : </span> {`[ `}
            {permissions}
            {`]`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
