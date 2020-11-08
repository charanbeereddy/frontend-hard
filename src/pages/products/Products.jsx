// Functional Component implementation
import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, CardImg, CardSubtitle, CardTitle, Col, Container, Row } from "reactstrap";
import { logout } from "../../Context";
import './Products.scss';

const Products = () => {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = () => {
        fetch('https://meijerdigital.azurewebsites.net/api/interview')
            .then(response => response.json())
            .then(data => setProductList(data));
    }
    const regUsers = JSON.parse(localStorage.getItem('regUsers'));
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const userDetails = regUsers && regUsers.length ? regUsers.find(itm => itm.email === currentUser.email && itm.password === currentUser.password) : { firstName: '', lastName: '' };

    return (
        <Card>
            <CardHeader style={{ textAlign: 'right' }}>Welcome, {userDetails.lastName}, {userDetails.firstName}!, <Button onClick={logout}>Logout</Button></CardHeader>
            <CardBody>
                <Container>
                    <Row>
                        {productList && productList.length > 0 && productList.map(prod => {
                            return (<Col md={4}>
                                <Card>
                                    <CardImg top width="100%" src={prod.image} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle tag="h5">{prod.name}</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Price: {prod.price}</CardSubtitle>
                                        <Button>Add To Cart</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            )
                        })
                        }
                    </Row>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Products;