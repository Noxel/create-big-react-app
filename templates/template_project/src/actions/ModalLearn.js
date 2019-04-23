export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAl = 'CLOSE_MODAL';

export const closeModal = () => dispatch => dispatch({ type: CLOSE_MODAl });
export const openModal = item => dispatch => dispatch({ type: OPEN_MODAL, item: item });
