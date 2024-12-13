import Header from '../Header'
import Products from '../Products'
import './index.css'

const Home = () => (
  <div className="home">
    <Header />
    <div className="discover-our-products-container">
      <h2 className="discover-our-products-heading">DISCOVER OUR PRODUCTS</h2>
      <p className="discover-our-products-description">
        Lorem ipsum dolor sit amet consectetur.Amet est posuere rhoncus
        scelerisque.Dolor integer scelerisque nibh amet mi ut elementu dolor.
      </p>
    </div>
    <div>
      <Products />
    </div>
  </div>
)

export default Home
