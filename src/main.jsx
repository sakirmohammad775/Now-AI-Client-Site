
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Main/Main';
import ContextProvider from './Context/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <ContextProvider>
    <RouterProvider router={router} />

  </ContextProvider>
)
