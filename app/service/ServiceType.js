import HttpClient from '@Utils/HttpClient';

function allServicesType(s_id) {
  let endpoint = 'service-type-category?cat_id=' + s_id;
  return HttpClient.get(endpoint);
}

export default {
  allServicesType,
};
