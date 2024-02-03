import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      return navigate('/login', { replace: true });
    }
  }, [navigate]);

  return (
    <>
      <h2>homepage</h2>
      <button
        onClick={() => {
          localStorage.removeItem('user');
          navigate('/login', { replace: true });
        }}
      >
        logout
      </button>
    </>
  );
}

export default App;
