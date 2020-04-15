import { connect } from 'react-redux';

import selector from './selector';
import actions from './actions';
import { RootPageView } from './views/RootPageView';

export const RootPage = connect(selector, actions)(RootPageView);