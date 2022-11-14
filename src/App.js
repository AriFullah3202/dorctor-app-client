import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router';
import { router } from './Routes/Routes/Routes';
import 'react-day-picker/dist/style.css';




function App() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
