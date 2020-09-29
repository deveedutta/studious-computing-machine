const initialState = {
  campaigns: [],
  loading: false,
  error: ''
};

const FETCH_CAMPAIGNS = 'FETCH_CAMPAIGNS';
const FETCH_CAMPAIGNS_BY_PAGE = 'FETCH_CAMPAIGNS_BY_PAGE';
const CAMPAIGNS_FETCH_SUCCESS = 'CAMPAIGNS_FETCH_SUCCESS';
const CAMPAIGNS_FETCH_FAILED = 'CAMPAIGNS_FETCH_FAILED';

const DELETE_CAMPAIGN_START = 'DELETE_CAMPAIGN_START';
const DELETE_CAMPAIGN_SUCCESS = 'DELETE_CAMPAIGN_SUCCESS';
const DELETE_CAMPAIGN_FAILED = 'DELETE_CAMPAIGN_FAILED';



const CampaignReducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCH_CAMPAIGNS:
    return {
      ...state,
      loading: true
    }

    case FETCH_CAMPAIGNS_BY_PAGE:
    return {
      ...state,
      loading: true
    }

    case CAMPAIGNS_FETCH_SUCCESS:
    return {
      ...state,
      campaigns: action.payload,
      loading: false
    }

    case CAMPAIGNS_FETCH_FAILED:
    return {
      ...state,
      campaigns: [],
      error: action.payload,
      loading: false
    }

    case DELETE_CAMPAIGN_START:
    return {
      ...state,
      loading: true
    }

    case DELETE_CAMPAIGN_SUCCESS:
    return {
      ...state,
      campaigns: action.payload,
      loading: false
    }

    case DELETE_CAMPAIGN_FAILED:
    return {
      ...state,
      campaigns: [],
      error: action.payload,
      loading: false
    }

    default:
    return state;
  }

}

export default CampaignReducer;
