// import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import './Hw.css'; // Assuming you create a CSS file for styling

// const Hw = () => {
//     const [output, setOutput] = useState([]);

//     useEffect(() => {
//         axios.get("https://fakestoreapi.com/products")
//             .then((res) => {
//                 console.log(res.data);
//                 setOutput(res.data);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, []);

//     return (
//         <div className="cards-container">
//             {output.map((product) => (
//                 <Card key={product.id} className="card">
//                     <CardMedia
//                         component="img"
//                         alt={product.title}
//                         height="140"
//                         image={product.image}
//                     />
//                     <CardContent>
//                         <Typography gutterBottom variant="h5" component="div">
//                             {product.title}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                             {product.description}
//                         </Typography>
//                         <Typography variant="body2" color="text.primary">
//                             ${product.price}
//                         </Typography>
//                     </CardContent>
//                     <CardActions>
//                         <Button size="small">Share</Button>
//                         <Button size="small">Learn More</Button>
//                     </CardActions>
//                 </Card>
//             ))}
//         </div>
//     );
// };

// export default Hw;
