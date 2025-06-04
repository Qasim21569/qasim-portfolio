// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-3M6ZNML8NR', {
      page_location: url,
      page_title: title,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('click', 'button', `${buttonName}${location ? ` - ${location}` : ''}`, 1);
};

// Track form submissions
export const trackFormSubmission = (formType: string, success: boolean = true) => {
  trackEvent('submit', 'form', `${formType} - ${success ? 'success' : 'error'}`, success ? 1 : 0);
};

// Track portfolio project views
export const trackProjectView = (projectName: string) => {
  trackEvent('view', 'portfolio', projectName, 1);
};

// Track section scrolls
export const trackSectionView = (sectionName: string) => {
  trackEvent('view', 'section', sectionName, 1);
}; 