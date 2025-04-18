import { useFetchTracker } from './hooks/async/useFetchTracker';

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
      {data?.steps.map((step) => (
        <h1 key={step.id}>{step.title}</h1>
      ))}
    </div>
  );
};

export default App;
