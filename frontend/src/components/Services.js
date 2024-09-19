// import React from 'react'

// const Services = () => {
//   return (
//     <div>
//       SERVICES
//     </div>
//   )
// }

// export default Services


// import React from 'react';
// import { Grid, Paper, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';
// import BuildIcon from '@mui/icons-material/Build';
// import DoorFrontIcon from '@mui/icons-material/DoorFront';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import PestControlIcon from '@mui/icons-material/PestControl';
// import SecurityIcon from '@mui/icons-material/Security';
// import image1 from '../assets/anytimeImages/img1.jpeg';
// import image2 from '../assets/anytimeImages/img2.jpeg'; 
// import image3 from '../assets/anytimeImages/img3.jpeg';
// import image4 from '../assets/anytimeImages/img4.jpeg';
// import image5 from '../assets/anytimeImages/img5.jpeg';
// import image6 from '../assets/anytimeImages/img6.jpeg';
// import image7 from '../assets/anytimeImages/img7.jpeg';
// import image8 from '../assets/anytimeImages/img8.jpeg';
// import image9 from '../assets/anytimeImages/img9.jpeg';
// import image10 from '../assets/anytimeImages/img10.jpeg';
// import image11 from '../assets/anytimeImages/img11.jpeg';

// const services = [
//   {
//     title: "Residential / Commercial Garage Doors & Openers",
//     icon: <HomeIcon fontSize="large" />,
//     items: [
//       "All types of custom Garage Doors",
//       "Choose from various Garage openers specific to your needs",
//       "Contact for Free Estimates",
//     ],
//   },
//   {
//     title: "Dock Levelers Mechanical / Hydraulic / Air Dock",
//     icon: <BuildIcon fontSize="large" />,
//     items: [
//       "Planned Maintenance Programs",
//       "Hydraulic Conversions",
//       "Dock Seals, Shelters, Bumpers",
//       "Vehicle Restraints",
//       "Safety Equipment – Barriers, Wheel Chocks",
//     ],
//   },
//   {
//     title: "All your Overhead Door Needs",
//     icon: <DoorFrontIcon fontSize="large" />,
//     items: [
//       "Repairs and Service",
//       "New Installations",
//       "Energy Saver Upgrades",
//       "Protective Guards",
//       "Commercial Man Doors",
//     ],
//   },
//   {
//     title: "Forklift Sales & Services",
//     icon: <LocalShippingIcon fontSize="large" />,
//     items: [],
//   },
//   {
//     title: "Pest Control Services",
//     icon: <PestControlIcon fontSize="large" />,
//     items: [],
//   },
//   {
//     title: "Security Gates",
//     icon: <SecurityIcon fontSize="large" />,
//     items: [],
//   },
// ];

// const workImages = [
//   image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11
// ];

// const Services = () => {
//   return (
//     <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Our Services
//       </Typography>
//       <Grid container spacing={3}>
//         {services.map((service, index) => (
//           <Grid item xs={12} md={6} lg={4} key={index}>
//             <Paper elevation={3} sx={{ p: 3 }}>
//               <Box display="flex" alignItems="center">
//                 <ListItemIcon>{service.icon}</ListItemIcon>
//                 <Typography variant="h6">{service.title}</Typography>
//               </Box>
//               <List>
//                 {service.items.length > 0 ? (
//                   service.items.map((item, idx) => (
//                     <ListItem key={idx}>
//                       <ListItemText primary={item} />
//                     </ListItem>
//                   ))
//                 ) : (
//                   <Typography variant="body2" color="textSecondary">
//                     Please contact us for more details.
//                   </Typography>
//                 )}
//               </List>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//       <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Our Work
//         </Typography>
//         <Grid container spacing={3}>
//           {workImages.map((image, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Paper elevation={3} sx={{ height: 200 }}>
//                 <Box
//                   sx={{
//                     height: '100%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     backgroundColor: '#f5f5f5',
//                     borderRadius: 1,
//                   }}
//                 >
//                   <img
//                     src={image}
//                     alt={`Work ${index + 1}`}
//                     style={{
//                       width: '100%',
//                       height: '100%',
//                       borderRadius: '8px',
//                       objectFit: 'cover',
//                     }}
//                   />
//                 </Box>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//       <Box sx={{ mt: 6, textAlign: 'center' }}>
//         <img
//           src="/path-to-your-image.jpg"
//           alt="Service Worker"
//           width="400"
//           height="300"
//           style={{ borderRadius: '12px', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' }}
//         />
//       </Box>
//       <Box sx={{ mt: 3, textAlign: 'center' }}>
//         <Typography variant="body1" color="textSecondary">
//           With decades of industry expertise, our dedicated team proudly serves all regions of British Columbia, including Fraser Valley, Abbotsford, Surrey, Vancouver, Langley, Richmond, and West Vancouver.
//         </Typography>
//         <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
//           Our state-of-the-art service vehicles are fully equipped to handle all your needs efficiently and professionally. Whether it's advanced welding, precision electronics, or comprehensive dock and door solutions, we're committed to delivering excellence, every time.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Services;


