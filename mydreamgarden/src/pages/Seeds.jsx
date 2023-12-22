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
const handleAddToCart = () => {
  // Alert logic goes here
  alert('Item added to the cart');
};
export default function FullWidthGrid() {
  const [value, setValue] = React.useState(0);
  const linearGradient = 'linear-gradient(to right, #42f5f2, #bf267f)';
  return (
    < >
      <Grid sx={12} style={{ width: "100%", height: "100px", textAlign: "center", paddingTop: "30px", fontSize: "40px", backgroundImage: linearGradient, backgroundSize: "cover", marginTop: "20px" }} >
        Vegetable Seeds
      </Grid>
      <Grid container rowspacing={2} style={{ marginLeft: "70px", marginTop: "30px", marginRight: "30px" }}>
        {/*Beetroot */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://cdn.shopify.com/s/files/1/0284/2450/products/beetroot_2_180x.jpg?v=1571438538"
              alt="Beetroot"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Beetroot - Chukandar Vegetable Seeds
              </Typography>
              <Typography variant="h5" color="green">
                Rs.20.00
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

              <Button variant="contained" color="success" style={{ marginLeft: "100px" }} onClick={handleAddToCart}>
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* BEETROOT HYBRID */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://cdn.shopify.com/s/files/1/0284/2450/products/R.Q-2_360x.jpg?v=1595330935"
              alt="Beetroot Hybrid"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Beetroot Indum - Ruby Queen Vegetable Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.40.00
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
        {/* Better Gaurd */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://cdn.shopify.com/s/files/1/0284/2450/products/IMG_0189_180x.jpg?v=1595330133"
              alt="bettergaurd"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Bittergourd Kohinoor(HY) Vegetable Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.60.00
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
        {/* Better Gaurd Hybrid */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://cdn.shopify.com/s/files/1/0284/2450/products/INDAMTAJ4625_360x.jpg?v=1595327966"
              alt="Beetroot Hybrid"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Bittergourd Taj-4625 (HY) Vegetable Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.60.00
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
        {/* Bottlegaurd */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://cdn.shopify.com/s/files/1/0284/2450/products/Bottle_Gourd_360x.jpg?v=1571438537"
              alt="Bottlegaurd"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Bottle Guard - Lauki Vegetable Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.20.00
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
        {/* Bottlegaurd Hybrid */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://cdn.shopify.com/s/files/1/0284/2450/products/Bottlegourds_06_360x.jpg?v=1595761242"
              alt="Bottlegaurd Hybrid"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Bottleguard Indam-204 (HY) Vegetable Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.60.00
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
        {/* Brinjal Hybrid */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://cdn.shopify.com/s/files/1/0284/2450/products/INDAM_HYBRID_GREEN_360x.jpg?v=1571438551"
              alt="Brinjal Hybrid"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Brinjal Hybrid Green [HY] Vegetable Seeds
              </Typography>
              <Typography variant="h5" color="green">
                Rs.60.00
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
        {/* Brinjal Indam Jeeva */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://cdn.shopify.com/s/files/1/0284/2450/products/INDAMTAJ4625_360x.jpg?v=1595327966"
              alt="Beetroot Hybrid"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Brinjal Indam Jeeva (HY) Vegetable Seeds
              </Typography>
              <Typography variant="h5" color="green">
                Rs.60.00
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
        {/* Brinjal Indam-614 Hybrid */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://cdn.shopify.com/s/files/1/0284/2450/products/INDAM_JEEVA_360x.jpg?v=1571438551"
              alt="Brinjal Indam-614 Hybrid"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Brinjal Indam-614 (HY) Vegetable Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.60.00
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
        {/* Brinja; Supriya Hybrid */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://cdn.shopify.com/s/files/1/0284/2450/products/INDAM_SUPRIYA_360x.jpg?v=1571438551"
              alt="Brinja; Supriya"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Brinjal Supriya (HY) Vegetable Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.60.00
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
        {/* Cabbage*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://cdn.shopify.com/s/files/1/0284/2450/products/Cabbage_1_360x.jpg?v=1571438537"
              alt="Cabbage"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Cabbage - Patta Goghee Vegetable Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.20.00
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
        {/* Cabbage Hybrid */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://cdn.shopify.com/s/files/1/0284/2450/products/INDAMKRISHNA_360x.jpg?v=1595337831"
              alt="Cabbage Hybrid"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Cabbage Indam Krishna (HY) Vegetable Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.60.00
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
        {/* Capsicum */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://cdn.shopify.com/s/files/1/0284/2450/products/INDAM_BHARATH_360x.jpg?v=1571438551"
              alt="Capsicum"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Capsicum Bharath (HY) Vegetable Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.60.00
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
        {/* Carrot Gaajar */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://cdn.shopify.com/s/files/1/0284/2450/products/Carrot_360x.jpg?v=1571438537"
              alt="Carrot Gaajar"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Carrot Gaajar Vegetable Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.60.00
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
        {/* Chilli */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://cdn.shopify.com/s/files/1/0284/2450/products/chili-pepper_360x.jpg?v=1571438538"
              alt="Chilli"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Chilli 0 Haree Mirchi Vegetable Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.20.00
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

      {/* Flower Seeds */}
      <Grid sx={12} style={{ width: "100%", height: "100px", textAlign: "center", paddingTop: "30px", fontSize: "40px", backgroundImage: linearGradient, backgroundSize: "cover", marginTop: "20px" }} >
        Flower Seeds
      </Grid>
      <Grid container rowspacing={2} style={{ marginLeft: "70px", marginTop: "30px", marginRight: "30px" }}>
        {/*Alyssum Easter */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://cdn.shopify.com/s/files/1/0284/2450/products/beetroot_2_180x.jpg?v=1571438538"
              alt="Alyssum Easter"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
                Alyssum Easter Basket Mix Flower Seeds
              </Typography>
              <Typography variant="h5" color="green">
                Rs.45.00
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
        {/*Celosia Cristata */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/celosia-cristata_500x.jpg?v=1571438547"
              alt="Celosia Cristata"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Celosia Cristata Dwarf Mix Flower Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.55.00
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
        {/* Celosia Plumosa */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/Celosia-Plumosa-Dwarf-Carmine_pink_500x.jpg?v=1571438546"
              alt="Celosia Plumosa"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Celosia Plumosa Glow Pink Flower Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.55.00
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
        {/* Coleus Wizard  */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/Coleus-Wizard-Mix_500x.jpg?v=1571438546"
              alt="Coleus Wizard "
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Coleus Wizard Mix Flower Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.55.00
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
        {/* Daddy Mix Petunia */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/PETunia_daddy_mix_500x.JPG?v=1571438555"
              alt="Daddy Mix Petunia"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Daddy Mix Petunia Flower Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.20.00
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
        {/* Gaillardia Mesa Yellow */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/GAILLARDIA_500x.JPG?v=1571438546"
              alt="Gaillardia Mesa Yellow"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Gaillardia Mesa Yellow -HY Flower Seeds
              </Typography>
              <Typography variant="h5" color="green">
                 Rs.65.00
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
        {/* Gazenia Sunshine */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/GAZania_sunshine_mix_500x.jpg?v=1571438555"
              alt="Gazenia Sunshine"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Gazenia Sunshine Mix Flower Seeds
              </Typography>
              <Typography variant="h5" color="green">
                Rs.55.00
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
        {/* Gerbera Mega*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/Gerbera_1_300x.jpg?v=1571438547"
              alt="Gerbera Mega"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Gerbera Mega Revolution Formula Mix-HY Flower Seeds
              </Typography>
              <Typography variant="h5" color="green">
                Rs.160.00
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
        {/* Dianthus Ideal */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/Dianthus-Ideal-formula-Mix_500x.jpg?v=1571438546"
              alt="Dianthus Ideal"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Dianthus Ideal Formula Mix Flower Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.65.00
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
        {/*Marigold Inca Orange*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/Marigold_Garland_Orange_bffaf473-2128-4ad8-a480-dbb5c649ae79_500x.jpg?v=1571438547"
              alt="Marigold Inca Orangea"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Marigold Inca Orange-HY Flower Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.55.00
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
        {/* Gazenia Sunshine*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/GAZania_sunshine_mix_500x.jpg?v=1571438555"
              alt="Gazenia Sunshine"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Gazenia Sunshine Mix Flower Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.55.00
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
        {/* Petunia (DBL) Double Duo  */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/Pitunia_Double_Duo_Mix_225x.jpg?v=1571438547"
              alt="Petunia (DBL) Double Duo "
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Petunia (DBL) Double Duo Mix Pelleted-HY Flower Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.55.00
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
        {/* Petunia (SGL) Dreams  */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/PetuniaPicoteemix_500x.jpg?v=1670846280"
              alt="Petunia (SGL) Dreams "
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Petunia (SGL) Dreams Picotee Mix -HY Flower Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.60.00
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
        {/* Snapdragon */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/Snapdragon1_500x.jpg?v=1571438548"
              alt="Snapdragon"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Snapdragon Dwarf F1 Snap Shot Flower Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.60.00
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
        {/*Ipomoea */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://mybageecha.com/cdn/shop/products/Heavenly_Blue_MG_400x.JPG?v=1571438547"
              alt="Ipomoea"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Ipomoea Clarke's Heavenly Blue Flower Seeds
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.55.00
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
