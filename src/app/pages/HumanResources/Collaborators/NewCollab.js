import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Grid, Link, TextField, Typography
} from '@material-ui/core';
import { TiLocationOutline, TiMail } from 'react-icons/ti';
import Styles from './Styles-jss';
import Informations from './Informations/Informations';

function NewCollab(props) {
    const classes = Styles();
    const history = useHistory();
    return (
        <>
            <Grid container spacing={0} direction="column" className="card">
                <Grid item xs={12}>
                    <div className={[classes.root, 'card-header'].join(' ')}>
                        <div className="row align-items-start flex-column">
                            <Typography variant="h6" id="tableTitle" className="">
                                Création d&apos;un collaborateur
                            </Typography>
                            <Typography variant="subtitle1" id="tableSubTitle" className="">
                                Veuillez renseigner les informations du nouveau collaborateur.
                            </Typography>
                        </div>
                        <div className="col-lg-6 text-lg-right">
                            <div className="btn-group">
                                <button type="button" className="btn btn-primary font-weight-bolder">
                                    <i className="ki ki-check icon-sm" />
                                    Sauvegarder
                                </button>
                            </div>

                        </div>
                    </div>
                </Grid>
                <Informations />

            </Grid>
        </>
    );
}

export default NewCollab;
