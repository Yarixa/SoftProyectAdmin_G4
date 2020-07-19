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

    avatarT: {
        backgroundColor:'#ffd600',
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expandedT, setExpandedT] = React.useState(false);
    const handleExpandClickT = () => {
        setExpandedT(!expandedT);
    };

    return (
        <div>
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatarT}>
                                T
                            </Avatar>
                        }
                        title="Documento de Testeo de Software"
                        subheader="última modificación: 18 Julio 2020 "
                    />
                    <CardContent>
                        <Typography paragraph>Avance:</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            20%
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
                                [classes.expandOpen]: expandedT,
                            })}
                            onClick={handleExpandClickT}
                            aria-expanded={expandedT}
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expandedT} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Descripción:</Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                El documento de Testeo de software, se desarrolla la evaluación de la calidad del producto,
                                con el fin de identificar los defectos y problemas de este, para posteriormente mejorarlo.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>

        </div>


    );
}