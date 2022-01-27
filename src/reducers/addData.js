import { useStore } from 'react-redux'

const regForName=RegExp(/^[a-zA-Z]{3,100}$/);
const regForEmail=RegExp(/^[^\s@]+@[^\s]+\.[^\s@]+$/);
const regForAge=RegExp(/^\S[0-9]{0,1}$/);
const regForPass=RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);
const initialState={formData:[]}

export const addData = (state=initialState,action)=>{
    console.log(state)
    switch(action.type){
        case "add" :
            if(action.payload.name=='' || action.payload.email=='' || action.payload.age=='' || action.payload.pass=='' || action.payload.cPass==''){
                alert("please fill all the feild")
            }
            else if(!regForName.test(action.payload.name)){
                alert("your name should contain alphabet only")
            }
            else if(!regForEmail.test(action.payload.email)){
                alert("Please enter proper email")
            }
            else if(!regForAge.test(action.payload.age)){
                alert("It should conatin positive number")
            }
            else if(!regForPass.test(action.payload.pass)){
                alert("Password shpuld conatin alphabet ")
            }
            else if(action.payload.pass!=action.payload.cPass){
                alert("password and confirm password should match")
            }
            else{
                // alert(" ${action.payload.name}");
                return {formData:[...state.formData,action.payload]}
            }
        default: return state
    }
}