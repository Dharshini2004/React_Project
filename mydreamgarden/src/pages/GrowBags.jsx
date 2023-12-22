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

export default function GrowBags() {
  const [value, setValue] = React.useState(0);
  const linearGradient = 'linear-gradient(to right, #42f5f2, #bf267f)';
  
  return (
    < >
      <Grid sx={12} style={{ width: "100%", height: "100px", textAlign: "center", paddingTop: "30px", fontSize: "40px", backgroundImage: linearGradient, backgroundSize: "cover", marginTop: "20px" }} >
        Plant Grow Bags
      </Grid>
      <Grid container rowspacing={2} style={{ marginLeft: "70px", marginTop: "30px", marginRight: "30px" }}>
        {/*HDPE Grow Bag*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://bazodo.com/1961-large_default/09-x-09-inchdia-x-height-hdpe-grow-baground-220-gsm.jpg"
              alt="HDPE Grow Bag"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              HDPE Grow Bag(Round) - 220 GSM
              </Typography>
              <Typography variant="h5" color="green">
                Rs.28.00
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
        {/* HDPE Grow Bag */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://bazodo.com/722-home_default/bazodo-hdpe-grow-bag-36-x-36-x-12-inch-3-x-3-x-1-feet-rectangular.jpg"
              alt="HDPE Grow Bag"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              HDPE Square Grow bag - 220 GSM
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.298.00
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
        {/* Rectangular Grow Bag */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://bazodo.com/1713-home_default/36-x-24-x-12-inch-3-x-2-x-1-ft-220-gsm-hdpe-rectangular-grow-bag-with-supporting-pvc-pipes.jpg"
              alt="Rectangular Grow Bag"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Rectangular Grow Bag With Supporting Pvc Pipes
              </Typography>
              <Typography variant="h5" color="green">
              ₹750.00
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
        {/* 24 X 18 Inch(Dia X Height) HDPE Grow Bag(Round) - 220 GSM */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://bazodo.com/251-home_default/bazodo-hdpe-grow-bag-24-x-18-inch-2-x-15-feet-round.jpg"
              alt="Beetroot Hybrid"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              HDPE Grow Bag
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.750.00
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
        {/* HDPE Grow Bag (Round)  */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://bazodo.com/1641-large_default/12-x-12-inch-dia-x-height-hdpe-grow-bag-round-400-gsm.jpg"
              alt="HDPE Grow Bag (Round) "
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              12 x 12 Inch (Dia X Height) HDPE Grow Bag (Round) - 400 GSM
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.85.00
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
        {/* HDPE Grow Bag*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://bazodo.com/2018-large_default/09-x-09-inch-dia-x-height-hdpe-grow-baground-220-gsm-with-handles-support.jpg"
              alt="HDPE Grow Bag"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              HDPE Grow Bag(Round) - 220 GSM- With Handles Support
              </Typography>
              <Typography variant="h5" color="green">
                From Rs.48.00
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
        {/* HDPE Square Grow Bag - 220 GSM*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://bazodo.com/710-home_default/bazodo-hdpe-grow-bag-12-x-12-x-12-inch-1-x-1-x-1-feet-rectangular.jpg"
              alt="HDPE Square Grow Bag - 220 GSM"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              12 X 12 X 12 Inch(Length X Breadth X Height) HDPE Square Grow Bag - 220 GSM
              </Typography>
              <Typography variant="h5" color="green">
                Rs.74.00
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
        {/* Vermibed  */}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://bazodo.com/642-large_default/vermibed-12-x-4-x-2-400-gsm-hdpe-quality-laminated-uv-treated-7-years-life-vermicompost-bed-bazodo.jpg"
              alt="Vermibed "
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Vermibed - HDPE Quality Laminated
              </Typography>
              <Typography variant="h5" color="green">
                Rs.1700.00
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
        {/* Azolla Bed*/}
        <Grid item xs={4} >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="https://bazodo.com/1130-large_default/bazodo-azolla-bed-144-x-48-x-24-inch-12-x-4-x-1-feet-for-azolla-cultivation.jpg"
              alt="Azolla Bed"
            />
            <CardContent>
              <Typography variant="h5" color="text.primary">
              Azolla Bed-for Azolla Cultivation 400 GSM
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
        

      </Grid>
    </>
  );
}
