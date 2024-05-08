
import './index.css'
import { Card } from './components/Card'
import { Navbar } from './components/Navbar'
import { Herosrction } from './components/Herosrction'

export default function App() {
  return (
    <>
      <div className='relative'>
        <Navbar />
        <Herosrction />
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
            <Card img={"https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"} />
            <Card img={"https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"} />
            <Card img={"https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"} />
          </div>
        </div>
      </div>
    </>
  )
}
