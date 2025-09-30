'use client';

import { useEffect, useState } from 'react';

export interface ButtonConfig {
  scrolledClass: string;
  defaultClass: string;
}

// /**
//  * Simple hook for basic scroll detection with custom threshold
//  * @param threshold - Scroll threshold in pixels (default: 100)
//  * @returns boolean indicating if page is scrolled past threshold
//  */
// export const useSimpleScrollHeader = (threshold: number = 100) => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > threshold);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [threshold]);

//   return isScrolled;
// };

// /**
//  * Ref-based scroll header hook with automatic class application
//  * @param threshold - Scroll threshold in pixels (default: 100)
//  * @param scrollClass - CSS class to apply when scrolled (default: 'scroll-header')
//  * @param buttonRef - Optional ref to button element for class changes
//  * @param buttonConfig - Optional button class configuration
//  * @returns Object with headerRef, isScrolled state, and scrollClass
//  */
// export const useScrollHeaderWithRef = (
//   threshold: number = 100,
//   scrollClass: string = 'scroll-header',
//   buttonRef?: RefObject<HTMLElement>,
//   buttonConfig?: ButtonConfig,
// ) => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const headerRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const shouldBeScrolled = scrollY > threshold;

//       setIsScrolled(shouldBeScrolled);

//       // Apply classes directly to refs if they exist
//       if (headerRef.current) {
//         if (shouldBeScrolled) {
//           headerRef.current.classList.add(scrollClass);
//         } else {
//           headerRef.current.classList.remove(scrollClass);
//         }
//       }

//       // Handle button ref if provided
//       if (buttonRef?.current && buttonConfig) {
//         if (shouldBeScrolled) {
//           buttonRef.current.classList.remove(buttonConfig.defaultClass);
//           buttonRef.current.classList.add(buttonConfig.scrolledClass);
//         } else {
//           buttonRef.current.classList.remove(buttonConfig.scrolledClass);
//           buttonRef.current.classList.add(buttonConfig.defaultClass);
//         }
//       }
//     };

//     // Add scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Call handler right away so state gets updated with initial scroll position
//     handleScroll();

//     // Cleanup function to remove event listener
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [threshold, scrollClass, buttonRef, buttonConfig]);

//   return {
//     headerRef,
//     isScrolled,
//     scrollClass,
//   };
// };

/**
 * Simple ref-based hook that returns just the ref and scroll state
 * Lets you handle the styling manually in your component
 * @param threshold - Scroll threshold in pixels (default: 100)
 * @returns Object with headerRef and isScrolled state
 */
export const useNavbarScroll = (threshold: number = 100) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { isScrolled };
};
