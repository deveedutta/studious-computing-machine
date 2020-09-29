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

    const lists = this.props.campaigns.map( campaign => {
      return <StatelessList
        postId={campaign.postId}
        id={campaign.id}
        type={campaign.name}
        lastSaved={campaign.email}
        desc={campaign.body}
        edit={this.editCampaign}
        delete={this.props.deleteCampaign}/>;
    })

    return (
      <div className="Home">
        <main>
          <h1>Campaign listing page</h1>
            <ul className="List">
              <li>
                <input type="checkbox" />
                <h3>Campaign Name</h3>
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