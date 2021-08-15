import { useState, useEffect } from 'react'
import { save, get } from '../../services/Storage'


const Five = () => {
  const [contact, setContact] = useState('0')
  const handleContact = ({ target: { value } }) => setContact(value)

  const next = () => {
    save('Contact', contact)
    document.getElementById('actual-step').innerHTML = 6
    document.getElementById('step-five').style.display = 'none'
    document.getElementById('step-six').style.display = 'flex'
    console.log({ page : 'page-six' })
  }
  
  const back = () => {
    document.getElementById('actual-step').innerHTML = 4
    document.getElementById('step-four').style.display = 'flex'
    document.getElementById('step-five').style.display = 'none'
    console.log({ page : 'page-four' })
  }

  const initForm = () => {
    setContact(get('Contact'))
  }

  useEffect(() => {
    initForm()
  }, [])

  return (
    <div id="step-five" className="steps">
      <label htmlFor="contact">Contact</label>
      <select value={contact} onChange={handleContact} id="contact">
        <option value="0">Call me</option>
        <option value="1">Email me</option>
      </select>

      <div className="btn-group">
        <span className="btn" onClick={back}>Back</span>
        <span className="btn" onClick={next}>Next</span>
      </div>
    </div>
  )

}

export default Five;