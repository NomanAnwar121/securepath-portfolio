import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const delay = parseInt(element.getAttribute('data-delay') || '0');
          
          if (delay > 0) {
            setTimeout(() => {
              element.classList.add('animate');
            }, delay);
          } else {
            element.classList.add('animate');
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    // Function to start observing elements
    const startObserving = () => {
      const selectors = [
        '.scroll-animate',
        '.scroll-animate-left', 
        '.scroll-animate-right',
        '.scroll-animate-scale'
      ];
      
      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => observer.observe(el));
      });
      
      console.log('Scroll animation observer initialized for', document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale').length, 'elements');
    };

    // Start observing immediately
    startObserving();
    
    // Also observe after a delay to catch any dynamically added elements
    const timeoutId = setTimeout(startObserving, 500);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);
};

// Matrix rain effect component
export const MatrixRain = () => {
  useEffect(() => {
    const container = document.createElement('div');
    container.className = 'matrix-rain';
    document.body.appendChild(container);

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    const createChar = () => {
      const char = document.createElement('div');
      char.className = 'matrix-char';
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.random() * 100 + '%';
      char.style.animationDuration = (Math.random() * 3 + 2) + 's';
      char.style.animationDelay = Math.random() * 2 + 's';
      container.appendChild(char);

      // Remove char after animation
      setTimeout(() => {
        if (container.contains(char)) {
          container.removeChild(char);
        }
      }, 5000);
    };

    const interval = setInterval(createChar, 300);

    return () => {
      clearInterval(interval);
      if (document.body.contains(container)) {
        document.body.removeChild(container);
      }
    };
  }, []);

  return null;
};