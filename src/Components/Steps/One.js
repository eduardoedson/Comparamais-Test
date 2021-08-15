import { useState, useEffect } from 'react'
import { PostalCodeMask } from '../../services/Masks'
import { save, get } from '../../services/Storage'

const One = () => {
  const [postalCode, setPostalCode] = useState('')
  const [errorPostalCode, setErrorPostalCode] = useState('')
  const handlePostalCode = ({ target: { value } }) => setPostalCode(PostalCodeMask(value))

  const next = () => {
    if(!postalCode || postalCode.length < 8) {
      setErrorPostalCode('Invalid Postal Code.')
    } else {
      save('PostalCode', postalCode)
      setErrorPostalCode('')

      document.getElementById('actual-step').innerHTML = 2
      document.getElementById('step-one').style.display = 'none'
      document.getElementById('step-two').style.display = 'flex'
      console.log({ page : 'page-two' })
    }
  }

  const initForm = () => {
    setPostalCode(get('PostalCode'))
  }

  useEffect(() => {
    initForm()
    console.log({ page : 'page-one' })
  }, [])

  return (
    <div id="step-one" className="steps">
      <label htmlFor="postal-code">Postal Code</label>
      <input type="text" id="postal-code" value={postalCode} onChange={handlePostalCode} />
      <span className="error-msg">{errorPostalCode}</span>

      <span className="btn" onClick={next}>Next</span>
    </div>
  )
}

export default One;