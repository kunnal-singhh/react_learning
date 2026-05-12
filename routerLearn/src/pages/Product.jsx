import {Link, Outlet} from 'react-router-dom'
export default function Product(){ 
    return( 
        <> 
        <div className='d-flex justify-content-center align-items-center gap-3 '> 
          <Link className='text-white text-decoration-none' to='/product/men'>Men</Link>
          <Link className='text-white text-decoration-none' to='/product/women'>Women</Link>
        </div>
         <div className='d-flex flex-column justify-content-center align-items-center' style={{height:'50vh'}}> 
           <h1>Product Page</h1>
         </div>
          <Outlet />
        </>
    )
}