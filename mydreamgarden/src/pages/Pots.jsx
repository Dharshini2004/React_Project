import * as React from 'react';
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

export default function Pots() {
  const [value, setValue] = React.useState(0);
  const linearGradient = 'linear-gradient(to right, #42f5f2, #bf267f)';
  return (
    < >
      <Grid sx={12} style={{ width: "100%", height: "100px", textAlign: "center", paddingTop: "30px", fontSize: "40px", backgroundImage: linearGradient, backgroundSize: "cover", marginTop: "20px" }} >
        Pots
      </Grid>
      <Grid container rowspacing={2} style={{ marginLeft: "70px", marginTop: "30px", marginRight: "30px" }}>
        {/*Winking Girl*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/winking_girl_with_polka_resinpot_1_500x.jpg?v=1582112105"
              alt="Winking Girl"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Winking Girl with Polka Resin Succulent Pot
              </Typography>
              <Typography variant="h5" color="green">
                Rs.549.00
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
        {/* Cute Pigs*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/cute_pigs_playing_1_500x.jpg?v=1571438615"
              alt="Cute Pigs"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Cute Pigs Playing Resin Succulent Pot
              </Typography>
              <Typography variant="h5" color="green">
                Rs.649.00
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
              <Button variant="contained" color="success" style={{marginLeft:"100px"}}>
        Add To Cart
      </Button>
            </CardActions>
          </Card>
        </Grid>
        {/*Cute Prince Sitting */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/cute_prince_Sitting_with_fox_1_500x.jpg?v=1571438614"
              alt="Cute Prince Sitting"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Cute Prince Sitting with Fox Resin Succulent Pot
              </Typography>
              <Typography variant="h5" color="green">
              ₹499.00
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
              <Button variant="contained" color="success" style={{marginLeft:"100px"}}>
        Add To Cart
      </Button>
            </CardActions>
          </Card>
        </Grid>
        {/*Cosy Home Resin Succulent Pot*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/cosy_home_resinpot_3_500x.jpg?v=1571438637"
              alt="Cosy Home Resin Succulent Pot"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Cosy Home Resin Succulent Pot
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.774.00
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
              <Button variant="contained" color="success" style={{marginLeft:"100px"}}>
        Add To Cart
      </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Designer Elephant */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 , marginTop: "30px"}}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/IMG_8373_500x.jpg?v=1580020235"
              alt="Designer Elephant "
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Designer Elephant Ceramic Planter
              </Typography>
              <Typography variant="h5" color="green">
                 Rs.375.00
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
              <Button variant="contained" color="success" style={{marginLeft:"100px"}}>
        Add To Cart
      </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Pastel Apple*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
            <CardMedia
              component="img"
              height="194"
              image="https://cdn.shopify.com/s/files/1/0284/2450/products/apple_turqouise_blue_tray_2_180x.jpg?v=1580019798"
              alt="Pastel Apple"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Pastel Apple Ceramic Pot With Tray
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.375.00
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
              <Button variant="contained" color="success" style={{marginLeft:"100px"}}>
        Add To Cart
      </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* 10" Fish Pot Planter With Neck*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/T30_1_500x.jpg?v=1591538198"
              alt="10 Fish Pot Planter With Neck"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              10" Fish Pot Planter With Neck
              </Typography>
              <Typography variant="h5" color="green">
                Rs.1000.00
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
              <Button variant="contained" color="success" style={{marginLeft:"100px"}}>
        Add To Cart
      </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Bullock Cart Pot Stand */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 , marginTop: "30px"}}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/bullock_stand_3_500x.jpg?v=1591537992"
              alt="Bullock Cart Pot Stand "
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Bullock Cart Pot Stand
              </Typography>
              <Typography variant="h5" color="green">
                Rs.2450.00
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
              <Button variant="contained" color="success" style={{marginLeft:"100px"}}>
        Add To Cart
      </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Terracotta Bowl Planter*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/newhangingpot1_500x.jpg?v=1571438594"
              alt="Terracotta Bowl Planter"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Terracotta Bowl Planter
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.1500.00
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
              <Button variant="contained" color="success" style={{marginLeft:"100px"}}>
        Add To Cart
      </Button>
            </CardActions>
          </Card>
        </Grid>
        
        {/*Hanging Window Planter*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 , marginTop: "30px"}}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/windowplanter_1_500x.jpg?v=1586250779"
              alt="Hanging Window Planter"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Hanging Window Planter
              </Typography>
              <Typography variant="h5" color="green">
              Rs.2,120
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
              <Button variant="contained" color="success" style={{marginLeft:"100px"}}>
        Add To Cart
      </Button>
            </CardActions>
          </Card>
        </Grid>
        
        {/* QUBO Serene Blue Flower*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/C1003_5_500x.jpg?v=1657538306"
              alt="QUBO Serene Blue Flower"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              QUBO Serene Blue Flower Handmade Wooden Indoor Planter Pot
              </Typography>
              <Typography variant="h5" color="green">
              Rs.3,600
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
              <Button variant="contained" color="success" style={{marginLeft:"100px"}}>
        Add To Cart
      </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Coir Basket with hanger-Set of 2*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345, marginTop: "30px" }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/JGCH0010_JGCH0012_225x.jpg?v=1586250848"
              alt="Coir Basket with hanger-Set of 2"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Coir Basket with hanger-Set of 2
              </Typography>
              <Typography variant="h5" color="green">
              Rs.3,600
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
              <Button variant="contained" color="success" style={{marginLeft:"100px"}}>
        Add To Cart
      </Button>
            </CardActions>
          </Card>
        </Grid>
        

      </Grid>
    </>
  );
}
