import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
import { Card, Button } from "react-bootstrap";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
// });

export default function ImgMediaCard() {
  // const classes = useStyles();

  return (
    // <Card className={classes.root}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="video"
    //       className={classes.media}
    //       image={"../w01_z07.mov"}
    //       autoPlay
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         Embryo
    //       </Typography>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //         Embryo
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    //   <CardActions>
    //     <Button size="small" color="primary">
    //       Share
    //     </Button>
    //   </CardActions>
    // </Card>

    <Card style={{ width: "18rem" }}>
      <video
        className="video"
        playsInline="playsinline"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src="../w01_z07.mov" type="video/mp4"></source>
      </video>
      <Card.Body>
        <Card.Title>Embryo 1</Card.Title>
        <Card.Text>...Status</Card.Text>
        <Button variant="primary">Full Screen</Button>
      </Card.Body>
    </Card>
  );
}
