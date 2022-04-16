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
          '@primary-color': '#12005e',
          '@text-color': '#000000',
          '@font-family': 'NotoSans',
          '@link-color': '#000000',
          '@btn-shadow': 'none',
          '@wave-animation-width': '0px'
        }
      }
    }
  ]
};
