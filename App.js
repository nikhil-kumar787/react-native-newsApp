
import React from 'react';

import SearchBar from './components/SearchBar';
import Screen from './components/Screen';
import FeatureNews from './components/FeaturedNews';
import SmallCard from './components/SmallCard';
import BreakingNews from './components/BreakingNews';

import data from './fakeData.js'
import TechNews from './components/TechNews';
import PoliticalNews from './components/PoliticalNews';
import EntertainmentNews from './components/EntertainmentNews';

export default function App() {

  const breakingNews= data.filter(item => item.category === 'breaking-news')
  const techNews= data.filter(item => item.category === 'tech')
  const politicalNews= data.filter(item => item.category === 'political')
  const entertainmentNews= data.filter(item => item.category === 'entertainment')
  

  return <Screen>
    <SearchBar />
    <FeatureNews item={{
      id: "19",
      title: "This is the title no nineteen.",
      desc:
        "Desc is the short form of description and this format is the actual same as our real database.",
      thumbnail: "http://lorempixel.com/400/200/",
      category: "breaking-news",
      category: "entertainment"
    }}/>
    <BreakingNews data={breakingNews}/>
    <PoliticalNews data={politicalNews} />
    <TechNews data={techNews} />
    <EntertainmentNews data={entertainmentNews} />
    
  </Screen>
   
  
}


