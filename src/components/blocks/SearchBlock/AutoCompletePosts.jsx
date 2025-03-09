import * as React from 'react';
import { ALGOLIA_APP_ID, ALGOLIA_SEARCH_API_KEY, buildIndexName } from '../../../utils/indexer/consts';
import algoliasearch from 'algoliasearch';
import { getAlgoliaResults } from '@algolia/autocomplete-js';
import '@algolia/autocomplete-theme-classic';
import BaseAutoComplete from './BaseAutoComplete';
import { useRouter } from 'next/router';

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_API_KEY);

export default function AutoCompletePosts() {
    const router = useRouter();

    return (
        <BaseAutoComplete
            openOnFocus={true}
            detachedMediaQuery="none"
            placeholder="Search in posts..."
            getSources={({ query }) => [
                {
                    sourceId: 'posts',
                    getItems() {
                        return getAlgoliaResults({
                            searchClient,
                            queries: [
                                {
                                    indexName: buildIndexName(),
                                    query
                                }
                            ]
                        });
                    },
                    templates: {
                        item({ item, components }) {
                            return <ResultItem hit={item} components={components} />;
                        }
                    },
                    onSelect({ item }) {
                        console.log("Selected item", item);
                        router.push(item.url); // Ensures keyboard navigation works
                    },
                }
            ]}
        />
    );
}

export function ResultItem({ hit, components }) {
    return (
        <a href={hit.url} className="aa-ItemLink">
            <div className="aa-ItemContent">
                <div className="aa-ItemTitle">
                    <components.Highlight hit={hit} attribute="title" />
                </div>
            </div>
        </a>
    );
}
