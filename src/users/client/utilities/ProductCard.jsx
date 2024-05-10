import { Card } from 'react-bootstrap';
import "./style/ProductCard.css"

const ProductCard = ({ title, image, description, price }) => {
  return (
    <div className="product">
      <Card className="product_card">
        {/*<Card.Img variant="top" src={image} className="card_image" />*/}
        <img src={image} className="card_image"/>
        <Card.Body>
          {/*<Card.Title className="product_title">{title}</Card.Title>*/}
          <Card.Text className="product_description">{description}</Card.Text>
          <Card.Text className="product_price">Price: ${price}</Card.Text>
        </Card.Body>
      </Card>
      <h5 className="product_title">{title}</h5>
    </div>

  );
};

export default ProductCard;