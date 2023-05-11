import App from "../App";
import {createBrowserRouter} from 'react-router-dom'
import AddCoffee from "../components/AddCoffee";
import UpdataCoffee from "../components/UpdataCoffee";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      loader: ()=> fetch('https://lxes28-8080.csb.app/coffees')
    },
    {
      path: '/add-coffee',
      element: <AddCoffee/> 
    },
    {
      path: '/update/:id',
      element:<UpdataCoffee/>,
      loader: ({params})=> fetch(`https://lxes28-8080.csb.app/coffee/${params.id}`)
    }

  ],
);



export default router;
