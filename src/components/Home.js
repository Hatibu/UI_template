import React from 'react'


const Home = () => {
    return (
        <div className="home">  
         <div className="wrapper light">
        <header className="bg-green-600 fixed w-full">
         
          <div className="p-6 flex justify-between items-center">
            <div className="logo ml-20">
              <h3>Fashion</h3>
            </div>

            <div className="links">
              <ul className="flex items-center">
                <li className=""><a href="#">What's New</a></li>
                <li className="ml-8"><a href="#">Brand</a></li>
                <li className="ml-8"><a href="#">Indian Wear</a></li>
                <li className="ml-8"><a href="#" className="inline-block bg-blue-400 py-2 px-6 text-white rounded-full">Sign Up</a></li>
              </ul>
            </div>

            <div className="overlay"></div>

            <div className="hamburger">
              <div className="bar"></div>
            </div>

          </div>
        </header>

        <div className="content-area ml-20 flex items-center">
          <div className="left mt-40">
              <div className="title text-5xl font-semibold mb-6 ">
                <h1>Fashion World</h1>
                <h1>Start Exploring now</h1>
              </div>
              <p className="text text-lg w-96 mb-6  ">
                Fashion is the place where you can find the best of designer 
                clothes for women, accessories, footwear, bags and so on.
              </p>
              <div>
                <a href="#" className="inline-block bg-blue-400 py-2 px-6 text-white rounded-full">PRE Booking</a>
              </div>
            </div>

            <div className="right">
              <img src="./images/clothe.png" alt="Fashion Clothing" className="clothes w-2/3 " />
            </div>

          </div>
        </div>

        <img src="./images/art.png" alt="" className="absolute z-0 w-full opacity-20 -bottom-20 -top-28 " />

        <section>
            <h1>Hello</h1>
        </section>
   
     
      </div>
  
        
    )
}

export default Home
