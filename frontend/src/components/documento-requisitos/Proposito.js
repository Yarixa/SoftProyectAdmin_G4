import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import {Container} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        margin: "1em",
        minWidth: "1000px",
        boxSizing: "border-box"
    },
    TextField: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '100%',
        },
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
    button: {
        margin: theme.spacing(1),
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
                {/* Propósito */}
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatarR}>
                                P
                            </Avatar>
                        }
                        title="Propósito"
                        subheader="Última modificación: 18 Julio 2020 "
                    />
                    <CardActions disableSpacing>

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
                            <Typography variant="body2" color="textSecondary" component="p">
                                <form className={classes.TextField} noValidate autoComplete="off">
                                    <div>
                                        <TextField
                                        id="outlined-multiline-static"
                                        label="Propósito"
                                        multiline
                                        rows={10}
                                        defaultValue="Escribe aquí el propósito del proyecto"
                                        variant="outlined"
                                        />
                                    </div>
                                </form>
                                <Container>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    className={classes.button}
                                    startIcon={<SaveIcon />}
                                >
                                    Guardar

                                </Button>
                            </Container>
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>


        </div>



    );
}