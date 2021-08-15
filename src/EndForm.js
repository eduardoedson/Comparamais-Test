import { useState, useEffect } from 'react'
import { get } from './services/Storage'

const EndForm = () => {
  const [postalCode, setPostalCode] = useState('')
  const [monetary, setMonetary] = useState('')
  const [status, setStatus] = useState('')
  const [consultation, setConsultation] = useState()
  const [contact, setContact] = useState()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const getDados = () => {
    setPostalCode(get('PostalCode'))
    setMonetary(get('Monetary'))
    setStatus(get('Status'))
    setConsultation(get('Consultation'))
    setContact(get('Contact'))
    setName(get('Name'))
    setEmail(get('Email'))
    setPhone(get('Phone'))
  }

  useEffect(() => {
    getDados()
  }, [])

  return (
    <div id="end-form">
      <table>
        <tr>
          <th>Postal Code</th>
          <td>{postalCode}</td>
        </tr>

        <tr>
          <th>Monetary</th>
          <td>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(monetary)}</td>
        </tr>

        <tr>
          <th>Status</th>
          <td>{status}</td>
        </tr>

        <tr>
          <th>Consultation</th>
          <td>{consultation === '0' ? 'Want' : 'Don\'t want'}</td>
        </tr>

        {consultation === '0' ? 
          <tr>
            <th>Contact</th>
            <td>{contact === '0' ? 'Phone' : 'Email'}</td>
          </tr>
        : null}

        <tr>
          <th>Name</th>
          <td>{name}</td>
        </tr>

        <tr>
          <th>Email</th>
          <td>{email}</td>
        </tr>

        <tr>
          <th>Phone</th>
          <td>{phone}</td>
        </tr>
      </table>
      <span className="btn btn-edit" onClick={() => window.location.href = '/'}>Edit</span>
    </div>
  )
}

export default EndForm