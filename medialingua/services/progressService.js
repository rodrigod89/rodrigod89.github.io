export const saveProgress = (progress) => {
    localStorage.setItem('progress', JSON.stringify(progress));
  };
  
  export const loadProgress = () => {
    const progress = localStorage.getItem('progress');
    return progress ? JSON.parse(progress) : [];
  };