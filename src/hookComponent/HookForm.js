import React, {useState} from 'react'

function HookForm() {
    const infoObj = {firstName:"", lastName:""}
    const [info, setInfo] = useState(infoObj)
  return (
    <div>
      <form>
        <div>
            <label>First Name</label>
            <input type={'text'} value={info.firstName} onChange={e => setInfo({...info, firstName: e.target.value})}/>
        </div>
        <div>
            <label>Last Name</label>
            <input type={'text'} value={info.lastName} onChange={e => setInfo({...info, lastName: e.target.value})}/>
        </div>
      </form>
      <h1>your first name is - {info.firstName}</h1>
      <h1>your last name is - {info.lastName}</h1>
    </div>
  )
}

export default HookForm
