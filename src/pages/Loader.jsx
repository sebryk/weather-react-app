import loaderIcon from '../assets/interface-icons/loader.svg'

export function LoadingPage() {
  return (
    <div className="app__loader">
      <img className="app__loader-img"src={loaderIcon} alt="Loader icon"/>
      <p className="app__loader-title">Loading...</p>
    </div>
  );
}

export default LoadingPage;