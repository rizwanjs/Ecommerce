import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


function App() {

  return (
  <div className='min-h-screen bg-gray-100'>
  <Navbar />

  <main className='flex min-h-[81vh] flex-col items-center justify-center px-6 text-center'>
    <h1 className='text-4xl font-bold text-gray-900'>Welcome To My Store</h1>
    <p className='mt-4 text-lg text-gray-600'>Your Shopping Starts Here</p>
  </main>

  <Footer />
  
  </div>
  )
}

export default App