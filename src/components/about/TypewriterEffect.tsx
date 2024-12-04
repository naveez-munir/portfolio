import { useState, useEffect } from 'react';
import { TypewriterEffectProps } from '@/types/about';

export const TypewriterEffect = ({ words, loop = true }: TypewriterEffectProps) => {
 const [text, setText] = useState("");
 const [wordIndex, setWordIndex] = useState(0);
 const [isDeleting, setIsDeleting] = useState(false);

 useEffect(() => {
   const currentWord = words[wordIndex];
   const timeout = setTimeout(
     () => {
       if (!isDeleting) {
         setText(currentWord.substring(0, text.length + 1));
         if (text === currentWord) {
           setIsDeleting(true);
           setTimeout(() => {}, 1500);
         }
       } else {
         setText(currentWord.substring(0, text.length - 1));
         if (text === "") {
           setIsDeleting(false);
           setWordIndex((prev) => (prev + 1) % words.length);
         }
       }
     },
     isDeleting ? 50 : 150
   );

   return () => clearTimeout(timeout);
 }, [text, wordIndex, isDeleting, words]);

 return <span>{text}_</span>;
};
