import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Clock, NavBar,UserImageFn,BackgroundColor, PasswordGenerator, TodoList} from './App.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <NavBar></NavBar>
    <App />
    <Clock />
    <PasswordGenerator />
    <TodoList />
    <BackgroundColor />
   <UserImageFn />
</>
);