// import React, { useState } from 'react';
// import { Grid, Paper, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Modal, IconButton } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';
// import BuildIcon from '@mui/icons-material/Build';
// import DoorFrontIcon from '@mui/icons-material/DoorFront';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import PestControlIcon from '@mui/icons-material/PestControl';
// import SecurityIcon from '@mui/icons-material/Security';
// import CloseIcon from '@mui/icons-material/Close';
// import image1 from '../assets/anytimeImages/img1.jpeg';
// import image2 from '../assets/anytimeImages/img2.jpeg'; 
// import image3 from '../assets/anytimeImages/img3.jpeg';
// import image4 from '../assets/anytimeImages/img4.jpeg';
// import image5 from '../assets/anytimeImages/img5.jpeg';
// import image6 from '../assets/anytimeImages/img6.jpeg';
// import image7 from '../assets/anytimeImages/img7.jpeg';
// import image8 from '../assets/anytimeImages/img8.jpeg';
// import image9 from '../assets/anytimeImages/img9.jpeg';
// import image10 from '../assets/anytimeImages/img10.jpeg';
// import image11 from '../assets/anytimeImages/img11.jpeg';

//  const services = [

// //       {
// //         title: "Residential / Commercial Garage Doors & Openers",
// //         icon: <HomeIcon fontSize="large" />,
// //         items: [
// //           "All types of custom Garage Doors",
// //           "Choose from various Garage openers specific to your needs",
// //           "Contact for Free Estimates",
// //         ],
// //       },
// //       {
// //         title: "Dock Levelers Mechanical / Hydraulic / Air Dock",
// //         icon: <BuildIcon fontSize="large" />,
// //         items: [
// //           "Planned Maintenance Programs",
// //           "Hydraulic Conversions",
// //           "Dock Seals, Shelters, Bumpers",
// //           "Vehicle Restraints",
// //           "Safety Equipment – Barriers, Wheel Chocks",
// //         ],
// //       },
// //       {
// //         title: "All your Overhead Door Needs",
// //         icon: <DoorFrontIcon fontSize="large" />,
// //         items: [
// //           "Repairs and Service",
// //           "New Installations",
// //           "Energy Saver Upgrades",
// //           "Protective Guards",
// //           "Commercial Man Doors",
// //         ],
// //       },
// //       {
// //         title: "Forklift Sales & Services",
// //         icon: <LocalShippingIcon fontSize="large" />,
// //         items: [],
// //       },
// //       {
// //         title: "Pest Control Services",
// //         icon: <PestControlIcon fontSize="large" />,
// //         items: [],
// //       },
// //       {
// //         title: "Security Gates",
// //         icon: <SecurityIcon fontSize="large" />,
// //         items: [],
// //       },
    
    
// // ];

// {
//   title: "Residential / Commercial Garage Doors & Openers",
//   icon: <HomeIcon fontSize="inherit" />,
//   items: [
//     "All types of custom Garage Doors",
//     "Choose from various Garage openers specific to your needs",
//     "Contact for Free Estimates",
//   ],
//   gradient: "linear-gradient(135deg, #1e3c72, #2a5298)",
// },
// {
//   title: "Dock Levelers Mechanical / Hydraulic / Air Dock",
//   icon: <BuildIcon fontSize="inherit" />,
//   items: [
//     "Planned Maintenance Programs",
//     "Hydraulic Conversions",
//     "Dock Seals, Shelters, Bumpers",
//     "Vehicle Restraints",
//     "Safety Equipment – Barriers, Wheel Chocks",
//   ],
//   gradient: "linear-gradient(135deg, #3a7bd5, #3a6073)",
// },
// {
//   title: "All your Overhead Door Needs",
//   icon: <DoorFrontIcon fontSize="inherit" />,
//   items: [
//     "Repairs and Service",
//     "New Installations",
//     "Energy Saver Upgrades",
//     "Protective Guards",
//     "Commercial Man Doors",
//   ],
//   gradient: "linear-gradient(135deg, #4e54c8, #8f94fb)",
// },
// {
//   title: "Forklift Sales & Services",
//   icon: <LocalShippingIcon fontSize="inherit" />,
//   items: [],
//   gradient: "linear-gradient(135deg, #ff416c, #ff4b2b)",
// },
// {
//   title: "Pest Control Services",
//   icon: <PestControlIcon fontSize="inherit" />,
//   items: [],
//   gradient: "linear-gradient(135deg, #00c6ff, #0072ff)",
// },
// {
//   title: "Security Gates",
//   icon: <SecurityIcon fontSize="inherit" />,
//   items: [],
//   gradient: "linear-gradient(135deg, #8e2de2, #4a00e0)",
// },
// ];


