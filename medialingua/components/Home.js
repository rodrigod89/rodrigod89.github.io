import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchSubtitles } from '../services/youtubeService';

function Home() {
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleStartLearning = async () => {
    try {
      const subtitles = await fetchSubtitles(youtubeUrl);
      console.log('Subtitles:', subtitles); // Here you can pass subtitles to the Quiz component or handle them as needed
      navigate('/quiz');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to MediaLingua</h1>
      <p style={styles.description}>Learn a language through your favorite media.</p>
      <input
        type="text"
        value={youtubeUrl}
        onChange={(e) => setYoutubeUrl(e.target.value)}
        placeholder="Enter YouTube URL"
        style={styles.input}
      />
      <button onClick={handleStartLearning} style={styles.button}>
        Start Learning
      </button>
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    marginBottom: '1rem',
    width: '80%',
    maxWidth: '400px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '1rem',
  },
};

export default Home;
