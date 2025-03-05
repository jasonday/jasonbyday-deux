import * as React from 'react';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

import { getBaseLayoutComponent } from '../../../utils/base-layout';
import { getComponent } from '../../components-registry';
import Link from '../../atoms/Link';
import ImageBlock from '../../blocks/ImageBlock';
import Giscus from '@giscus/react';


export default function PostLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const { enableAnnotations = true } = site;
    const { title, date, author, markdown_content, bottomSections = [] } = page;
    const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(date).format('YYYY-MM-DD');
    const hasArticleImage = !!(page.articleImage?.url);

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="sb-layout sb-post-layout bg-light-fg-dark">
                <article className="px-4 py-16 sm:py-28">
                    <div className="mx-auto max-w-screen-2xl">
                        <header className="max-w-4xl mx-auto mb-12 text-center">
                            <h1 {...(enableAnnotations && { 'data-sb-field-path': 'title' })}>{title}</h1>
                            <div className="mt-4 text-sm uppercase">
                                <time dateTime={dateTimeAttr} {...(enableAnnotations && { 'data-sb-field-path': 'date' })}>
                                    {formattedDate}
                                </time>
                                {author && (
                                    <>
                                        <span className="mx-2">|</span>
                                        <PostAuthor author={author} enableAnnotations={enableAnnotations} />
                                    </>
                                )}
                            </div>
                            {hasArticleImage && (
                                <ImageBlock
                                    {...page.articleImage}
                                    className='pt-8'
                                    imageClassName="w-full h-full object-cover"
                                    {...(enableAnnotations && { 'data-sb-field-path': 'articleImage' })}
                                />
                            )}
                        </header>
                        {markdown_content && (
                            <Markdown
                                options={{ forceBlock: true }}
                                className="max-w-3xl mx-auto sb-markdown"
                                {...(enableAnnotations && { 'data-sb-field-path': 'markdown_content' })}
                            >
                                {markdown_content}
                            </Markdown>
                        )}
                    </div>
                </article>
                {bottomSections.length > 0 && (
                    <div {...(enableAnnotations && { 'data-sb-field-path': 'bottomSections' })}>
                        {bottomSections.map((section, index) => {
                            const Component = getComponent(section.__metadata.modelName);
                            if (!Component) {
                                throw new Error(`no component matching the page section's model name: ${section.__metadata.modelName}`);
                            }
                            return (
                                <Component
                                    key={index}
                                    {...section}
                                    enableAnnotations={enableAnnotations}
                                    {...(enableAnnotations && { 'data-sb-field-path': `bottomSections.${index}` })}
                                />
                            );
                        })}
                    </div>
                )}
            </main>
        </BaseLayout>
    );
}

function PostAuthor({ author, enableAnnotations }) {
    const authorName = author.name && <span {...(enableAnnotations && { 'data-sb-field-path': '.name' })}>{author.name}</span>;
    return author.slug ? (
        <Link {...(enableAnnotations && { 'data-sb-field-path': 'author' })} href={`/blog/author/${author.slug}`}>
            {authorName}
        </Link>
    ) : (
        <span {...(enableAnnotations && { 'data-sb-field-path': 'author' })}>{authorName}</span>
    );
}





function giscusApp() {
    return (
        <article>
        <h2 className="center">Comments</h2>
        <p>You must be logged in via GitHub to comment.</p>
        <p>Note: The comments section is not fully accessible. I am working with the repo owner on issues to resolve. Comments can be posted on the discussion in github as an alternative.</p>
        <Giscus
        id="comments"
        repo="giscus/giscus-component"
        repoId="MDEwOlJlcG9zaXRvcnkzOTEzMTMwMjA="
        category="Announcements"
        categoryId="DIC_kwDOF1L2fM4B-hVS"
        mapping="specific"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
        />
        </article>
    );
}


/*
function PostCategory({ category, enableAnnotations }) {
    if (!category) {
        return null;
    }
    return (
        <div className="mb-4">
            <Link {...(enableAnnotations && { 'data-sb-field-path': 'category' })} href={category.__metadata?.urlPath}>
                {category.title}
            </Link>
        </div>
    );
}
*/
