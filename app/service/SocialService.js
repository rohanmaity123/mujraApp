import HttpClient from '@Utils/HttpClient';

async function addpost(data,obj) {
  let endpoint = 'user_post.php';
  return HttpClient.upload(endpoint,'post',data,obj);
}
async function fetchpost(data) {
  let endpoint = 'fetch_post.php';
  return HttpClient.post(endpoint,data);
}
async function likepost(data) {
  let endpoint = 'post_like.php';
  return HttpClient.post(endpoint,data);
}
async function commentpost(data) {
  let endpoint = 'post_comment.php';
  return HttpClient.post(endpoint,data);
}
async function fetchcomments() {
  let endpoint = 'fetch_comment.php';
  return HttpClient.post(endpoint);
}
export default {
addpost,
fetchpost,
likepost,
commentpost,
fetchcomments
};
