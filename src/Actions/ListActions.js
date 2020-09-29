import Axios from '../Mock/Axios';


const FETCH_CAMPAIGNS = 'FETCH_CAMPAIGNS';
const FETCH_CAMPAIGNS_BY_PAGE = 'FETCH_CAMPAIGNS_BY_PAGE';
const CAMPAIGNS_FETCH_SUCCESS = 'CAMPAIGNS_FETCH_SUCCESS';
const CAMPAIGNS_FETCH_FAILED = 'CAMPAIGNS_FETCH_FAILED';

const DELETE_CAMPAIGN_START = 'DELETE_CAMPAIGN_START';
const DELETE_CAMPAIGN_SUCCESS = 'DELETE_CAMPAIGN_SUCCESS';
const DELETE_CAMPAIGN_FAILED = 'DELETE_CAMPAIGN_FAILED';


const loadCampaigns = () => {
  return (dispatch) => {
    dispatch({type: FETCH_CAMPAIGNS});

    Axios.get(`https://someurl.com/all`)
    .then((response) => {
      dispatch(campaignFetchSuccess(response));
    })
    .catch((err) => {
      dispatch(campaignFetchFailed(err));
    });
  }
}

const loadCampaignsByPage = (param) => {
  return (dispatch) => {
    dispatch({type: FETCH_CAMPAIGNS_BY_PAGE });
    Axios.get(`https://someurl.com/${param}`)
    .then((response) => {
      dispatch(campaignFetchSuccess(response));
    })
  }
}

const campaignFetchSuccess = campaigns => {
  return {
    type: CAMPAIGNS_FETCH_SUCCESS,
    info: 'Loading campaigns succeeded',
    payload: campaigns
  }
}

const campaignFetchFailed = error => {
  return {
    type: CAMPAIGNS_FETCH_FAILED,
    info: 'Loading campaigns failed',
    payload: error
  }
}


const deleteCampaign = (param) => {
  return (dispatch) => {
    dispatch({type: DELETE_CAMPAIGN_START });

    Axios.get(`https://someurl.com/delete/campaign/${param}`)
    .then((response) => {
      dispatch(deleteCampaignSuccess(response));
    })
    .catch((err) => {
      dispatch(deleteCampaignFailed(err));
    });
  }
}


const deleteCampaignSuccess = campaigns => {
  return {
    type: DELETE_CAMPAIGN_SUCCESS,
    info: 'Deleting campaign succeeded',
    payload: campaigns
  }
}

const deleteCampaignFailed = error => {
  return {
    type: DELETE_CAMPAIGN_FAILED,
    info: 'Deleting campaign failed',
    payload: error
  }
}


const ListActions = {
  loadCampaigns,
  loadCampaignsByPage,
  campaignFetchSuccess,
  campaignFetchFailed,
  deleteCampaign,
  deleteCampaignSuccess,
  deleteCampaignFailed
}


export default ListActions;