/**
 * Created by huangchengwen on 2017/6/12.
 */
import { Component, PropTypes } from 'react';

class ComponentModal extends Component {

    static propTypes = {
        show: PropTypes.bool
    };

    constructor(props, context) {
        super(props, context);

    }

    onTouchMove(e) {
        e.preventDefault();
    }
}

export default ComponentModal;