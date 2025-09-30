'use client';

import { useEffect, useRef } from 'react';

interface ParallaxElementConfig {
  element: HTMLElement;
  depth: number;
  directionX: number;
  directionY: number;
  movementScale: number;
}

export const useParallaxEffect = () => {
  const sceneRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    // Initialize parallax effect with optimized performance
    const initializeParallaxEffect = () => {
      if (!scene) return;

      // Freeze parallax elements initially
      freezeParallaxElements(scene);

      // Wait for window to be fully loaded before starting parallax
      if (document.readyState === 'complete') {
        startParallaxAfterLoad();
      } else {
        window.addEventListener('load', startParallaxAfterLoad);
      }
    };

    // Freeze parallax elements to prevent jumping during load
    const freezeParallaxElements = (scene: HTMLElement) => {
      const parallaxElements = scene.querySelectorAll('.parallax-effect');
      parallaxElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.willChange = 'transform';
        htmlElement.style.transform = 'translate3d(0px, 0px, 0)';
        htmlElement.style.transition = 'none';
        htmlElement.classList.add('parallax-frozen');
      });
    };

    // Start parallax effect after window is fully loaded
    const startParallaxAfterLoad = () => {
      // Wait for all images to load before starting parallax
      waitForImagesToLoad(scene, () => {
        // Small additional delay to ensure smooth transition
        setTimeout(() => {
          unfreezeAndStartParallax(scene);
        }, 300);
      });
    };

    // Unfreeze elements and start parallax animation
    const unfreezeAndStartParallax = (scene: HTMLElement) => {
      const parallaxElements = scene.querySelectorAll('.parallax-effect');

      // Remove frozen class and transition
      parallaxElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.classList.remove('parallax-frozen');
        htmlElement.style.transition = 'transform 0.3s ease-out';
      });

      // Start the parallax animation
      setupParallaxAnimation(scene);
    };

    // Wait for all parallax images to load
    const waitForImagesToLoad = (scene: HTMLElement, onComplete: () => void) => {
      const parallaxImages = scene.querySelectorAll('.parallax-effect img');

      if (parallaxImages.length === 0) {
        onComplete();
        return;
      }

      let loadedCount = 0;
      const totalImages = parallaxImages.length;

      const checkCompletion = () => {
        loadedCount++;
        if (loadedCount >= totalImages) {
          onComplete();
        }
      };

      parallaxImages.forEach((img) => {
        const imgElement = img as HTMLImageElement;
        if (imgElement.complete) {
          checkCompletion();
        } else {
          imgElement.addEventListener('load', checkCompletion);
          imgElement.addEventListener('error', checkCompletion);
        }
      });
    };

    // Setup the main parallax animation
    const setupParallaxAnimation = (scene: HTMLElement) => {
      const parallaxElements = scene.querySelectorAll('.parallax-effect');
      const elementConfigs = createElementConfigs(parallaxElements);

      let isAnimating = false;
      let mouseX = scene.offsetWidth / 2;
      let mouseY = scene.offsetHeight / 2;

      // Initialize elements and set initial position
      initializeElements(elementConfigs);
      updateParallaxPositions(elementConfigs, mouseX, mouseY, scene);

      // Setup mouse event handlers with throttling
      const throttledMouseHandler = createThrottledHandler((event: MouseEvent) => {
        mouseX = event.pageX;
        mouseY = event.pageY;

        if (!isAnimating) {
          requestAnimationFrame(() => {
            updateParallaxPositions(elementConfigs, mouseX, mouseY, scene);
            isAnimating = false;
          });
          isAnimating = true;
        }
      });

      scene.addEventListener('mousemove', throttledMouseHandler, {
        passive: true,
      });

      // Optimize performance when mouse leaves
      setupPerformanceOptimization(scene, elementConfigs);

      // Return cleanup function
      return () => {
        scene.removeEventListener('mousemove', throttledMouseHandler);
      };
    };

    // Create configuration objects for each parallax element
    const createElementConfigs = (elements: NodeListOf<Element>): ParallaxElementConfig[] => {
      return Array.from(elements).map((element) => ({
        element: element as HTMLElement,
        depth: parseFloat(element.getAttribute('data-parallax-value') || '1'),
        directionX: parseFloat(element.getAttribute('data-parallax-x') || '1'),
        directionY: parseFloat(element.getAttribute('data-parallax-y') || '1'),
        movementScale: 25, // Reduced from 30 for smoother movement
      }));
    };

    // Initialize elements with performance optimizations
    const initializeElements = (elementConfigs: ParallaxElementConfig[]) => {
      elementConfigs.forEach(({ element }) => {
        element.style.willChange = 'transform';
        element.style.transform = 'translateZ(0)';
      });
    };

    // Update parallax positions for all elements
    const updateParallaxPositions = (
      elementConfigs: ParallaxElementConfig[],
      mouseX: number,
      mouseY: number,
      scene: HTMLElement,
    ) => {
      const centerX = scene.offsetWidth / 2;
      const centerY = scene.offsetHeight / 2;

      // Calculate relative mouse position (-1 to 1)
      const relativeX = (mouseX - centerX) / centerX;
      const relativeY = (mouseY - centerY) / centerY;

      elementConfigs.forEach(({ element, depth, directionX, directionY, movementScale }) => {
        // Only animate if element is not frozen
        if (!element.classList.contains('parallax-frozen')) {
          const moveX = relativeX * depth * directionX * movementScale;
          const moveY = relativeY * depth * directionY * movementScale;

          element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        }
      });
    };

    // Create throttled event handler for better performance
    const createThrottledHandler = (handler: (event: MouseEvent) => void) => {
      let timeoutId: NodeJS.Timeout | null = null;

      return (event: MouseEvent) => {
        if (timeoutId) return;

        timeoutId = setTimeout(() => {
          handler(event);
          timeoutId = null;
        }, 16); // ~60fps
      };
    };

    // Setup performance optimization when mouse leaves
    const setupPerformanceOptimization = (scene: HTMLElement, elementConfigs: ParallaxElementConfig[]) => {
      let resetTimeout: NodeJS.Timeout;

      const handleMouseLeave = () => {
        clearTimeout(resetTimeout);
        resetTimeout = setTimeout(() => {
          elementConfigs.forEach(({ element }) => {
            element.style.willChange = 'auto';
          });
        }, 1000);
      };

      scene.addEventListener('mouseleave', handleMouseLeave);

      // Return cleanup function
      return () => {
        scene.removeEventListener('mouseleave', handleMouseLeave);
        clearTimeout(resetTimeout);
      };
    };

    // Initialize the parallax effect
    initializeParallaxEffect();

    // Cleanup function
    return () => {
      // Any additional cleanup can be added here
    };
  }, []);

  return sceneRef;
};
