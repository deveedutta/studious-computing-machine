import { combineReducers } from 'redux';
import CampaignReducer from './CampaignReducer';


export default combineReducers({
  campaigns: CampaignReducer
});