import * as React from 'react';
import { ALGOLIA_APP_ID, ALGOLIA_SEARCH_API_KEY, buildIndexName } from '../../../utils/indexer/consts';
import algoliasearch from 'algoliasearch';
import { getAlgoliaResults } from '@algolia/autocomplete-js';
import '@algolia/autocomplete-theme-classic';
import BaseAutoComplete from './BaseAutoComplete';

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_API_KEY);

export default function AutoCompletePosts() {

    const handleSelect = (event, item) => {
        if (event.key === 'Enter' || event.type === 'click') {
            window.location.href = item.url;
        }
    };

    return (
        <BaseAutoComplete
            openOnFocus={true}
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
                            return (
                                <ResultItem
                                    hit={item}
                                    components={components}
                                    onSelect={handleSelect}
                                />
                            );
                        }
                    }
                }
            ]}
        />
    );
}

export function ResultItem({ hit, components, onSelect }) {
    return (
        <a
            href={hit.url}
            className="aa-ItemLink"
            onClick={(event) => onSelect(event, hit)}
            onKeyDown={(event) => onSelect(event, hit)}
        >
            <div className="aa-ItemContent">
                <div className="aa-ItemTitle">
                    <components.Highlight hit={hit} attribute="title" />
                </div>
            </div>
        </a>
    );
}
