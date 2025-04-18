import { useFetchTracker } from './hooks/async/useFetchTracker';
import Header from './components/tracker/Header';
import TrackerInfo from './components/tracker/TrackerInfo';

const App = () => {
  const { data, isLoading, error } = useFetchTracker();
  if (isLoading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>error</h1>;
  }

  return (
    <div>
      <Header name='Sabuti Vizadze' id={26032832} />
      <TrackerInfo data={data} />
      {data?.steps.map((step) => (
        <h1 key={step.id}>{step.title}</h1>
      ))}
    </div>
  );
};

export default App;
