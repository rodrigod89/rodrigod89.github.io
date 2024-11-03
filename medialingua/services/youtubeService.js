import axios from 'axios';

// Mock function to simulate fetching subtitles
export const fetchSubtitles = async (url) => {
  try {
    const response = await axios.get('/example.txt');
    return response.data;
  } catch (error) {
    console.error('Error fetching mock subtitles:', error.message);
    throw error;
  }
};