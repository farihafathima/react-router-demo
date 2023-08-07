import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import { Home } from './components/Home';
import React from 'react';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { PageNotFound } from './components/PageNotFound';
import { Product } from './components/Product';
import { Featured } from './components/Featured';
import { NewProducts } from './components/NewProducts';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
import { Profile } from './components/Profile';
import { AuthProvider } from './components/auth';
import { RequireAuth } from './components/RequireAuth';
import { Login } from './components/Login';
const LazyAbout=React.lazy(()=>import('./components/About'))

function App() {
  return (
    <>
    <AuthProvider>
    <Navbar/>
    <Routes>
        
        <Route path='*' element={<PageNotFound/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path='about' element={<React.Suspense fallback='Loading....'><LazyAbout/></React.Suspense>}/>
        <Route path='order-summary' element={<OrderSummary/>}/>
        <Route path='products' element={<Product/>}>
          <Route index element={<Featured/>}/>
          <Route path='featured' element={<Featured/>}/>
          <Route path='new' element={<NewProducts/>}/>
          </Route>
          <Route path='users' element={<Users/>}/>
           <Route path='/users/1' element={<UserDetails/>}/>
          <Route path='/users/2' element={<UserDetails/>}/>
          <Route path='/users/3' element={<UserDetails/>}/>
          <Route path='users' element={<Users/>}>
          <Route path=':userId' element={<UserDetails/>}/>
          <Route path='admin' element={<Admin/>}/>
          </Route>
    
         
          <Route path='profile' element={<RequireAuth> <Profile/></RequireAuth>}/>
          <Route path='login' element={<Login/>}/>

    </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
