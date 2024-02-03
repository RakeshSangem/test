import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      navigate('/', {
        replace: true,
      });
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(form));
    return navigate('/', {
      replace: true,
    });
  };

  return (
    <>
      <h2>login</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          type="text"
          placeholder="username"
        />
        <input
          value={form.password}
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="password"
        />
        <button type="submit">login</button>
      </form>
    </>
  );
}
