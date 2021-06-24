import React, { useState } from "react";
//import ImmutablePropTypes from "react-immutable-proptypes";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../theme";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    IconButton,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    avatar: {
      backgroundColor: colors.primaryLighten30,
    },
}));

function ExpeditionCard({ bird }) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    return (
      <Grid
        xs={12}
        sm={6}
        md={4}>
          <Card className={classes.card}>
            <CardHeader
              // avatar={
              // <Avatar
              //   aria-label="recipe"
              //   style={{ color: "white" }}
              // >
              //   {//expedition.get("name")
              //   }
              // </Avatar>
              // }
              //title={expedition.get("name")}
              title={bird.get("common_name")}
              subheader="Nombre comuncito"
            >
            <CardMedia
              className={classes.media}
              image="C:\Users\Mayumi\Documents\PDG\WikiAves-gamification-module\WikiAves-UI\src\assets\bitd1.jpg"
              title="Paella dish"
            />
            <CardContent className={classes.cardContent}>
              <Typography
                style={{ color: colors.grey800 }}
              >
                Fecha: 23-07-1999
                {
                  //expedition.get("expeditionDate")
                }
              </Typography>
              <Typography
                style={{ color: colors.grey800 }}
              >
                {
                  //expedition.get("expeditionRegion")
                }
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => setOpen(true)}
              >
                <VisibilityIcon style={{ marginRight: "5px" }} />
                {"Ver  avistamientos"}
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => setOpen(true)}
              >
                <ThumbUpIcon style={{ marginRight: "5px" }} />
                {"4"}
              </Button>
            </CardActions>
            </CardHeader>
          </Card>
      </Grid>
    );
}

ExpeditionCard.propTypes = {
    //expedition: ImmutablePropTypes.map.isRequired,
    index: PropTypes.number.isRequired,
    openSightings: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default ExpeditionCard;