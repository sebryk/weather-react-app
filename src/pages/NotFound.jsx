import cityIcon from '../assets/interface-icons/city.svg';

export function NotFound({ errorMessage }) {
  return (  
    <div className="app__not-found">
      <h2 className='app__not-found-title'>{`Oops! ${errorMessage}.`}</h2>
      <img className='app__not-found-icon' src={cityIcon} alt='City icon'/>
      <h2 className='app__not-found-title'>Please try again</h2>
    </div>
  );
}
