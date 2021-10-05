import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x3E2F7a3F8a8aD6016DB7575d55F4c21b8c9988fB'
);

export default instance;