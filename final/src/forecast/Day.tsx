import React from 'react';
import styles from './Day.module.css';

function findTimeOfDay(currentTime: Date) {
  const currentHour = currentTime.getHours();
  const splitAfternoon = 12;
  const splitEvening = 17;
  if (currentHour >= splitAfternoon && currentHour < splitEvening) {
    return 'eve';
  } else if (currentHour >= splitEvening) {
    return 'night';
  }
  return 'day';
};

function weatherIcon(data: any) {
  const iconKey = data.weather[0].icon;
  return <img src={`http://openweathermap.org/img/wn/${iconKey}@2x.png`}/>;
};

function weatherTemp(partOfDay: string, data: any) {
  const temp = data.feels_like[partOfDay];
  return <div className={styles.temp}> {Math.round(temp)}  &#176;F</div>
}

function weatherDescription(data: any) {
  return <div className={styles.description}>{data.weather[0].main}</div>
}

function Day(props: any) {
  const theDate = new Date(props.data.dt * 1000);
  return (
    <div className={styles.day}>
      <h3>{theDate.toLocaleDateString('en-us', { weekday: 'long' })}</h3>
      <aside>{theDate.toLocaleDateString('en-us', {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</aside>
      {weatherIcon(props.data)}
      {weatherTemp(findTimeOfDay(theDate), props.data)}
      {weatherDescription(props.data)}
    </div>
  )
}

export default Day;
