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
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import GetAppIcon from '@material-ui/icons/GetApp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 270,
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
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
    avatarR: {
        backgroundColor: red[500],
    },

}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expandedR, setExpandedR] = React.useState(false);
    const handleExpandClickR = () => {
        setExpandedR(!expandedR);
    };

    return (
        <div>
                {/* Requisitos */}
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatarR}>
                                R
                            </Avatar>
                        }
                        title="Documento de Requisitos de Software"
                        subheader="Última modificación: 18 Julio 2020 "
                    />
                    <CardContent>
                        <Typography paragraph>Avance:</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            30%
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
                                [classes.expandOpen]: expandedR,
                            })}
                            onClick={handleExpandClickR}
                            aria-expanded={expandedR}
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expandedR} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Descripción:</Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                El documento de requerimientos de software, es el lugar donde se da
                                descripción a las características y requisitos de un software, producto, programa
                                o conjunto de programas. Los requisitos se expresan en lenguaje natural, sin
                                consideraciones ni términos técnicos.
                                La especificación de requisitos de software es el resultado del levantamiento
                                de información con el usuario o cliente del producto.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>


        </div>



    );
}