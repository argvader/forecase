import React, { useEffect, useState } from 'react';
import {forecast} from '../gateway/weather';
import Day from './Day';
import Location from './Location';
import styles from './Forecast.module.css';

function Forecast() {
  const [days, setDays] = useState([]);
  const [location, setLocation] = useState({city: 'Nashville', state: 'TN'});
  const changeLocation = (location: {city: string, state: string}) => {
    setLocation(location);
  }

  useEffect(() => {
    forecast(location).then((data) => {
      setDays(data);
    })
  },[location]);

  return (
    <div className={styles.container}>
      <Location handleLocationChange={changeLocation}></Location>
      <div className={styles.forecast}>
      { days.map((day: {dt: number}) => {
        return <Day key={day.dt} data={day}></Day>
      })}
      </div>
    </div>
  )
}

export default Forecast;
