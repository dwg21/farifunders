import React, {useState, useEffect} from 'react';

import { DisplayCampaigns } from '../components';

import {useStateContext} from '../context';

import {useParams} from 'react-router-dom';



const SearchResults = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const {address, contract, getSearchResultCampaigns} = useStateContext();

  const searchparams = useParams();


  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getSearchResultCampaigns(searchparams);
    setCampaigns(data)
    setIsLoading(false);
    
  }

  useEffect(() => {
    if(contract)  {
      fetchCampaigns();
    }
  }, [address, contract])
  
  
  return (
    <div>
      <DisplayCampaigns 
        title = 'Search Results'
        isLoading = {isLoading}
        campaigns = {campaigns}
      />
    </div>
  )
}

export default SearchResults