export const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
export const ALGOLIA_INDEX_NAME_SUFFIX = process.env.ALGOLIA_INDEX_NAME;
export const ALGOLIA_SEARCH_API_KEY = process.env.ALGOLIA_SEARCH_API_KEY;

export const ALGOLIA_ADMIN_API_KEY = process.env.ALGOLIA_ADMIN_API_KEY;
// TODO consider approach of managing indexes, meanwhile use a fixed one.
export const ENV_NAME = /*process.env.NODE_ENV ||*/ 'development';

export function buildIndexName() {
    const indexName = ENV_NAME + '_' + ALGOLIA_INDEX_NAME_SUFFIX;
    return indexName;
}
