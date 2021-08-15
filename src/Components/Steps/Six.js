import { useState, useEffect } from 'react'
import { save, get } from '../../services/Storage'

const Six = () => {
  const [conditions, setConditions] = useState(false)
  const [errorConditions, setErrorConditions] = useState('')

  const [name, setName] = useState('')
  const [errorName, setErrorName] = useState('')
  const handleName = ({ target: { value } }) => setName(value)

  const [email, setEmail] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const handleEmail = ({ target: { value } }) => setEmail(value)

  const [phone, setPhone] = useState('')
  const [errorPhone, setErrorPhone] = useState('')
  const handlePhone = ({ target: { value } }) => setPhone(value)

  const validateForm = () => {
    if(name.length === 0){
      setErrorName('Name is required.')
    } else if(email.length === 0) {
      setErrorEmail('Email Address is required.')
    } else if(phone.length === 0) {
      setErrorPhone('Phone number is required.')
    } else if (!conditions) {
      setErrorConditions('Read and agree the terms before submit.')
    } else {
      setErrorName('')
      setErrorEmail('')
      setErrorPhone('')
      setErrorConditions('')
      saveForm()
    }
  }

  const saveForm = () => {
    save('Name', name)
    save('Email', email)
    save('Phone', phone)

    window.location.href = '/submit';
  }

  const submit = () => {
    validateForm()
  }

  const initForm = () => {
    setName(get('Name') || '')
    setEmail(get('Email') || '')
    setPhone(get('Phone') || '')
  }

  useEffect(() => {
    initForm()
  }, [])

  const back = () => {
    const consultation = parseInt(get('Consultation'))
    document.getElementById('step-six').style.display = 'none'

    if(consultation === 0) { // Back to page 5
      document.getElementById('actual-step').innerHTML = 5
      document.getElementById('step-five').style.display = 'flex'
      console.log({ page : 'page-five' })
    }

    if(consultation === 1) { // Back to page 4
      document.getElementById('actual-step').innerHTML = 4
      document.getElementById('step-four').style.display = 'flex'
      console.log({ page : 'page-four' })
    }
  }

  return (
    <div id="step-six" className="steps">
      <div style={{ alignItems: 'flex-start', paddingBottom: 30 }}>

        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" value={name} onChange={handleName} />
        <span className="error-msg">{errorName}</span><br /><br />

        <label htmlFor="email">Email Address</label>
        <input type="text" id="email" value={email} onChange={handleEmail} />
        <span className="error-msg">{errorEmail}</span><br /><br />

        <label htmlFor="phone">Phone Number</label>
        <input type="text" id="phone" value={phone} onChange={handlePhone} />
        <span className="error-msg">{errorPhone}</span><br /><br />

        <input type="checkbox" id="conditions" name="conditions" onClick={() => setConditions(!conditions)} onChange={() => setConditions(!conditions)} value={conditions} />
        <label htmlFor="conditions">I read and agree to the terms and conditions.</label><br />
        <span className="error-msg">{errorConditions}</span>
        
      </div>

      <div className="btn-group">
        <span className="btn" onClick={back}>Back</span>
        <span className="btn btn-submit" onClick={submit}>Submit</span>
      </div>
    </div>
  )
}

export default Six;