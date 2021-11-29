import React from 'react';
import { RouteObject, useRoutes } from 'react-router';
import './App.css';
import LogoContainer from './pages/logo';
import Calendar from './pages/calendar';
import LogoTips from './pages/logoTips';

const routeObject: RouteObject[] = [{
  index: true,
  element: <Calendar />
},
{
  path:"logo",
  element: <LogoContainer />, 
  children: [
    {
      path: "tips",
      element: <LogoTips />
    }
  ]
}

]

function App() {
  const routes = useRoutes(routeObject);
  return (
    <div className="App">
      <header className="App-header">
        {routes}
      </header>
    </div>
  );
}

export default App;
