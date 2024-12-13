import {Component} from 'react'

import ProductsData from '../ProductsData'

import './index.css'

class Products extends Component {
  state = {
    productsList: [],
  }

  componentDidMount() {
    this.getProductsList()
  }

  getProductsList = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      price: eachItem.price,
      category: eachItem.category,
      description: eachItem.description,
      image: eachItem.image,
    }))
    this.setState({productsList: formattedData})
  }

  render() {
    const {productsList} = this.state
    return (
      <div className="products">
        {productsList.map(eachItem => (
          <ProductsData eachItem={eachItem} key={eachItem.id} />
        ))}
      </div>
    )
  }
}
export default Products
