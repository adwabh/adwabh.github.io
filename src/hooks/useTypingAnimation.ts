// import { useState, useEffect, useMemo, useRef } from 'react';

// export const useTypingAnimation = (texts: string[], speed = 100, deleteSpeed = 50, pauseTime = 2000) => {
//   const [currentTextIndex, setCurrentTextIndex] = useState(0);
//   const [currentCharIndex, setCurrentCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [showCursor, setShowCursor] = useState(true);
//   const timeoutRef = useRef<number>();

//   // Derive the displayed text from the character index instead of storing it in state
//   const currentText = useMemo(() => {
//     if (!texts || texts.length === 0) return '';
//     const result = texts[currentTextIndex]?.slice(0, currentCharIndex) || '';
//     console.log('currentText:', result, 'charIndex:', currentCharIndex, 'textIndex:', currentTextIndex);
//     return result;
//   }, [texts, currentTextIndex, currentCharIndex]);

//   useEffect(() => {
//     if (!texts || texts.length === 0) return;

//     // Clear any existing timeout
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }

//     const targetText = texts[currentTextIndex];
    
//     console.log('Effect running:', { currentCharIndex, isDeleting, targetText, targetLength: targetText.length });

//     if (!isDeleting) {
//       if (currentCharIndex < targetText.length) {
//         // Continue typing
//         timeoutRef.current = setTimeout(() => {
//           console.log('About to increment charIndex from', currentCharIndex, 'to', currentCharIndex + 1);
//           setCurrentCharIndex(prev => {
//             console.log('Setting charIndex from', prev, 'to', prev + 1);
//             return prev + 1;
//           });
//         }, speed);
//       } else {
//         // Finished typing, pause then start deleting
//         console.log('Finished typing, starting delete after pause');
//         timeoutRef.current = setTimeout(() => {
//           setIsDeleting(true);
//         }, pauseTime);
//       }
//     } else {
//       if (currentCharIndex > 0) {
//         // Continue deleting
//         timeoutRef.current = setTimeout(() => {
//           setCurrentCharIndex(prev => prev - 1);
//         }, deleteSpeed);
//       } else {
//         // Finished deleting, move to next text
//         console.log('Finished deleting, moving to next text');
//         setIsDeleting(false);
//         setCurrentTextIndex((prev) => (prev + 1) % texts.length);
//         setCurrentCharIndex(0); // Reset character index for new text
//       }
//     }

//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, [currentCharIndex, currentTextIndex, isDeleting, texts, speed, deleteSpeed, pauseTime]);

//   // Reset animation if texts array changes
//   useEffect(() => {
//     setCurrentTextIndex(0);
//     setCurrentCharIndex(0);
//     setIsDeleting(false);
//   }, [texts]);

//   // Cursor blinking effect
//   useEffect(() => {
//     const cursorInterval = setInterval(() => {
//       setShowCursor(prev => !prev);
//     }, 500);

//     return () => clearInterval(cursorInterval);
//   }, []);

//   return { currentText, showCursor };
// };

import { useState, useEffect, useMemo } from 'react';


export const useTypingAnimation = (texts: string[], speed = 100, deleteSpeed = 50, pauseTime = 2000) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: number;

    const type = () => {
      const currentWord = texts[currentTextIndex];

      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          // Still typing
          setCurrentText(currentWord.substring(0, currentText.length + 1));
          timeout = setTimeout(type, speed);
        } else {
          // Word complete, wait before deleting
          timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          // Still deleting
          setCurrentText(currentText.substring(0, currentText.length - 1));
          timeout = setTimeout(type, deleteSpeed);
        } else {
          // Word deleted, move to next word
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    timeout = setTimeout(type, speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, speed, deleteSpeed, pauseTime]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return { currentText, showCursor };
};