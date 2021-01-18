const API_KEY = 'bbeab6c20080892046dd7e9139b782a0';

async function handleGet(url: string) {
  const response = await fetch(url);
  return response.json();
}

async function forecast(location: {city: string, state: string}, count: number = 5) {
  const geoData = await geoLocate(location.city, location.state);
  const response = await handleGet(`https://api.openweathermap.org/data/2.5/onecall?lat=${geoData.lat}&lon=${geoData.lon}&units=imperial&exclude=current,hourly,minutely&APPID=${API_KEY}`);
  return response.daily.slice(0,count);
}

async function geoLocate(city: string, state: string = 'TN', country: string = 'US') {
  const response = await handleGet(`https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&APPID=${API_KEY}`)
  return response.shift();
}

export {
  forecast,
  geoLocate
};