// const workImages = [
//   image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11
// ];

// const Services = () => {
//   const [open, setOpen] = useState(false);
//   const [currentImage, setCurrentImage] = useState(null);

//   const handleOpen = (image) => {
//     setCurrentImage(image);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setCurrentImage(null);
//   };

//   return (
//     <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Our Services
//       </Typography>
//       <Grid container spacing={3}>
//         {services.map((service, index) => (
//           <Grid item xs={12} md={6} lg={4} key={index}>
//             <Paper elevation={3} sx={{ p: 3 }}>
//               <Box display="flex" alignItems="center">
//                 <ListItemIcon>{service.icon}</ListItemIcon>
//                 <Typography variant="h6">{service.title}</Typography>
//               </Box>
//               <List>
//                 {service.items.length > 0 ? (
//                   service.items.map((item, idx) => (
//                     <ListItem key={idx}>
//                       <ListItemText primary={item} />
//                     </ListItem>
//                   ))
//                 ) : (
//                   <Typography variant="body2" color="textSecondary">
//                     Please contact us for more details.
//                   </Typography>
//                 )}
//               </List>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//       <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Our Work
//         </Typography>
//         <Grid container spacing={3}>
//           {workImages.map((image, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Paper elevation={3} sx={{ height: 200 }}>
//                 <Box
//                   sx={{
//                     height: '100%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     backgroundColor: '#f5f5f5',
//                     borderRadius: 1,
//                     cursor: 'pointer', // Make it clear that the image is clickable
//                   }}
//                   onClick={() => handleOpen(image)}
//                 >
//                   <img
//                     src={image}
//                     alt={`Work ${index + 1}`}
//                     style={{
//                       width: '100%',
//                       height: '100%',
//                       borderRadius: '8px',
//                       objectFit: 'cover',
//                     }}
//                   />
//                 </Box>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
      
