import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

import selector from './selector';
import actions from './actions';
import { RootPageView } from './views/RootPageView';

export const RootPage = connect(selector, actions)(withRouter(RootPageView));