import * as React from 'react';

import { getBaseLayoutComponent } from '../../../utils/base-layout';
import { getComponent } from '../../components-registry';
import classNames from 'classnames';

export default function PageLayout(props) {
    const { page, site, className } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const { enableAnnotations = true } = site;
    const { title, hideH1, sections = [] } = page;

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="sb-layout sb-page-layout bg-light-fg-dark">
                {title && (
                    <h1 className={classNames(
                                    'max-w-4xl',
                                    'mx-auto',
                                    'mb-12',
                                    'text-center',
                                    'pt-28',
                                    className,
                                    hideH1 ? 'sr-only' : 'visible',
                                    {...(enableAnnotations && { 'data-sb-field-path': 'title' })}
                                )} 
                    >
                        {title}
                    </h1>
                )}
                {sections.length > 0 && (
                    <div {...(enableAnnotations && { 'data-sb-field-path': 'sections' })}>
                        {sections.map((section, index) => {
                            const Component = getComponent(section.__metadata.modelName);
                            if (!Component) {
                                throw new Error(`no component matching the page section's model name: ${section.__metadata.modelName}`);
                            }
                            return (
                                <Component
                                    key={index}
                                    {...section}
                                    enableAnnotations={enableAnnotations}
                                    {...(enableAnnotations && { 'data-sb-field-path': `sections.${index}` })}
                                />
                            );
                        })}
                    </div>
                )}
            </main>
        </BaseLayout>
    );
}
