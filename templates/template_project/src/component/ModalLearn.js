import React, { Component } from 'react';
import { Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { closeModal } from '../actions/ModalLearn';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import CloseIcon from '@material-ui/icons/Close';

class ModalLearn extends Component {
    render() {
        const { fullScreen, open, closeModal, classes, item } = this.props;
        return (
            <Dialog fullScreen={fullScreen} open={open} onClose={closeModal} aria-labelledby="responsive-dialog-title">
                <DialogTitle>
                    {'Info'}
                    <IconButton aria-label="close" className={classes.closeButton} onClick={closeModal}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>{item.text}</DialogContentText>
                    {item.content}
                </DialogContent>
            </Dialog>
        );
    }
}

const style = theme => ({
    closeButton: {
        position: 'absolute',
        right: theme.spacing.unit,
        top: theme.spacing.unit,
        color: theme.palette.grey[500],
    },
});

const MapStateToProps = state => ({
    open: state.ModalLearn.open,
    item: state.ModalLearn.item,
});

const MapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
});

export default withStyles(style)(
    withMobileDialog()(
        connect(
            MapStateToProps,
            MapDispatchToProps,
        )(ModalLearn),
    ),
);
