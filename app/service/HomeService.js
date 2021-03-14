import HttpClient from '@Utils/HttpClient';

async function fetch_category(data) {
  let endpoint = 'fetch_category.php';
  return HttpClient.post(endpoint,data);
}
async function fetch_product(data) {
  let endpoint = 'fetch_product.php';
  return HttpClient.post(endpoint,data);
}
async function update_profile(data) {
  let endpoint = 'update_profile.php';
  return HttpClient.post(endpoint,data);
}
async function fetch_quiz() {
  let endpoint = 'fetch_question.php';
  return HttpClient.post(endpoint);
}
async function fetch_leaderboard() {
  let endpoint = 'top_user.php';
  return HttpClient.post(endpoint);
}
async function submit_answer(data) {
  let endpoint = 'quiz_ans.php';
  return HttpClient.post(endpoint,data);
}
async function add_to_cart(data) {
  let endpoint = 'add_to_cart.php';
  return HttpClient.post(endpoint, data);
}
async function count(data) {
  let endpoint = 'cart_count.php';
  return HttpClient.post(endpoint, data);
}
async function deletecart(data) {
  let endpoint = 'delete_cart.php';
  return HttpClient.post(endpoint, data);
}

async function fetch_cart(data) {
  let endpoint = 'fetch_add_cart.php';
  return HttpClient.post(endpoint,data);
}
async function checkout(data) {
  let endpoint = 'checkout.php';
  return HttpClient.post(endpoint,data);
}
async function history(data) {
  let endpoint = 'order_history.php';
  return HttpClient.post(endpoint,data);
}
export default {
  fetch_product,
  fetch_category,
  update_profile,
  fetch_quiz,
  fetch_leaderboard,
  submit_answer,
  add_to_cart,
  count,
  deletecart,
  fetch_cart,
  checkout,
  history
};
