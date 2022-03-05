/* eslint-disable */

if (process.env.NODE_ENV === 'production') {
  if (process.env.REACT_APP_BUILD_MODE === 'sandbox') {
    require('dotenv').config({ path: './config/.env.development' });
  } else {
    require('dotenv').config({ path: './config/.env.production' });
  }
} else {
  require('dotenv').config({ path: './config/.env.local' });
}

module.exports = {
  plugins: [
    {
      plugin: require('craco-antd'),
      options: {
        customizeTheme: {
          '@primary-color': '#fc5509',
          '@text-color': '#131313',
          '@font-family': 'IBMPlexSansKr',
          '@link-color': '#000000',
          '@btn-shadow': 'none',
          '@wave-animation-width': '0px'
        }
      }
    }
  ]
};
