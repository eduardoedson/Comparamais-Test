import { useState, useEffect } from 'react'
import { save, get } from '../../services/Storage'

const Two = () => {
  const [monetary, setMonetary] = useState(10000)
  const handleMonetary = ({ target: { value } }) => setMonetary(value)

  const next = () => {
    save('Monetary', String(monetary))
    document.getElementById('actual-step').innerHTML = 3
    document.getElementById('step-two').style.display = 'none'
    document.getElementById('step-three').style.display = 'flex'
    console.log({ page : 'page-three' })
  }

  const back = () => {
    document.getElementById('actual-step').innerHTML = 1
    document.getElementById('step-one').style.display = 'flex'
    document.getElementById('step-two').style.display = 'none'
    console.log({ page : 'page-one' })
  }

  const initForm = () => {
    setMonetary(get('Monetary') || 10000)
  }

  useEffect(() => {
    initForm()
  }, [])

  return (
    <div id="step-two" className="steps">
      <span className="monetaryValue">{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(monetary)}</span>
      <input type="range" min="10000" max="50000" step="500" value={monetary} onChange={handleMonetary} />

      <div className="btn-group">
        <span className="btn" onClick={back}>Back</span>
        <span className="btn" onClick={next}>Next</span>
      </div>
    </div>
  )
}

export default Two;