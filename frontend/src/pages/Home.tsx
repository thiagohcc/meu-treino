import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setAuthenticated(false);
    } else {
      setAuthenticated(true);
    }
  }, []);

  if (authenticated === false) {
   navigate('/login');
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div id="home" data-testid="home">
      <div>
        <img id='customer-photo' data-testid='customer-photo' src="https://via.placeholder.com/500x500" alt="customer" />
        <div>
          <h3 id='customer-name' data-testid='customer-name'>Customer Name</h3>
        </div>
      </div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
