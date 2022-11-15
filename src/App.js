import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router';
import { router } from './Routes/Routes/Routes';
import 'react-day-picker/dist/style.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'





function App() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position='top-center' />
    </div>
  );
}

export default App;
