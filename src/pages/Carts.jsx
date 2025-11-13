import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Carts.css';

const Carts = ({ carts , setCart }) => {
    return (
        <div className='d-flex justify-content-center align-items-center flex-column'>
                <div className="products-item-container carts-container d-flex flex-wrap justify-content-center">
                    {carts.map((cart) => (
                        <Card style={{ width: '18rem', margin: '10px' }} key={cart.id}>
                            <Card.Img variant='top' src={cart.thumbnailUrl} />
                            <Card.Body className="text-center">
                                <Card.Title>{cart.title}</Card.Title>
                                <Card.Text><b>${cart.price?.toFixed(2)}</b></Card.Text>
                                <Button
                                    variant="outline-danger"
                                    onClick={() => {
                                        setCart(carts.filter((c) => c.id !== cart.id));
                                    }}>
                                    Remove from Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>

            <h4>Items: <span className=' badge bg-danger'>{carts.length} items</span>&nbsp; 
                - Total Price: <span className='badge bg-success'>${carts.reduce((prev, cart) => {return prev + cart.price}, 0).toFixed(2)}</span>
                </h4>
            <Button  variant='warning'>Checkout&nbsp;<i class="bi bi-credit-card-2-back-fill"></i></Button>
        </div>
    );
};

export default Carts;