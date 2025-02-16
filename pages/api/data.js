```javascript
// pages/about.js
import React, { useState, useEffect } from 'react';

function About() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/data');
        if (!res.ok) {
          const errorData = await res.json(); // Parse error response for better message
          const errorMessage = errorData.error || `HTTP error! status: ${res.status}`;
          throw new Error(errorMessage);
        }
        const result = await res.json();
        setData(result);
      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error); // Log error to console for debugging
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data</p>;

  return (
    <div>
      <h1>About Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default About;
```
The solution involves enhancing error handling by parsing the error response from the API route to provide a more informative error message.  This ensures that any error details returned by the server are displayed to the user. Also logging the error to the console for debugging purposes is added.