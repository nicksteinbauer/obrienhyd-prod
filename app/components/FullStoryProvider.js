// src/FullStoryProvider.js
import React, {useEffect} from 'react';
import * as FullStory from '@fullstory/browser';

const FullStoryProvider = ({children}) => {
  useEffect(() => {
    const sample = (rate, daysValid) => {
      const cookieName = '_fs_sample_user';
      try {
        if (
          document.cookie.indexOf(`${cookieName}=true`) > -1 ||
          document.cookie.indexOf(`${cookieName}=false`) > -1
        ) {
          return document.cookie.indexOf(`${cookieName}=true`) > -1;
        } else {
          const shouldSample = Math.random() < rate / 100;
          const days =
            daysValid !== undefined && daysValid > 0 ? daysValid : 30;
          const date = new Date();
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
          document.cookie = `${cookieName}=${shouldSample}; expires=${date.toGMTString()}; path=/`;
          return shouldSample;
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('FullStory unavailable, unable to sample user');
        return false;
      }
    };

    const rate = 25;
    const daysValid = 90;
    if (sample(rate, daysValid)) {
      FullStory.init({
        orgId: 'o-1XESPW-na1',
        debug: false, // Set to true if you need debug mode
      });

      // Example of setting user properties or event tracking
      // FullStory.identify('user_id', { email: 'user@example.com' });
    }
  }, []);

  return <>{children}</>;
};

export default FullStoryProvider;
