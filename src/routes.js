import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'
import EndForm from './EndForm'

export default function Routes(){
  return (
    <BrowserRouter>
      <Route path='/' exact component={App} />
      <Route path='/Submit' exact component={EndForm} />
    </BrowserRouter>
  );
}