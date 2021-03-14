import Storage from './Storage';

// import Moment from 'moment';

/* User helpers */

async function getApiToken() {
  // console.log('inside get api token');
  let user = await this.getAuthUser();
  if (user !== null) {
    return user.api_token;
  }
  return null;
}

async function getAuthUser() {
  return await Storage.get('user');
}
async function setAuthUser(data) {
  return await Storage.set('user', data);
}
function getFcmToken() {}

async function isOwner(userId) {
  let user = await this.getAuthUser();
  return user.id === userId;
}

function convertToSlug(text, needle = '-') {
  return text
    .toLowerCase()
    .replace(/ /g, needle)
    .replace(/[^\w-]+/g, '');
}

function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      //   this.setState({
      //     latitude: position.coords.latitude,
      //     longitude: position.coords.longitude,
      //     error: null,
      //   });
      console.log(position);
    },
    (error) => {
      console.log(error);
    },
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  );
}

/* DateTime helpers */

function getCurrentDateTime() {}

function getCurrentDate() {}

function getCurrentTime() {}

function parseDateTime(
  date,
  format = 'MM/DD/YYYY',
  inputFormat = 'YYYY-MM-DD',
) {
  // const inputFormat = 'YYYY-MM-DD';
  console.log('parse date', date);
  if (date == null || date.trim() == '')
    // return '';
    return Moment(date, inputFormat).format(format);
}

export default {
  parseDateTime,
  getCurrentTime,
  getApiToken,
  getAuthUser,
  setAuthUser,
  getFcmToken,
  isOwner,
  convertToSlug,
  getCurrentLocation,
  getCurrentDateTime,
  getCurrentDate,
};
