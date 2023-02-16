import React, { Component } from 'react'
export class Todu extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       skill:[]
    }
    this.inputRef=React.createRef()
  }
  removeSkill=i=>{
    const skill = this.state.skill
    skill.splice(i,1)
    this.setState({
      skill:skill
    })
  }
  addSkill=e=>{
    const skill =this.state.skill;
    const value = e.target.value;
    if(e.key==="Enter" && value){
      if(skill.find(skill => skill.toLowerCase()===value.toLowerCase())){
        return alert("Duplicate skill not allowed");
      }
      skill.push(value)
this.setState({
  skill
})
      this.inputRef.current.value=null;
    }
    else if(e.key==="Backspace" && ! value){
      this.removeSkill(skill.length-1)
    }
  }
  render() {
    const {skill} =this.state
    return (
        <>
        <div className="container"><br/>
        <h6>Add your Skills</h6>
        <div className="skill">
          <ul>
            { skill.map((skill, i)=>{
              return(
                <li key={i}> {skill} <button onClick={()=>this.removeSkill(i)}>+</button></li>
              )
            })}
            <li className='input-skill'>
              <input onKeyDown={this.addSkill} type="Text" size={40} ref={this.inputRef} placeholder="Enter your skills"/>
            </li>
          </ul>
        </div>
        </div>
        
        </>
    )
  }
}

export default Todu
