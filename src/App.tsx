import './App.css'
import { Content } from './components/Content'
import { Header } from './components/Header'

export const App = () => {

  return (
    <div className='container'>
      <Header />
      <Content />
    </div>
  )
}