//       {/* Modal for image display */}
//       <Modal
//         open={open}
//         onClose={handleClose}
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Box sx={{
//           position: 'relative',
//           maxWidth: '100rem',
//           maxHeight: '40rem',
//           outline: 'none',
//           p: 2,
//           backgroundColor: 'white',
//           borderRadius: 2,
//           boxShadow: 24,
//           overflow: 'hidden',
//           cursor: 'pointer',
//           objectFit: 'cover' // Make it clear that the image is clickable
//         }}>
//           <IconButton 
//             onClick={handleClose} 
//             sx={{ 
//               position: 'absolute', 
//               top: 8, 
//               right: 8 
//             }}
//           >
//             <CloseIcon />
//           </IconButton>
//           <img
//             src={currentImage}
//             alt="Work"
//             style={{
//               width: '100%',
//               height: 'auto',
//               borderRadius: '8px',
//               objectFit: 'contain',
//             }}
//           />
//         </Box>
//       </Modal>

//       <Box sx={{ mt: 6, textAlign: 'center' }}>
//         <img
//           src="/path-to-your-image.jpg"
//           alt="Service Worker"
//           width="400"
//           height="300"
//           style={{ borderRadius: '12px', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' }}
//         />
//       </Box>
//       <Box sx={{ mt: 3, textAlign: 'center' }}>
//         <Typography variant="body1" color="textSecondary">
//           With decades of industry expertise, our dedicated team proudly serves all regions of British Columbia, including Fraser Valley, Abbotsford, Surrey, Vancouver, Langley, Richmond, and West Vancouver.
//         </Typography>
//         <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
//           Our state-of-the-art service vehicles are fully equipped to handle all your needs efficiently and professionally. Whether it's advanced welding, precision electronics, or comprehensive dock and door solutions, we're committed to delivering excellence, every time.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Services;

// import React, { useState } from 'react';
// import { Grid, Paper, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Modal, IconButton , Button} from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';
// import BuildIcon from '@mui/icons-material/Build';
// import DoorFrontIcon from '@mui/icons-material/DoorFront';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import PestControlIcon from '@mui/icons-material/PestControl';
// import SecurityIcon from '@mui/icons-material/Security';
// import CloseIcon from '@mui/icons-material/Close';
// import image1 from '../assets/anytimeImages/img1.jpeg';
// import image2 from '../assets/anytimeImages/img2.jpeg'; 
// import image3 from '../assets/anytimeImages/img3.jpeg';
// import image4 from '../assets/anytimeImages/img4.jpeg';
// import image5 from '../assets/anytimeImages/img5.jpeg';
// import image6 from '../assets/anytimeImages/img6.jpeg';
// import image7 from '../assets/anytimeImages/img7.jpeg';
// import image8 from '../assets/anytimeImages/img8.jpeg';
// import image9 from '../assets/anytimeImages/img9.jpeg';
// import image10 from '../assets/anytimeImages/img10.jpeg';
// import image11 from '../assets/anytimeImages/img11.jpeg';

// const services = [
//   {
//     title: "Residential / Commercial Garage Doors & Openers",
//     icon: <HomeIcon fontSize="inherit" />,
//     items: [
//       "All types of custom Garage Doors",
//       "Choose from various Garage openers specific to your needs",
//       "Contact for Free Estimates",
//     ],
//     gradient: "linear-gradient(135deg, #1e3c72, #2a5298)",
    
//   },
//   {
//     title: "All your Overhead Door Needs",
//     icon: <DoorFrontIcon fontSize="inherit" />,
//     items: [
//       "Repairs and Service",
//       "New Installations",
//       "Energy Saver Upgrades",
//       "Protective Guards",
//       "Commercial Man Doors",
//     ],
//     gradient: "linear-gradient(135deg, #4e54c8, #8f94fb)",
//   },
//   {
//     title: "Dock Levelers Mechanical / Hydraulic / Air Dock",
//     icon: <BuildIcon fontSize="inherit" />,
//     items: [
//       "Planned Maintenance Programs",
//       "Hydraulic Conversions",
//       "Dock Seals, Shelters, Bumpers",
//       "Vehicle Restraints",
//       "Safety Equipment – Barriers, Wheel Chocks",
//     ],
//     gradient: "linear-gradient(135deg, #3a7bd5, #3a6073)",
//   },
  
  
//   {
//     title: "Pest Control Services",
//     icon: <PestControlIcon fontSize="inherit" />,
//     items: [],
//     gradient: "linear-gradient(135deg, #00c6ff, #0072ff)",
//   },
//   {
//     title: "Security Gates",
//     icon: <SecurityIcon fontSize="inherit" />,
//     items: [],
//     gradient: "linear-gradient(135deg, #8e2de2, #4a00e0)",
//   },
// ];

// const workImages = [
//   image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11,
// ];

// const Services = () => {
//   const [open, setOpen] = useState(false);
//   const [currentImage, setCurrentImage] = useState(null);

//   const handleOpen = (image) => {
//     setCurrentImage(image);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setCurrentImage(null);
//   };

//   return (
//     <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Our Services
//       </Typography>
//       <Grid container spacing={3}>
//         {services.map((service, index) => (
//           <Grid item xs={12} md={6} lg={4} key={index}>
//             <Paper
//               elevation={3}
//               sx={{
//                 p: 3,
//                 background: service.gradient,
//                 color: '#fff',
//                 borderRadius: 2,
//               }}
//             >
//               <Box display="flex" alignItems="center">
//                 <ListItemIcon sx={{ color: '#fff', fontSize: '2.5rem' }}>
//                   {service.icon}
//                 </ListItemIcon>
//                 <Typography variant="h6" sx={{ ml: 2 }}>
//                   {service.title}
//                 </Typography>
//               </Box>
//               <List sx={{ mt: 2 }}>
//                 {service.items.length > 0 ? (
//                   service.items.map((item, idx) => (
//                     <ListItem key={idx} sx={{ color: '#fff' }}>
//                       <ListItemText primary={item} />
//                     </ListItem>
//                   ))
//                 ) : (
                  
//                   <Button sx={{ color: 'black', background: 'white' }}>
//                    contact for details.
//                   </Button>
                 
//                 )}
//               </List>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//       <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Our Work
//         </Typography>
//         <Grid container spacing={3}>
//           {workImages.map((image, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Paper elevation={3} sx={{ height: 200 }}>
//                 <Box
//                   sx={{
//                     height: '100%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     backgroundColor: '#f5f5f5',
//                     borderRadius: 1,
//                     cursor: 'pointer', // Make it clear that the image is clickable
//                   }}
//                   onClick={() => handleOpen(image)}
//                 >
//                   <img
//                     src={image}
//                     alt={`Work ${index + 1}`}
//                     style={{
//                       width: '100%',
//                       height: '100%',
//                       borderRadius: '8px',
//                       objectFit: 'cover',
//                     }}
//                   />
//                 </Box>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
      
//       {/* Modal for image display */}
//       <Modal
//         open={open}
//         onClose={handleClose}
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Box sx={{
//           position: 'relative',
//           maxWidth: '100rem',
//           maxHeight: '40rem',
//           outline: 'none',
//           p: 2,
//           backgroundColor: 'white',
//           borderRadius: 2,
//           boxShadow: 24,
//           overflow: 'hidden',
//           cursor: 'pointer',
//           objectFit: 'cover' // Make it clear that the image is clickable
//         }}>
//           <IconButton 
//             onClick={handleClose} 
//             sx={{ 
//               position: 'absolute', 
//               top: 8, 
//               right: 8 
//             }}
//           >
//             <CloseIcon />
//           </IconButton>
//           <img
//             src={currentImage}
//             alt="Work"
//             style={{
//               width: '100%',
//               height: 'auto',
//               borderRadius: '8px',
//               objectFit: 'contain',
//             }}
//           />
//         </Box>
//       </Modal>

//       <Box sx={{ mt: 6, textAlign: 'center' }}>
//         <img
//           src="/path-to-your-image.jpg"
//           alt="Service Worker"
//           width="400"
//           height="300"
//           style={{ borderRadius: '12px', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' }}
//         />
//       </Box>
//       <Box sx={{ mt: 3, textAlign: 'center' }}>
//         <Typography variant="body1" color="textSecondary">
//           With decades of industry expertise, our dedicated team proudly serves all regions of British Columbia, including Fraser Valley, Abbotsford, Surrey, Vancouver, Langley, Richmond, and West Vancouver.
//         </Typography>
//         <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
//           Our state-of-the-art service vehicles are fully equipped to handle all your needs efficiently and professionally. Whether it's advanced welding, precision electronics, or comprehensive dock and door solutions, we're committed to delivering excellence, every time.
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Services;

import React, { useState } from 'react';
import { Grid, Paper, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Modal, IconButton, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import DoorFrontIcon from '@mui/icons-material/DoorFront';
import PestControlIcon from '@mui/icons-material/PestControl';
import SecurityIcon from '@mui/icons-material/Security';
import CloseIcon from '@mui/icons-material/Close';
import image1 from '../assets/anytimeImages/img1.jpeg';
import image2 from '../assets/anytimeImages/img2.jpeg';
import image3 from '../assets/anytimeImages/img3.jpeg';
import image4 from '../assets/anytimeImages/img4.jpeg';
import image5 from '../assets/anytimeImages/img5.jpeg';
import image6 from '../assets/anytimeImages/img6.jpeg';
import image7 from '../assets/anytimeImages/img7.jpeg';
import image8 from '../assets/anytimeImages/img8.jpeg';
import image9 from '../assets/anytimeImages/img9.jpeg';
import image10 from '../assets/anytimeImages/img10.jpeg';
import image11 from '../assets/anytimeImages/img11.jpeg';

const services = [
  {
    title: "Residential / Commercial Garage Doors & Openers",
    icon: <HomeIcon fontSize="inherit" />,
    items: [
      "All types of custom Garage Doors",
      "Choose from various Garage openers specific to your needs",
      "Emergency Repair Services",
      "Professional Installation Services",
    ],
    gradient: "linear-gradient(135deg, #90CAF9, #64B5F6)", // Light blue gradient
  },
  {
    title: "All your Overhead Door Needs",
    icon: <DoorFrontIcon fontSize="inherit" />,
    items: [
      "Repairs and Service",
      "New Installations",
      "Energy Saver Upgrades",
      "Protective Guards",
      "Commercial Man Doors",
    ],
    gradient: "linear-gradient(135deg, #CE93D8, #BA68C8)", // Light purple gradient
  },
  {
    title: "Dock Levelers Mechanical / Hydraulic / Air Dock",
    icon: <BuildIcon fontSize="inherit" />,
    items: [
      "Planned Maintenance Programs",
      "Hydraulic Conversions",
      "Dock Seals, Shelters, Bumpers",
      "Vehicle Restraints",
      "Safety Equipment – Barriers, Wheel Chocks",
    ],
    gradient: "linear-gradient(135deg, #A5D6A7, #81C784)", // Light green gradient
  },
  {
    title: "Pest Control Services",
    icon: <PestControlIcon fontSize="inherit" />,
    items: [
      "Comprehensive Pest Inspections",
      "Customized Treatment Plans",
      "Eco-Friendly Solutions",
      "Preventative Measures",
      "24/7 Emergency Support"
    ],
    gradient: "linear-gradient(135deg, #FFCC80, #FFB74D)", // Light orange gradient
  },
  {
    title: "Security Gates",
    icon: <SecurityIcon fontSize="inherit" />,
    items: [
          "Custom Gate Design and Installation",
          "Automated Gate Systems",
          "High-Security Gate Solutions",
          "Access Control Integration",
          "Professional Gate Maintenance",
    ],
    gradient: "linear-gradient(135deg, #F48FB1, #F06292)", // Light pink gradient
  },
];

const workImages = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11,
];

const Services = () => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleOpen = (image) => {
    setCurrentImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentImage(null);
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                background: service.gradient,
                color: '#fff',
                borderRadius: 2,
                height: '22rem'
              }}
            >
              <Box display="flex" alignItems="center">
                <ListItemIcon sx={{ color: '#fff', fontSize: '5.5rem' }}>
                  {service.icon}
                </ListItemIcon>
                <Typography variant="h6" sx={{ ml: 2 , fontWeight: 'bolder'}}>
                  {service.title}
                </Typography>
              </Box>
              <List sx={{ mt: 2}}>
                {service.items.length > 0 ? (
                  service.items.map((item, idx) => (
                    <ListItem key={idx} sx={{ color: '#fff' , p: 0}}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))
                ) : (
                  <Typography variant="body2" color="white">
                    Please contact us for more details.
                  </Typography>
                )}
              </List>
              <Box sx={{ textAlign: 'left', mt: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#fff',
                    color: service.gradient.split(',')[1].replace(')', ''),
                    '&:hover': {
                      backgroundColor: '#eee',
                    },
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ maxWidth: 1200, mx: 'auto', p: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Work
        </Typography>
        <Grid container spacing={3}>
          {workImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={3} sx={{ height: 200 }}>
                <Box
                  sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#f5f5f5',
                    borderRadius: 1,
                    cursor: 'pointer',
                  }}
                  onClick={() => handleOpen(image)}
                >
                  <img
                    src={image}
                    alt={`Work ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '8px',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      {/* Modal for image display */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{
          position: 'relative',
          maxWidth: '100rem',
          maxHeight: '40rem',
          outline: 'none',
          p: 2,
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: 24,
          overflow: 'hidden',
          cursor: 'pointer',
          objectFit: 'cover',
        }}>
          <IconButton 
            onClick={handleClose} 
            sx={{ 
              position: 'absolute', 
              top: 8, 
              right: 8 
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={currentImage}
            alt="Work"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Modal>

      {/* <Box sx={{ mt: 6, textAlign: 'center' }}>
        <img
          src="/path-to-your-image.jpg"
          alt="Service Worker"
          width="400"
          height="300"
          style={{ borderRadius: '12px', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' }}
        />
      </Box> */}
      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Typography variant="body1" color="textSecondary" textAlign='center' >
          With decades of industry expertise, our dedicated team proudly serves all regions of British Columbia, including Fraser Valley, Abbotsford, Surrey, Vancouver, Langley, Richmond, and West Vancouver.
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
          Our state-of-the-art service vehicles are fully equipped to handle all your needs efficiently and professionally. Whether it's advanced welding, precision electronics, or comprehensive dock and door solutions, we're committed to delivering excellence, every time.
        </Typography>
      </Box>
    </Box>
  );
};

export default Services;
