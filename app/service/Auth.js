import HttpClient from '@Utils/HttpClient';
import Storage from '@Utils/Storage';

async function socaialLogin(data) {
  let endpoint = 'social_login.php';
  return HttpClient.post(endpoint, data);
}

async function register(data) {
  let endpoint = 'registration.php';
  return HttpClient.post(endpoint, data);
}
async function login(data) {
  let endpoint = 'login.php';
  return HttpClient.post(endpoint, data);
}
async function getalluser(data) {
  let endpoint = 'fetch_user.php';
  return HttpClient.post(endpoint,data);
}
async function editprofile(data,obj) {
  let endpoint = 'profile_update.php';
  return HttpClient.upload(endpoint,'post',data,obj);
}
async function getAccount() {
  return await Storage.get('account');
}
async function old_password_change(data) {
  let endpoint = 'change_password.php';
  return HttpClient.post(endpoint, data);
}

async function setAccount(data) {
  return await Storage.set('account', data);
}

async function setUserType(data) {
  return await Storage.set('userType', data);
}

async function getUserType() {
  return await Storage.get('userType');
}

async function logout() {
  return await Storage.set('account', null);
}

async function forgot_password(data) {
  let endpoint = 'forgot_password.php';
  return HttpClient.post(endpoint, data);
}

async function reset_password(data) {
  let endpoint = 'reset_password.php';
  return HttpClient.post(endpoint, data);
}

export default {
  register,
  login,
  getalluser,
  editprofile,
  socaialLogin,
  logout,
  old_password_change,
  getAccount,
  setAccount,
  getUserType,
  setUserType,
  forgot_password,
  reset_password,
};
