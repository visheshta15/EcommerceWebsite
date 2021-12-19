import React from 'react'
import {data} from './component/data'
function App() {
  return (
    <div>
    
          {console.log(data.products)}
        <div className="grid-container">
          <header className="row">
              <div>
                  <a className='brand' href="/">amazona</a>
              </div>
              <div>
                  <a href="/cart">Cart</a>
                  <a href="/signin">Sign In</a></div>
          </header>
          <main>
              <div className="row center">
                {data.products.map((product)=>(
                  <div key={product._id} className="card">
                    <a href={`/product/${product._id}`}>
                        <img className='medium'  src={product.image} alt="product" />
                    </a>   
                    <div className="card-body">
                        <a href={`/product/${product._id}`}>
                        <h2>{product.brand}</h2>
                        <p>{product.name}</p>
                        </a>
                        <div className="rating">
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span><i className="far fa-star"></i></span>
                            <span><i className="fa fa-star-half-alt"></i></span>
                            <span><i className="fa fa-star-o"></i></span>
                        </div>
                        <div className="price">{`₹${product.price}`}</div>
                    </div>
                  </div>

                )
                )}
                  
              </div>
          </main>
          <footer className="row center">
            All right reserved
          </footer>
      </div>
    </div>
  )
}

export default App
