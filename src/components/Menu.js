import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const menuItems = [
  { name: "Pizza", price: "₹250", image: "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg" },
  { name: "Burger", price: "₹180", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" },
  { name: "Pasta", price: "₹220", image: "https://tse1.mm.bing.net/th/id/OIP.-Ei0NCm3I0gLSDUA16sj4AHaE8?w=6589&h=4395&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Nodles", price: "₹300", image: "https://www.cookerru.com/wp-content/uploads/2022/09/pan-fried-noodles-main-preview.jpg" },
  { name: "French Fries", price: "₹260", image: "https://static.vecteezy.com/system/resources/previews/027/536/411/non_2x/delicious-french-fries-on-a-white-background-photo.jpg" },
  { name: "Potato Wedges", price: "₹450", image: "https://charisseyu.com/wp-content/uploads/2021/06/IMG_8251-720x722.jpg" },
   { name: "dosa", price: "₹160", image: "https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-an-indian-dosa-is-sitting-on-a-plate-image_2892702.jpg" },
    { name: "Idlli", price: "₹120", image: "https://www.thestatesman.com/wp-content/uploads/2019/04/idli.jpg" },
     { name: "Onion uttapam", price: "₹180", image: "https://hungryforever.net/wp-content/uploads/2016/10/bread_uttapam.jpg" },
     { name: "Poha", price: "₹250", image: "https://www.sandyathome.com/wp-content/uploads/2016/08/file-1-15-600x462.jpeg" },
     { name: "upma", price: "₹250", image: "https://d36v5spmfzyapc.cloudfront.net/wp-content/uploads/2021/02/Veg-Upma-2.jpg" },
     { name: "Misal Pav", price: "₹250", image: "https://th.bing.com/th/id/R.1223f05b2ba22d72a2270f817d9f0982?rik=dEH2Ywqvxjtr2A&riu=http%3a%2f%2fhebbarskitchen.com%2fwp-content%2fuploads%2fmainPhotos%2fmisal-pav-recipe-how-to-make-maharashtrian-misal-pav-recipe-2.jpeg&ehk=w8HMzyps4TCwu7jrxSI7WOZ9TiGg%2bjxdLxfIz5QIFyc%3d&risl=&pid=ImgRaw&r=0" },
     { name: "Pakoda", price: "₹250", image: "https://www.shutterstock.com/image-photo/gobi-pakoda-called-gobhi-pakora-260nw-2265783421.jpg" },
  { name: "Pavbhaji", price: "₹180", image: "https://tse2.mm.bing.net/th/id/OIP.fRZW1j0fLNdRzYyxRcu8wgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "vadapav", price: "₹220", image: "https://wallpapercave.com/wp/wp8981219.jpg" },
  
];

const Menu = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Our Menu</h2>
      <Row>
        {menuItems.map((item, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="shadow-lg h-100">
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Price: {item.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
