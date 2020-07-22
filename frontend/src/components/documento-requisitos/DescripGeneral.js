import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "1em",
        minWidth: "250px",
        boxSizing: "border-box"
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

    avatar: {
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
            {/* Descripción General */}
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            D
                        </Avatar>
                    }
                    title="Descripción General"
                    subheader="Última modificación: 18 Julio 2020 "
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="ver">
                        <VisibilityIcon/>
                    </IconButton>
                    <IconButton aria-label="editar">
                        <EditIcon />
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
                        <Typography paragraph>Descripción General:</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Descripción General del Proyecto.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>


        </div>



    );
}