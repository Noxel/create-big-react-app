import { CLOSE_MODAl, OPEN_MODAL } from '../actions/ModalLearn';

const init = {
    open: false,
    item: {},
};

export default (state = init, actions) => {
    switch (actions.type) {
        case OPEN_MODAL:
            return { ...state, open: true, item: actions.item };
        case CLOSE_MODAl:
            return { ...state, open: false };
        default:
            return { ...state };
    }
};
