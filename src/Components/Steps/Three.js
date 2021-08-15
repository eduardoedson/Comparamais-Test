import { useState, useEffect } from 'react'
import { save, get } from '../../services/Storage'

const Three = () => {
  const [status, setStatus] = useState('Employed')

  const handleStatus = ({ target: { value } }) => setStatus(value)

  const next = () => {
    save('Status', status || 'Employed')
    document.getElementById('actual-step').innerHTML = 4
    document.getElementById('step-three').style.display = 'none'
    document.getElementById('step-four').style.display = 'flex'
    console.log({ page : 'page-four' })
  }

  const back = () => {
    document.getElementById('actual-step').innerHTML = 2
    document.getElementById('step-two').style.display = 'flex'
    document.getElementById('step-three').style.display = 'none'
    console.log({ page : 'page-two' })
  }
  
  const initForm = () => {
    setStatus(get('Status'))
  }

  useEffect(() => {
    initForm()
  }, [])


  return (
    <div id="step-three" className="steps">
      <label htmlFor="status">Status</label>
      <select value={status} onChange={handleStatus} id="status">
        <option value="Employed">Employed</option>
        <option value="Self-employed">Self-employed</option>
        <option value="Unemployed">Unemployed</option>
        <option value="Retired">Retired</option>
      </select>

      <div className="btn-group">
        <span className="btn" onClick={back}>Back</span>
        <span className="btn" onClick={next}>Next</span>
      </div>
    </div>
  )
}

export default Three;