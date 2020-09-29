import React from 'react';
import { connect } from 'react-redux';

// Components
import StatelessApp from "../Components/stateless/StatelessApp";
import StatelessList from "../Components/stateless/StatelessList";

// Store
import store from "../Store/";

// Actions
import { ListActions } from '../Actions';

import './Home.css';

class Home extends React.Component {
  constructor(props, state) {
    super(props);
  }

  componentDidMount() {
    this.props.loadCampaigns();
  }

  editCampaign = () => {
    window.alert('Sorry! It does nothing');
  }

  render() {

    const lists = this.props.campaigns.map( (campaign, index) => {
      console.log(campaign);
      // return <span>{index}</span>;
      return <StatelessList
        postId={campaign.postId}
        id={campaign.id}
        name={campaign.name}
        type={campaign.body}
        lastSaved={campaign.email}
        edit={this.editCampaign}
        delete={this.props.deleteCampaign}/>;
    })

    return (
      <div className="Home">
        <main>
          <h1>Campaign listing page</h1>
            <ul className="List">
              <li>
                <strong>selected</strong>
                <strong>Campaign Name</strong>
                <span>Campaign Type</span>
                <span>Last Saved </span>
                <span>Action</span>
              </li>
              {lists}
            </ul>
            <ol className="pagination">
              <li><button>📄</button></li>
            </ol>
          <StatelessApp />
        </main>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    campaigns: state.campaigns.campaigns,
    campaignsLoading: state.campaigns.loading,
    campaignsError: state.campaigns.error,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadCampaigns: () => dispatch(ListActions.loadCampaigns()),
    loadCampaignsByPage: (param) => dispatch(ListActions.loadCampaignsByPage(param)),
    deleteCampaign: (param) => dispatch(ListActions.deleteCampaign(param))

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);
