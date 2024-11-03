import nlp from 'compromise';

export const extractVocabulary = (text) => {
  const doc = nlp(text);
  const words = doc.nouns().out('array');
  return words;
};