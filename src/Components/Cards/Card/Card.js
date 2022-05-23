import React from "react";
import { Card, Typography, CardContent, CardMedia } from "@material-ui/core";
import 'tachyons'

const CardComponent = ({name, url, username, img}) => {

    return (<Card>
        <CardMedia>
            <img src={img} alt="" height='100%' className="grow" />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6">
           Character: {username}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <a href={url} target='_blank' rel='noreferrer' >Learn more here!</a>
          </Typography>
        </CardContent>
    </Card>)
}

export default CardComponent;