import React, { Component } from 'react';
import './style.scss';
import { GridList, GridListTileBar, IconButton } from '@material-ui/core';
import GridListTile from '@material-ui/core/GridListTile';
import withStyles from '@material-ui/core/styles/withStyles';
import InfoIcon from '@material-ui/icons/Info';

//logo
import ReactLogo from '../../media/icon/logo.svg';
import ReduxLogo from '../../media/icon/redux.svg';
import MaterialLogo from '../../media/icon/material-ui-logo.svg';
import RouterLogo from '../../media/icon/react_router.png';
import EslintLogo from '../../media/icon/eslint.svg';
import { openModal } from '../../actions/ModalLearn';
import { connect } from 'react-redux';

class MainPage extends Component {
    render() {
        const learn = [
            {
                title: 'React',
                link: 'https://reactjs.org',
                img: ReactLogo,
                loop: true,
                modal: { text: 'Edit src/screen/MainPage/index.js and save to reload.', content: '' },
            },
            {
                title: 'Material-ui',
                link: 'https://material-ui.com',
                img: MaterialLogo,
                loop: false,
                modal: { text: 'Edit your theme in src/index.js', content: '' },
            },
            {
                title: 'Redux',
                link: 'https://redux.js.org',
                img: ReduxLogo,
                loop: true,
                modal: { text: 'Edit src/reducer/reducer.js and add your reducer', content: '' },
            },
            {
                title: 'React-Router',
                link: 'https://reacttraining.com/react-router/web',
                img: RouterLogo,
                loop: false,
                modal: {
                    text: 'Edit src/screen/AppRouter.js and add a path, you can also add your modal',
                    content: '',
                },
            },
            {
                title: 'eslint',
                link: 'https://eslint.org',
                img: EslintLogo,
                loop: true,
                modal: { text: 'Edit .eslintrc.js and add your rule for a better coding experience', content: '' },
            },
        ];
        const { classes, openModal } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <h1> Template_Project a useful template with multiple technologies : </h1>
                    <div className={classes.root}>
                        <GridList className={classes.gridList} cols={-1}>
                            {learn.map((tile, index) => (
                                <GridListTile key={index} className={classes.gridTile}>
                                    <a href={tile.link} target={'_blank'} rel={'noopener'}>
                                        <img
                                            src={tile.img}
                                            alt={tile.title}
                                            className={tile.loop ? 'App-logo' : 'App-logo-noL'}
                                        />
                                        <GridListTileBar
                                            title={tile.title}
                                            actionIcon={
                                                <IconButton
                                                    className={classes.icon}
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        openModal(tile.modal);
                                                    }}
                                                >
                                                    <InfoIcon />
                                                </IconButton>
                                            }
                                        />
                                    </a>
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </header>
            </div>
        );
    }
}
const style = () => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        marginTop: '10VW',
    },
    gridList: {
        width: '100vw',
        flexWrap: 'nowrap',
    },
    gridTile: {
        width: '40vw',
        minWidth: '200px',
        maxWidth: '600px',
    },
    icon: {
        color: 'rgba( 255, 255, 255, 0.54)',
    },
});

const MapDispatchToProps = dispatch => ({
    openModal: item => dispatch(openModal(item)),
});

export default withStyles(style)(
    connect(
        null,
        MapDispatchToProps,
    )(MainPage),
);
