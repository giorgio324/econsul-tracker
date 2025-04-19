import { useFetchTracker } from './hooks/async/useFetchTracker';
import Header from './components/tracker/Header';
import TrackerInfo from './components/tracker/TrackerInfo';
import ProgressSteps from './components/tracker/progressSteps/ProgressSteps';

const App = () => {
  const { data, isLoading, error } = useFetchTracker();
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>error</h1>;
  }

  return (
    <>
      <Header name='Sabuti Vizadze' id={26032832} />
      <TrackerInfo data={data} />
      <ProgressSteps data={data} />
    </>
  );
};

export default App;
