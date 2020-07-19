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

    avatarC: {
        backgroundColor: '#007EDC',
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expandedC, setExpandedC] = React.useState(false);

    const handleExpandClickC = () => {
        setExpandedC(!expandedC);
    };


    return (
        <div>
                {/* Construcción */}
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatarC}>
                                C
                            </Avatar>
                        }
                        title="Documento de Construcción de Software"
                        subheader="última modificación: 18 Julio 2020 "
                    />
                    <CardContent>
                        <Typography paragraph>Avance:</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            80%
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
                                [classes.expandOpen]: expandedC,
                            })}
                            onClick={handleExpandClickC}
                            aria-expanded={expandedC}
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expandedC} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Descripción:</Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                se refiere a la creación de software productivo y significativo a través
                                de los procesos de codificación,verificación, pruebas unitarias,
                                pruebas de integración y depuración de errores.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>

        </div>



    );
}