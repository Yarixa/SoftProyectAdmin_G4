import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from "@material-ui/core/Grid";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import GetAppIcon from "@material-ui/icons/GetApp";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 270,
    },
    media: {
        height: 0,
        paddingTop: '50%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatarD: {
        backgroundColor: '#2DA64E',
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expandedD, setExpandedD] = React.useState(false);

    const handleExpandClickD = () => {
        setExpandedD(!expandedD);
    };

    return (
        <div>
                {/* Diseño */}
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatarD}>
                                D
                            </Avatar>
                        }
                        title="Documento de Diseño de Software"
                        subheader="última modificación: 18 Julio 2020 "
                    />
                    <CardContent>
                        <Typography paragraph>Avance:</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            50%
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="ver">
                            <VisibilityIcon/>
                        </IconButton>
                        <IconButton aria-label="editar">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="descargar">
                            <GetAppIcon />
                        </IconButton>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expandedD,
                            })}
                            onClick={handleExpandClickD}
                            aria-expanded={expandedD}
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expandedD} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Descripción:</Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                El documento de diseño de software, es una descripción escrita del un producto de software,
                                en donde un diseñador de software escribe con el fin de dar un equipo de desarrollo de software orientado,
                                generalmente, a la arquitectura de un proyecto.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>

        </div>
);
}