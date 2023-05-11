import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './shared/CoffeeCard';

function App() {
        const coffees = useLoaderData();        

  return (
    <>
      <section className='w-10/12 mx-auto py-16'>
        
      <h1 className='text-6xl text-center font-bold my-8'>Our popular products</h1>

        {/* products*/} 
        <div className='grid md:grid-cols-2 gap-6'>
         {coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}/>)} 
        </div>


      </section>
        
    </>
  )
}

export default App
