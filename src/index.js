import React from 'react';
import { render } from 'react-dom';

import './styles/common.less';

import App from './components/app';

const init = () => {
    render(
        <App />,
        document.getElementById('app')
    );
}

document.addEventListener('DOMContentLoaded', init);