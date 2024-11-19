import PropTypes from 'prop-types';    
import  { useState, useEffect } from 'react';

const HackerText = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
  const [revealIndex, setRevealIndex] = useState(0);

  useEffect(() => {
    // Reset reveal index to start the animation over when text changes
    setDisplayedText('');
    setRevealIndex(0);
    
    const interval = setInterval(() => {
      const randomChars = text.split('').map((char, index) => {
        return index < revealIndex ? char : characters[Math.floor(Math.random() * characters.length)];
      }).join('');

        const est = {
          cost var :hai
        }

      setDisplayedText(randomChars);

      if (revealIndex < text.length) {
        setRevealIndex((prev) => prev + 1);
      } else {
        clearInterval(interval); // Stop when all characters are revealed
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, characters]);

  return <span>{displayedText}</span>;
};

// TODO: Need to improve this 
HackerText.defaultProps = {
  speed: 50,
};
HackerText.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number,
};
// TODO: Implement Hacktext while TWG ing the Text

export default HackerText;
