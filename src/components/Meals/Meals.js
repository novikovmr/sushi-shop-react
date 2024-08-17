import React from 'react';
import PromoText from './PromoText';
import MealList from './MealList';


function Meals(props) {
  return (
    <React.Fragment>
      <PromoText />
      <MealList />
    </React.Fragment>
  )
}

export default Meals