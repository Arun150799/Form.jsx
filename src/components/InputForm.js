import { useState, useEffect } from 'react';



const InputForm=()=>{
 
  // const [formValues, setFromValues] = useState({"name":"","email":"","password":""})
  // const [select, setSelect] = useState([])

  const [header,setHeader]= useState("Try it free 7 days then ₹180/mo. thereafter")
  const [active, setActive] = useState(false)

    const [FullName,setFullName]= useState({
      fuser: "",
    });
    const [FullEmail,setFullEmail]= useState({
      Eaddress: "",
    });
    const [FullPassword,setFullPassword]= useState({
      Epassword: "",
    });
  

const handleOnName=(event)=>{
  console.log(event.target.value);
  setFullName(event.target.value);

};
const handleONEmail=(event)=>{
  console.log(event.target.value);
  setFullEmail(event.target.value);

};
const handleOnPassword=(event)=>{
  console.log(event.target.value);
  setFullPassword(event.target.value);
};

const claimTrial= ()=>{
  setHeader("You have successfully subscribed to our plan")
  // setFromValues({"name":"","email":"","password":""})
}
const isFromSubmit =()=>{
  for (const value in FullName) {
      if(FullName[value].length===0){
          return false
      }
  }
  for (const value in FullEmail) {
    if(FullEmail[value].length===0){
        return false
    }
}
for (const value in FullPassword) {
  if(FullPassword[value].length===0){
      return false
  }
}


  return true
}

useEffect(()=>{
  if(FullName.length>0 && isFromSubmit()){
      setActive(true)
  } 
  else if(FullEmail.length>0 && isFromSubmit()){
    setActive(true)
}
else if(FullPassword.length>0 && isFromSubmit()){
  setActive(true)
}

},)
  return (
    <div>
      
      <>
      <div className='form-header'>{header}</div>

      <div className="container2">
        <div className="right1">
        <input type="text" className='Name' name="fuser" value={FullName.fuser} id="formFile1" onChange={handleOnName} placeholder='Enter your full name' size={40}/><br/>

        <input type="email" className='Email' name="Eaddress" value={FullEmail.Eaddress} id="formFile2" onChange={handleONEmail} placeholder='Enter your email address'size={40}/><br/>

        <input type="password" className='password' name='Epassword' value={FullPassword.Epassword} id="formFile3" onChange={handleOnPassword} placeholder='Enter your password' size={40}/>
        </div>

       


{active?<button className='form-button-active'  onClick={claimTrial} >CLAIM YOUR FREE TRIAL</button>:<button className='form-button'>CLAIM YOUR FREE TRIAL</button>}
<p className='term'>By clicking the button you are agreeing to our <span style={{color:"red"}}>Terms and Services</span></p>

      </div>
      </>
    </div>
  )
}

export default InputForm
