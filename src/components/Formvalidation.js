import {useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Formvalidation() {
    const nameInput=useRef(null)
    const emailInput=useRef(null)
    const ageInput=useRef(null)
    const passInput=useRef(null)
    const CpassInput=useRef(null)
    const data=useSelector((state)=> state.addData);
    const dispatch=useDispatch();
    console.log(data)

    return (
        <div className="container">
        <form className="col-md-5 cen">
            <h2> Register Here </h2>
            
            <div class="form-group row">
                <label  class="col-sm-3 col-form-label">Name</label>
                <div class="col-sm-9">
                <input type="text" placeholder="Enter Name" ref={nameInput}  class="form-control"/>
                </div>
            </div>
            <div class="form-group row">
                <label  class="col-sm-3 col-form-label">Email</label>
                <div class="col-sm-9">
                <input type="text" placeholder="email" ref={emailInput}   class="form-control"/>
                </div>
            </div>
            <div class="form-group row">
                <label  class="col-sm-3 col-form-label">Age</label>
                <div class="col-sm-9">
                <input type="number" placeholder="age" ref={ageInput}  class="form-control"/>
                </div>
            </div>
            <div class="form-group row">
                <label  class="col-sm-3 col-form-label">Pass</label>
                <div class="col-sm-9">
                <input placeholder="password" type="password" ref={passInput}   class="form-control"/>
                </div>
            </div>
            <div class="form-group row">
                <label  class="col-sm-3 col-form-label">C pass</label>
                <div class="col-sm-9">
                <input placeholder="Password" type="Password" ref={CpassInput} class="form-control"/>
                </div>
            </div>
            
            <button onClick={()=>{dispatch({type:"add",payload:{name:nameInput.current.value,email:emailInput.current.value,
            age:ageInput.current.value,pass:passInput.current.value,cPass:CpassInput.current.value}})}} class="btn btn-primary">Sign Up</button>
           
            </form>
            <div>
                {data && data.formData.map(post =>
                    <div>
                        <ul>
                            <li>Name : {post.name}</li>
                            <li>Email : {post.email}</li>
                            <li>Age : {post.age}</li>
                        </ul>
                    </div>)}
            </div>
        </div>
    )
}

export default Formvalidation
