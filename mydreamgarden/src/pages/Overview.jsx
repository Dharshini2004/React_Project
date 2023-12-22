
import ImageSlider from '../components/ImageSlider';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
// import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
const Products = () => {
  const slides = [

    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsO4hnaPM2LTIa9g2iS6UwA7D75Xo9O4iPbQ&usqp=CAU", title: "forest" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0m7YdCVE29ZKSESqG3Q8OhseJ7cxXTJ7r9Q&usqp=CAU", title: "city" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp0Gac-apEMXqz9zwAM3VWNZqIjXq0yZ2-Xw&usqp=CAU", title: "italy" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83qduDdDzGm_AITP0nZgFCZqtnPXpmvTkEg&usqp=CAU", title: "italy" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlzoLUUyJzoLqx-gSijgWfR1fRDpLo1v1RiQ&usqp=CAU", title: "italy" },
  ];
  const containerStyles = {
    width: "90%",
    height: "500px",
    margin: "0 auto",
    marginTop: "30px"
  };
  const linearGradient = 'linear-gradient(to right, #ED9ED6, #FFC7C7)';
  // const backgroundImageUrl = 'url("../assets/images/bgimg.webp")';
 
  const [value, setValue] = React.useState(0);
  return (
    <>
      <Grid sx={12} style={{ width: "100%", height: "100px", textAlign: "center", paddingTop: "30px", fontSize: "40px", backgroundImage: linearGradient, backgroundSize: "cover", marginTop: "20px" }} >
        welcome! To Our Dream Garden
      </Grid>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <Grid sx={12} style={{ width: "100%", height: "100px", textAlign: "center", paddingTop: "30px", fontSize: "40px", backgroundImage: linearGradient, backgroundSize: "cover", marginTop: "20px" }} >
        Popular Products
      </Grid>
      <Grid container rowspacing={2} style={{ marginLeft: "70px", marginTop: "30px", marginRight: "30px" }}>
        {/* Beauveria bassiana */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://bazodo.com/1515-large_default/beauveria-bassiana-1kg-microbial-insecticide.jpg"
              alt="Beauveria bassiana"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Beauveria bassiana (1Kg) Microbial Insecticide
              </Typography>
              <Typography variant="h5" color="green">
                Rs.120.00
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography component="legend">No reviews</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <CardActions>
              <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Coir Pith Block 5kg */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 ,maxHeight: 500}}>
            <CardMedia
              component="img"
              height="194"
              image="https://bazodo.com/1499-large_default/coir-pith-block-5kg-size-for-home-garden-expands-to-75-litres-of-coco-peat-powder.jpg"
              alt="Coir Pith Block 5kg"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Coir Pith Block for Home Garden - Coco PEAT Powder              </Typography>
              <Typography variant="h5" color="green">
                Rs.150.00
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography component="legend">No reviews</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <CardActions>
              <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/*Jeevamirtham Semi Solid Fertilizer*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://bazodo.com/1451-large_default/jeevamirtham-semi-solid-fertilizer-500ml-5-litre-organic-natural-npk-for-plants-bazodo.jpg"
              alt="Jeevamirtham Semi Solid Fertilizer"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Jeevamirtham Semi Solid Fertilizer
              </Typography>
              <Typography variant="h5" color="green">
                Rs.130.00
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography component="legend">No reviews</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <CardActions>
              <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/*Grow Bag*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345,marginTop:"30px" }}>
            <CardMedia
              component="img"
              height="194"
              image="https://bazodo.com/1491-large_default/36-x-24-x-12-inch-3-x-2-x-1-ft-400-gsm-hdpe-rectangular-grow-bag-with-pvc-pipe-loops.jpg"
              alt="Grow Bag"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                GSM HDPE Rectangular Grow Bag With PVC Pipe Loops
                </Typography>
              <Typography variant="h5" color="green">
                Rs.380.00
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography component="legend">No reviews</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <CardActions>
              <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/*Orchid Indoor Tabletop*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 ,marginTop:"30px"}}>
            <CardMedia
              component="img"
              height="194"
              image="https://bazodo.com/922-home_default/orchid-indoor-tabletop-small-planter-plastic-pot-blue-color-bazodo.jpg"
              alt="Orchid Indoor Tabletop"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Orchid Indoor Tabletop Small Planter Plastic Pot - Blue Color              </Typography>
              <Typography variant="h5" color="green">
                Rs.90.00
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography component="legend">No reviews</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <CardActions>
              <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/*Vermicompost*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 ,marginTop:"30px"}}>
            <CardMedia
              component="img"
              height="194"
              image="https://bazodo.com/1318-large_default/100-pure-vermicompost-500-kg-.jpg"
              alt="Vermicompost"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                100% Pure Vermicompost - 500 Kg
              </Typography>
              <Typography variant="h5" color="green">
                Rs.5500.00
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography component="legend">No reviews</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <CardActions>
              <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      {/* offer */}
      <div style={{textAlign:"center",margin:"40px"}}>
      <h2 style={{color:"red"}}>Up to 20% off on Our Dream Gardening Categories</h2>
      <p style={{fontSize:"20px"}}>"Huge discounts await you! Shop now through our BAZODO mobile app or website and get up to 20% off on gardening categories, including Seeds, Plants, Tools, Fertilizers, and more. Limited time offer, so hurry and take advantage of this amazing deal! Click here for more details."</p>
      </div>
      {/* ONSALE PRODUCTS */}
      <Grid sx={12} style={{ width: "100%", height: "100px", textAlign: "center", paddingTop: "30px", fontSize: "40px", backgroundImage: linearGradient, backgroundSize: "cover", marginTop: "20px" }} >
        Onsale Products
      </Grid>
      <Grid container rowspacing={2} style={{ marginLeft: "70px", marginTop: "30px", marginRight: "30px" }}>
        {/* Fish Amino Acid*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 ,marginTop:"30px"}}>
            <CardMedia
              component="img"
              height="194"
              image="https://bazodo.com/1355-home_default/fish-amino-acid-50-litre-5-litre-can-fish-emulsion-or-fish-fertilizer.jpg"
              alt="Fish Amino Acid"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Fish Amino Acid - Fish Emulsion or Fish Fertilizer              </Typography>
              <Typography variant="h5" color="green">
                Rs.25,000.00
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography component="legend">No reviews</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <CardActions>
              <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Potting Soil */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345,marginTop:"30px" }}>
            <CardMedia
              component="img"
              height="194"
              image="https://bazodo.com/1346-large_default/potting-soil-mix-500kg-a-perfect-mix-for-gardening-with-all-nutrients.jpg"
              alt="Potting Soil"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Potting Soil Mix - 500kg              
                </Typography>
              <Typography variant="h5" color="green">
                Rs.8,000.00
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography component="legend">No reviews</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <CardActions>
              <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/*SHADE NET*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 ,marginTop:"30px"}}>
            <CardMedia
              component="img"
              height="194"
              image="https://bazodo.com/304-home_default/shade-net-75-350-150-square-meter-meter-uv-treated-for-sunlight-protection.jpg"
              alt="SHADE NET 75% - 3*50 (150 Square meter)"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              SHADE NET 75% - 3*50 (150 Square meter)
              </Typography>
              <Typography variant="h5" color="green">
                Rs.130.00
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography component="legend">No reviews</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <CardActions>
              <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/*Grow Bag*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 ,marginTop:"30px"}}>
            <CardMedia
              component="img"
              height="194"
              image="https://bazodo.com/1130-home_default/bazodo-azolla-bed-144-x-48-x-24-inch-12-x-4-x-1-feet-for-azolla-cultivation.jpg"
              alt="Grow Bag"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Azolla Bed-(12 x 4 x 1 ft)              
                </Typography>
              <Typography variant="h5" color="green">
                Rs.1500.00
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography component="legend">No reviews</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <CardActions>
              <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/*Smart Combo Gardening Kit */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345,marginTop:"30px" }}>
            <CardMedia
              component="img"
              height="194"
              image="https://bazodo.com/749-home_default/bazodo-smart-combo-gardening-kit-starters-terracebalconykitchen-gardning.jpg"
              alt="Smart Combo Gardening Kit "
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Smart Combo Gardening Kit 
                </Typography>
              <Typography variant="h5" color="green">
                Rs.1500.00  SAVE Rs.200.00
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography component="legend">No reviews</Typography>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <CardActions>
              <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
      </Grid>
    </>
  )
}

export default Products