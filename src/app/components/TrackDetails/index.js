import { connect } from 'react-redux';

import selector from './selector';
import actions from './actions';
import { TrackDetailsView } from './views/TrackDetailsView';

export const TrackDetails = connect(selector, actions)(TrackDetailsView);