import { useState } from 'react';


function Form(){

  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');

  return (
    <div>
      <input id="city" data-cy="city" type="text" value={city} onChange = {(e) => setCity(e.target.value)} />
      {city && <input id="district" type="text" value={district} onChange = {(e) => setDistrict(e.target.value)} />}
      {district && <input type="submit" />}
    </div>

  )
}


export default Form;