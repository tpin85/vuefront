import omitDeepLodash from 'omit-deep-lodash';
import gql from 'graphql-tag';
export default (async ({
  client
}) => {
  let result = [];

  try {
    let res = await client.query({
      query: gql`
        {
          categoriesBlogList(page: 1, size: -1) {
            content {
              id
              keyword
            }
          }
        }
      `
    });
    res = omitDeepLodash(res, '__typename');
    result = res.data.categoriesBlogList.content;
  } catch (e) {}

  return result;
});