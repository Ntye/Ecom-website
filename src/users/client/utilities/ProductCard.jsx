// import { Card } from 'react-bootstrap';
import "./style/ProductCard.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ProductCard = ({ title, image, description, price }) => {
  return (
    <div className="product">
      <Card sx={{ maxWidth: 300 }} className="product_card">
        <CardActionArea>
          <CardMedia
            component="img"
            className="card_image"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" className="product_title">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="product_description">
              {description}
            </Typography>
            <Typography variant="body2"  className="product_price">
              {price} FCFA
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>

  );
};

export default ProductCard;