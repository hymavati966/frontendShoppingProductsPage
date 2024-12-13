import './index.css'

const ProductsData = props => {
  const {eachItem} = props
  const {title, price, image} = eachItem

  return (
    <div className="product-data">
      <div className="product-details-container">
        <img src={image} alt="product" className="image" />
        <h1 className="product-heading">{title}</h1>
        <p className="product-price">RS.{price}/-</p>
      </div>
    </div>
  )
}
export default ProductsData
