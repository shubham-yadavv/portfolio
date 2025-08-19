import { useState, useEffect, useCallback } from 'react';
import { getActiveSection, debounce } from './utils';

interface Tweet {
  id: string;
  text: string;
  created_at: string;
  user: {
    name: string;
    screen_name: string;
    profile_image_url: string;
  };
  entities?: {
    urls?: Array<{
      url: string;
      expanded_url: string;
      display_url: string;
    }>;
    hashtags?: Array<{
      text: string;
    }>;
    user_mentions?: Array<{
      screen_name: string;
      name: string;
    }>;
  };
}

export const useScrollPosition = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      setIsScrolled(window.scrollY > 50);
    }, 10);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isScrolled;
};

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = debounce(() => {
      setActiveSection(getActiveSection());
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
};

export const useIntersectionObserver = (
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef, options]);

  return isIntersecting;
};

export const useTwitterFeed = (pollingInterval: number = 300000) => { // 5 minutes default
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);

  const fetchTweets = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/twitter/tweets');
      
      if (!response.ok) {
        throw new Error('Failed to fetch tweets');
      }
      
      const data = await response.json();
      setTweets(data);
      setLastUpdate(new Date());
      setError(null);
    } catch (err) {
      setError('Failed to load tweets');
      console.error('Error fetching tweets:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Initial fetch
    fetchTweets();

    // Set up polling
    const interval = setInterval(fetchTweets, pollingInterval);

    return () => clearInterval(interval);
  }, [fetchTweets, pollingInterval]);

  const refreshTweets = useCallback(() => {
    fetchTweets();
  }, [fetchTweets]);

  return {
    tweets,
    loading,
    error,
    lastUpdate,
    refreshTweets
  };
};
