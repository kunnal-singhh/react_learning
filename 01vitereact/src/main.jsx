import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Clock, NavBar,UserImageFn,BackgroundColor, PasswordGenerator, TodoList, ScrollToTop, CurrencyConverter} from './App.jsx';
import App from './App.jsx'
import InputBox from './components/InputBox.jsx';

createRoot(document.getElementById('root')).render(
  <>
  <NavBar></NavBar>
   <CurrencyConverter />
    <PasswordGenerator />
    <App />
    
    <Clock />
   
    <TodoList />
    <BackgroundColor />
    <ScrollToTop />
   <UserImageFn />
</>
);