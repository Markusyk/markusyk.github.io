import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    flexed: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
}));

export default function PageWrapper() {
    const classes = useStyles();

    return (
            <div className={classes.root}>
                <CssBaseline/>
                <Header/>
                <Sidebar/>
                <Content/>
            </div>
    );
}
