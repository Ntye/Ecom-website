import { Card } from 'react-bootstrap';
import "./style/ProductCard.css"

const ProductCard = ({ title, image, description, price }) => {
  return (
    <div className="product">
      <Card className="product_card">
        {/*<Card.Img variant="top" src={image} className="card_image" />*/}
        <img src={image} className="card_image"/>
        <Card.Body>
          <Card.Text className="product_description">{description}</Card.Text>
          <Card.Title className="product_title">{title}</Card.Title>
          <Card.Text className="product_price ">Price: ${price}</Card.Text>
        </Card.Body>
      </Card>

    </div>

  );
};

export default ProductCard;