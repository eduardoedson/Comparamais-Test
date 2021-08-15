import { useState, useEffect } from 'react'
import { save, get } from '../../services/Storage'

const Four = () => {
  const [consultation, setConsultation] = useState('0')
  const handleConsultation = ({ target: { value } }) => setConsultation(value)


  const next = () => {
    save('Consultation', consultation)
    document.getElementById('step-four').style.display = 'none'

    if(consultation === '0') { // Go to step 5
      document.getElementById('actual-step').innerHTML = 5
      document.getElementById('step-five').style.display = 'flex'
      console.log({ page : 'page-five' })
    } 
    
    if (consultation === '1') { // Go to step 6
      document.getElementById('actual-step').innerHTML = 6
      document.getElementById('step-six').style.display = 'flex'
      console.log({ page : 'page-six' })
    }
  }

  const back = () => {
    document.getElementById('actual-step').innerHTML = 3
    document.getElementById('step-three').style.display = 'flex'
    document.getElementById('step-four').style.display = 'none'
    console.log({ page : 'page-three' })
  }

  const initForm = () => {
    setConsultation(get('Consultation'))
  }

  useEffect(() => {
    initForm()
  }, [])

  return (
    <div id="step-four" className="steps">
      <label htmlFor="consultation">Consultation</label>
      <select value={consultation} onChange={handleConsultation} id="consultation">
        <option value="0">I want a free consultation</option>
        <option value="1">I don’t want free consultation</option>
      </select>

      <div className="btn-group">
        <span className="btn" onClick={back}>Back</span>
        <span className="btn" onClick={next}>Next</span>
      </div>
    </div>
  )
}

export default Four;