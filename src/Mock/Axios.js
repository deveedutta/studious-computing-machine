import campaigns from '../PlaceHolder/campaigns.json';

const Axios = {
  get: async (url) => {
    console.log(`Responding to: ${url}`);
    return campaigns;
  }
};


export default Axios;
