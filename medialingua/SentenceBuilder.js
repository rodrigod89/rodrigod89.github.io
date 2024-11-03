// Updated SentenceBuilder Component with Optimized UX
import React, { useState, useEffect } from 'react';
import './SentenceBuilder.css';
import wordData from './wordData.json';

const SentenceBuilder = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessage] = useState('');
  const [scrambledWords, setScrambledWords] = useState([]);
  const [progressCount, setProgressCount] = useState(0);
  const [showMainContent, setShowMainContent] = useState(false);

  const totalUniqueWords = 904;
  const knownWords = 345;
  const targetRecognition = 50; // Target recognition percentage

  const currentWordData = wordData[currentWordIndex];
  const { word, translation, sentence, translatedSentence } = currentWordData || {};

  useEffect(() => {
    // Initialize scrambled words with unique IDs
    if (sentence) {
      const wordsOnly = sentence.map((word, index) => ({
        id: `${currentWordIndex}-${index}`,
        word: word.replace(/[.,!?]/g, '').toLowerCase(),
      }));
      setScrambledWords([...wordsOnly].sort(() => Math.random() - 0.5));
    }
  }, [currentWordIndex, sentence]);

  useEffect(() => {
    // Show the new word and then reveal the rest of the content
    if (word) {
      setShowMainContent(false);
      setTimeout(() => {
        setShowMainContent(true);
      }, 1000); // Increase time for better word processing by user
    }
  }, [word]);

  const handleWordClick = (clickedWord) => {
    if (
      Array.isArray(sentence) &&
      clickedWord.word === sentence[currentIndex].replace(/[.,!?]/g, '').toLowerCase()
    ) {
      setSelectedWords([...selectedWords, clickedWord]);
      setCurrentIndex(currentIndex + 1);
      setMessage('');
    } else {
      setMessage('Incorrect! Try again.');
    }
  };

  useEffect(() => {
    if (currentIndex === (Array.isArray(sentence) ? sentence.length : 0)) {
      setMessage(`Well done! You completed the sentence.`);
      setProgressCount((prevProgress) => prevProgress + 1);
      playAudio(sentence).then(() => {
        // Move to the next word after completing the current sentence only after audio has finished
        if (currentWordIndex < wordData.length - 1) {
          setTimeout(() => {
            setCurrentWordIndex(currentWordIndex + 1);
            setSelectedWords([]);
            setCurrentIndex(0);
            setMessage('');
          }, 1500);
        } else {
          setMessage('Congratulations! You have completed all the words!');
        }
      });
    }
  }, [currentIndex, currentWordIndex, sentence]);

  const playAudio = (sentenceArray) => {
    return new Promise((resolve) => {
      if (sentenceArray) {
        const sentence = sentenceArray.join(' ');
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(sentence);
        utterance.lang = 'nl-NL';
        const voices = synth.getVoices();
        utterance.voice = voices.find((voice) => voice.lang === 'nl-NL') || null; // Select a Dutch voice if available
        utterance.onend = resolve; // Resolve the promise once the audio has finished playing
        synth.speak(utterance);
      } else {
        resolve();
      }
    });
  };

  const calculateProgressPercentage = () => {
    const progress = (progressCount / wordData.length) * targetRecognition;
    return progress > targetRecognition ? targetRecognition : progress;
  };

  return (
    <div className="sentence-builder">
      <div className="progress-bar-wrapper">
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${calculateProgressPercentage()}%` }}
          ></div>
        </div>
        <div className="progress-percentage">
          {calculateProgressPercentage().toFixed(1)}%
        </div>
      </div>
      <div className={`learning-word-wrapper ${showMainContent ? 'show' : 'hide'}`}>
        <div className="learning-word">
          <span>
            New Word: <strong>{word}</strong> (<i>{translation}</i>)
          </span>
        </div>
      </div>
      {showMainContent && (
        <div className="main-content-wrapper show">
          <div className="translate-sentence">
            <h3>Can you recreate this sentence?</h3>
            <p className="translated-sentence">{translatedSentence}</p>
          </div>
          <div className="user-answer">
            <div className="answer-box">
              {Array.isArray(sentence) &&
                sentence.map((_, index) => (
                  <span key={index} className="answer-space">
                    {selectedWords[index] ? selectedWords[index].word : ' '}
                  </span>
                ))}
            </div>
          </div>
          <div className="scrambled-words">
            <div className="word-buttons">
              {scrambledWords.map((scrambledWord) => (
                <button
                  key={scrambledWord.id}
                  onClick={() => handleWordClick(scrambledWord)}
                  disabled={selectedWords.some((word) => word.id === scrambledWord.id)}
                  className="word-button"
                >
                  {scrambledWord.word}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {message && (
        <div className="message">
          <p>{message}</p>
        </div>
      )}
      {/* Moved the recognition message to the bottom */}
      <div className="recognition-message">
        <p>
          You will recognize up to <b>{targetRecognition}%</b> of all words of the episode after completing this practice.
        </p>
      </div>
    </div>
  );
};

export default SentenceBuilder;
