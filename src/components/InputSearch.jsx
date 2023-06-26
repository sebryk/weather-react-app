import { useState } from 'react';
import searchIcon from '../assets/interface-icons/search.svg'


export function InputSearch({ onSubmit }) {
  const [cityName, setCityName] = useState('');
  
  const handleSearch = () => {
    onSubmit(cityName);
    setCityName('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const isCityNameNotEmpty = cityName.trim() !== '';
  
  return (  
    <div className='forecast-search'>
      <input 
      className='forecast-search__input'
      type='text' 
      name='cityName'
      value={cityName} 
      autoComplete="off"
      placeholder='Enter city name'
      onChange={e => setCityName(e.target.value)}
      onKeyDown={isCityNameNotEmpty ? handleKeyDown : null}
      />
      {isCityNameNotEmpty && (
        <button className="forecast-search__btn" onClick={handleSearch}>
          <img className="forecast-search__btn-icon" src={searchIcon} alt="Search button" />
        </button>
      )}
   </div>
  );
}

export default InputSearch;
