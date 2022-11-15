function App() {
  const secret = process.env.REACT_APP_BASE_URL;

  return <div className='bg-black text-white'>wasd {secret}</div>;
}

export default App;
