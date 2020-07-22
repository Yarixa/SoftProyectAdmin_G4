import React from 'react';
import Grid from '@material-ui/core/Grid';
import DocConstruccion from './DocConstruccion';
import DocTesting from './DocTesting';
import DocDiseño from './DocDiseño';
import DocRequisitos from './DocRequisitos';
export default function RecipeReviewCard() {

    return (
     <div>
        <Grid container spacing={1}>
            <DocRequisitos/>
            <DocDiseño/>
            <DocConstruccion/>
            <DocTesting/>
        </Grid>

    </div>




    );
}