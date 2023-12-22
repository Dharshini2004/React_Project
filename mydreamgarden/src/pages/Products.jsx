import * as React from 'react';
import ImageSlider from '../components/ImageSlider';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate } from "react-router-dom";
const Products = () => {
  const slides = [

    { url: "https://t3.ftcdn.net/jpg/06/57/42/46/240_F_657424646_ho0RbzAL0IFqn10ce4G1mPM81t8lPM6b.jpg", title: "forest" },
    { url: "https://t3.ftcdn.net/jpg/06/28/26/98/240_F_628269815_c5ht5c0iWxFlGKAQrXYpdWlh294YXsdi.jpg", title: "city" },
    { url: "https://t3.ftcdn.net/jpg/06/15/76/50/240_F_615765070_kMrSmRSCzAW54AnguLehWdmz3hg8zEIQ.jpg", title: "italy" },
    { url: "https://t4.ftcdn.net/jpg/06/78/89/35/240_F_678893575_PAdO5EaeOjct1t3MczpYRzU0vFBydmud.jpg", title: "italy" },
    { url: "https://t3.ftcdn.net/jpg/06/26/25/82/240_F_626258234_hMpNnvvoi1VkICMEoWBO4Sf14AlQkMei.jpg", title: "italy" },
    { url: "https://t4.ftcdn.net/jpg/01/26/00/93/240_F_126009391_EHPaOKIZif9qs2CToGL9ITI7vvvslFFp.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "80%",
    height: "500px",
    margin: "0 auto",
    marginTop: "30px"
  };
  const linearGradient = 'linear-gradient(to right, #42f5f2, #bf267f)';
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Grid sx={12} style={{ width: "100%", height: "100px", textAlign: "center", paddingTop: "30px", fontSize: "40px", backgroundImage: linearGradient, backgroundSize: "cover", marginTop: "20px" }} >
          Our Products
        </Grid>
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
      </div>
      <Grid sx={12} style={{ width: "100%", height: "100px", textAlign: "center", paddingTop: "30px", fontSize: "40px", backgroundImage: linearGradient, backgroundSize: "cover", marginTop: "20px" }} >
        Seeds
      </Grid>
      <Grid container rowspacing={2} style={{ marginLeft: "70px", marginTop: "30px", marginRight: "30px" }}>
        {/* Vegetable Seeds*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
            <CardMedia
              component="img"
              height="194"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYUFybEN6z0aooCS1e9uhUc8tGxtXwZQ9ABXUqEacBpuzDsfXCrbmRq4xy3vAwwAq78Pc&usqp=CAU"
              alt="Vegetable Seeds"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Vegetable Seeds
              </Typography>
              {/* <Typography variant="h5" color="green">
                Rs.120.00
              </Typography> */}
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

            </CardActions>
            <CardActions>
              {/* <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button> */}
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <CardActions>
              <Button variant="contained" color="success" style={{ marginLeft: "100px" }} onClick={() => {
                navigate("/productS/seeds");
              }}>
                Explore
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Fruit Seeds*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
            <CardMedia
              component="img"
              height="194"
              image="https://t3.ftcdn.net/jpg/00/92/54/78/240_F_92547839_IIqVUbkEKMewi4FM6v7iqP3tIuZUlc9t.jpg"
              alt="fruit Seeds"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Fruit Seeds
              </Typography>
              {/* <Typography variant="h5" color="green">
                Rs.120.00
              </Typography> */}
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

            </CardActions>
            <CardActions>
              {/* <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button> */}
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <CardActions>
              <Button variant="contained" color="success" style={{ marginLeft: "100px" }} onClick={() => {
                navigate("/productS/seeds");
              }}>
                Explore
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Flower Seeds*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
            <CardMedia
              component="img"
              height="194"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ118LJgWiRbBbxEdOz0PEtPhZKJihRiBzNWKFOjHjqKmRFcC_USPE1HGR1elpEVbcmG_8&usqp=CAU"
              alt="Flower Seeds"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Flower Seeds
              </Typography>
              {/* <Typography variant="h5" color="green">
                Rs.120.00
              </Typography> */}
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

            </CardActions>
            <CardActions>
              {/* <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button> */}
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <CardActions>
              <Button variant="contained" color="success" style={{ marginLeft: "100px" }} onClick={() => {
                navigate("/productS/seeds");
              }}>
                Explore
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Spinach Seeds*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
            <CardMedia
              component="img"
              height="194"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLs4N6e5GoPCBbeGG7Yy-SOT7hDMEe3Gzfxg&usqp=CAU"
              alt="Spinach Seeds"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Spinach Seeds
              </Typography>
              {/* <Typography variant="h5" color="green">
                Rs.120.00
              </Typography> */}
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

            </CardActions>
            <CardActions>
              {/* <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button> */}
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <CardActions>
              <Button variant="contained" color="success" style={{ marginLeft: "100px" }} onClick={() => {
                navigate("/productS/seeds");
              }}>
                Explore
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Country Seeds*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
            <CardMedia
              component="img"
              height="194"
              image="https://bazodo.com/c/39-category_default/country-seeds.jpg"
              alt="Country Seeds"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Country Seeds
              </Typography>
              {/* <Typography variant="h5" color="green">
                Rs.120.00
              </Typography> */}
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

            </CardActions>
            <CardActions>
              {/* <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button> */}
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <CardActions>
              <Button variant="contained" color="success" style={{ marginLeft: "100px" }} onClick={() => {
                navigate("/productS/seeds");
              }}>
                Explore
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Herbal Seeds*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
            <CardMedia
              component="img"
              height="194"
              image="https://bazodo.com/c/72-category_default/herbal-seeds.jpg"
              alt="Herbal Seeds"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Herbal Seeds
              </Typography>
              {/* <Typography variant="h5" color="green">
                Rs.120.00
              </Typography> */}
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

            </CardActions>
            <CardActions>
              {/* <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button> */}
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
            <CardActions>
              <Button variant="contained" color="success" style={{ marginLeft: "100px" }} onClick={() => {
                navigate("/productS/seeds");
              }}>
                Explore
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Grid>
        {/* GROW BAGS */}
        <Grid sx={12} style={{ width: "100%", height: "100px", textAlign: "center", paddingTop: "30px", fontSize: "40px", backgroundImage: linearGradient, backgroundSize: "cover", marginTop: "20px" }} >
          Grow Bags
        </Grid>
        <Grid container rowspacing={2} style={{ marginLeft: "70px", marginTop: "30px", marginRight: "30px" }}>
          {/* HDPE 220 GSM Grow Bags*/}
          <Grid item xs={6} >
            <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
              <CardMedia
                component="img"
                height="194"
                image="https://bazodo.com/c/4-category_default/hdpe-220-gsm-grow-bags.jpg"
                alt="HDPE 220 GSM Grow Bags"
              />
              <CardContent>
                <Typography variant="h5" color="text.primary">
                  HDPE 220 GSM Grow Bags
                </Typography>
                {/* <Typography variant="h5" color="green">
                Rs.120.00
              </Typography> */}
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

              </CardActions>
              <CardActions>
                {/* <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button> */}
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
              <CardActions>
                <Button variant="contained" color="success" style={{ marginLeft: "100px" }} onClick={() => {
                  navigate("/products/growBags");
                }}>
                  Explore
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* HDPE 400 GSM Grow Bags*/}
          <Grid item xs={6} >
            <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
              <CardMedia
                component="img"
                height="194"
                image="https://bazodo.com/c/57-category_default/hdpe-400-gsm-grow-bags.jpg"
                alt="HDPE 400 GSM Grow Bags"
              />
              <CardContent>
                <Typography variant="h5" color="text.primary">
                  HDPE 400 GSM Grow Bags
                </Typography>
                {/* <Typography variant="h5" color="green">
                Rs.120.00
              </Typography> */}
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

              </CardActions>
              <CardActions>
                {/* <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button> */}
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
              <CardActions>
                <Button variant="contained" color="success" style={{ marginLeft: "100px" }} onClick={() => {
                  navigate("/products/growBags");
                }}>
                  Explore
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Vermi Beds*/}
          <Grid item xs={6} >
            <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
              <CardMedia
                component="img"
                height="194"
                image="https://bazodo.com/c/5-category_default/vermi-beds.jpg"
                alt="Vermi Beds"
              />
              <CardContent>
                <Typography variant="h5" color="text.primary">
                  Vermi Beds
                </Typography>
                {/* <Typography variant="h5" color="green">
                Rs.120.00
              </Typography> */}
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

              </CardActions>
              <CardActions>
                {/* <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button> */}
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
              <CardActions>
                <Button variant="contained" color="success" style={{ marginLeft: "100px" }} onClick={() => {
                  navigate("/products/growBags");
                }}>
                  Explore
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/*Azolla Bed*/}
          <Grid item xs={6} >
            <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
              <CardMedia
                component="img"
                height="194"
                image="https://bazodo.com/c/10-category_default/azolla-bed.jpg"
                alt="Azolla Bed"
              />
              <CardContent>
                <Typography variant="h5" color="text.primary">
                  Azolla Bed
                </Typography>
                {/* <Typography variant="h5" color="green">
                Rs.120.00
              </Typography> */}
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

              </CardActions>
              <CardActions>
                {/* <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button> */}
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
              <CardActions>
                <Button variant="contained" color="success" style={{ marginLeft: "100px" }} onClick={() => {
                  navigate("/products/growBags");
                }}>
                  Explore
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        {/* Pots */}
        <Grid sx={12} style={{ width: "100%", height: "100px", textAlign: "center", paddingTop: "30px", fontSize: "40px", backgroundImage: linearGradient, backgroundSize: "cover", marginTop: "20px" }} >
          Pots
        </Grid>
        <Grid container rowspacing={2} style={{ marginLeft: "70px", marginTop: "30px", marginRight: "30px" }}>
          {/* Resin Pots*/}
          <Grid item xs={4} >
            <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
              <CardMedia
                component="img"
                height="194"
                image="https://mybageecha.com/cdn/shop/collections/resinpots_280x.jpg?v=1487151416"
                alt="Resin Pots"
              />
              <CardContent>
                <Typography variant="h5" color="text.primary">
                  Resin Pots
                </Typography>
                {/* <Typography variant="h5" color="green">
                Rs.120.00
              </Typography> */}
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

              </CardActions>
              <CardActions>
                {/* <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button> */}
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
              <CardActions>
                <Button variant="contained" color="success" style={{ marginLeft: "100px" }} onClick={() => {
                  navigate("/products/pots");
                }}>
                  Explore
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/*Ceramic Pots*/}
          <Grid item xs={4} >
            <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
              <CardMedia
                component="img"
                height="194"
                image="https://mybageecha.com/cdn/shop/collections/ceramicplanters_b00e8399-338a-4c4a-93af-270664b3152f_280x.jpg?v=1464085464"
                alt="Ceramic Pots"
              />
              <CardContent>
                <Typography variant="h5" color="text.primary">
                  Ceramic Pots
                </Typography>
                {/* <Typography variant="h5" color="green">
                Rs.120.00
              </Typography> */}
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

              </CardActions>
              <CardActions>
                {/* <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button> */}
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
              <CardActions>
                <Button variant="contained" color="success" style={{ marginLeft: "100px" }} onClick={() => {
                  navigate("/products/pots");
                }}>
                  Explore
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Wooden Pots*/}
          <Grid item xs={4} >
            <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
              <CardMedia
                component="img"
                height="194"
                image="https://mybageecha.com/cdn/shop/collections/woodenpots_280x.jpg?v=1498118735"
                alt="Wooden Pots"
              />
              <CardContent>
                <Typography variant="h5" color="text.primary">
                  Wooden Pots
                </Typography>
                {/* <Typography variant="h5" color="green">
                Rs.120.00
              </Typography> */}
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

              </CardActions>
              <CardActions>
                {/* <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button> */}
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
              <CardActions>
                <Button variant="contained" color="success" style={{ marginLeft: "100px" }} onClick={() => {
                  navigate("/products/pots");
                }}>
                  Explore
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/*Glass Pots*/}
          <Grid item xs={4} >
            <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
              <CardMedia
                component="img"
                height="194"
                image="https://mybageecha.com/cdn/shop/collections/glass_pots_280x.jpg?v=1489218415"
                alt="Glass Pots"
              />
              <CardContent>
                <Typography variant="h5" color="text.primary">
                  Glass Pots
                </Typography>
                {/* <Typography variant="h5" color="green">
                Rs.120.00
              </Typography> */}
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

              </CardActions>
              <CardActions>
                {/* <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button> */}
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
              <CardActions>
                <Button variant="contained" color="success" style={{ marginLeft: "100px" }} onClick={() => {
                  navigate("/products/pots");
                }}>
                  Explore
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/*Terracotta Pots*/}
          <Grid item xs={4} >
            <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
              <CardMedia
                component="img"
                height="194"
                image="https://mybageecha.com/cdn/shop/collections/terracottapots_280x.jpg?v=1476707363"
                alt="Terracotta Pots"
              />
              <CardContent>
                <Typography variant="h5" color="text.primary">
                  Terracotta Pots
                </Typography>
                {/* <Typography variant="h5" color="green">
                Rs.120.00
              </Typography> */}
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
              </CardActions>
              <CardActions>
                {/* <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button> */}
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
              <CardActions>
                <Button variant="contained" color="success" style={{ marginLeft: "100px" }} onClick={() => {
                  navigate("/products/pots");
                }}>
                  Explore
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/*Coco Pots & Hangers*/}
          <Grid item xs={4} >
            <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
              <CardMedia
                component="img"
                height="194"
                image="https://mybageecha.com/cdn/shop/collections/JGSP0016-SPANISH_POT_280x.jpg?v=1491910819"
                alt="Coco Pots & Hangers"
              />
              <CardContent>
                <Typography variant="h5" color="text.primary">
                  Coco Pots & Hangers
                </Typography>
                {/* <Typography variant="h5" color="green">
                Rs.120.00
              </Typography> */}
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
              </CardActions>
              <CardActions>
                {/* <Button variant="contained" color="success" style={{ marginLeft: "100px" }}>
                Add To Cart
              </Button> */}
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
              <CardActions>
                <Button variant="contained" color="success" style={{ marginLeft: "100px" }} onClick={() => {
                  navigate("/products/pots");
                }}>
                  Explore
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Products