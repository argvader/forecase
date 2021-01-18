import React, { useState } from 'react';
import styles from './Location.module.css';

function Location(props: any) {
  const [locationString, setLocationString] = useState('');
  const handleLocation = (evt: any) => setLocationString(evt.target.value);
  const handleSelect = () => {
    const parseLocation = locationString.split(',');
    props.handleLocationChange({
      city: parseLocation[0],
      state: parseLocation[1]
    });
  };
  return (
    <div className={styles.location}>
      <input type='text' placeholder='Select City and State' value={locationString} onChange={handleLocation} />
      <button onClick={handleSelect}>Select</button>
    </div>
  )
}

export default Location;
