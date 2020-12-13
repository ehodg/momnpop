import React from 'react'
import "./Home.css";
import Product from "./Product";

function home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZVqA2Ez-UNMJPzcAegP0DnoP5m_FzcZkowg&usqp=CAU"
                alt=""
                />                
                <div className="home__title">
                    <h1>Welcome to our MoM & PoP Shop</h1>
                    <h3>Your New One Stop Spot</h3>
                </div>
                <div className="home__row">
                    <Product 
                    id='#91823123'
                    title='Floor Clock'
                    price={199.99}
                    image='https://ak1.ostkcdn.com/images/products/is/images/direct/b50237e1b407f0cd051f8df95dd0c927b4192268/Howard-Miller-Classic-Stewart-Anni-Grandfather-Clock-Style-Standing-Clock-with-Pendulum-and-Movements%2C-Reloj-de-Pendulo-de-Piso.jpg'
                    rating={5}
                    />
                    <Product
                    id='#79133453'
                    title='12 Piece set of Drinking Glasses'
                    price={21}
                    rating={3}
                    image='https://images-na.ssl-images-amazon.com/images/I/71k8RyrPb-L._AC_SL1500_.jpg'
                    />
                </div>
                <div className="home__row">
                    <Product 
                    id='#90053123'
                    title='Lawn Chairs: Multiple colors and styles'
                    price={14.99}
                    rating={2}
                    image='https://i5.walmartimages.com/asr/aa96f3a9-fa2b-4ce2-9ef5-6c8ef008ae01_1.e1c195ba762f6dc7c1c51ddce857fcbe.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'
                    />
                    <Product 
                    id='#82234450'
                    title='Hundreds of Books ranging in Fictional and Non-Fictional'
                    price={9.99}
                    rating={4}
                    image='https://cdn.asla.org/uploadedImages/CMS/Shop/Bookstore/books.jpg'
                    />
                    <Product 
                    id='#91676123'
                    title='Assorted clothing, from warm to cold weather and rustic to trending'
                    price={25.50}
                    rating={5}
                    image='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-108138782-1568282449.jpg?crop=0.543xw:0.724xh;0.308xw,0.00652xh&resize=640:*'
                    />
                </div>
                <div className="home__row">
                    <Product 
                    id='#23123898'
                    title='Tons of new and old electronics that have all been tested and work'
                    price={500}
                    rating={4}
                    image='https://www.online-tech-tips.com/wp-content/uploads/2019/12/electronic-gadgets.jpeg'
                    />
                </div>
            </div>
        </div>
    )
}

export default home
