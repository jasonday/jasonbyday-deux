import * as React from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';

import { mapStylesToClassNames as mapStyles } from '../../../../utils/map-styles-to-class-names';
import { getPageUrl } from '../../../../utils/page-utils';
import Link from '../../../atoms/Link';
import ImageBlock from '../../../blocks/ImageBlock';

export default function PostFeedItem(props) {
    const {
        post,
        showThumbnail,
        showExcerpt,
        showDate,
        showAuthor,
        hasSectionTitle,
        hasBigThumbnail,
        hoverEffect = 'move-up',
        sectionColors,
        hasAnnotations,
        blogList,
    } = props;
    const TitleTag = hasSectionTitle ? 'h3' : 'h2';
    const flexDirection = post.styles?.self?.flexDirection ?? 'col';
    const hasThumbnail = !!(showThumbnail && post.featuredImage?.url);

    return (
        <Link
            href={getPageUrl(post)}
            className={classNames(
                'sb-card',
                'block',
                post.colors ?? 'bg-light-fg-dark',
                post.styles?.self?.margin ? mapStyles({ margin: post.styles?.self?.margin }) : undefined,
                post.styles?.self?.padding ? mapStyles({ padding: post.styles?.self?.padding }) : undefined,
                post.styles?.self?.borderWidth && post.styles?.self?.borderWidth !== 0 && post.styles?.self?.borderStyle !== 'none'
                    ? mapStyles({
                          borderWidth: post.styles?.self?.borderWidth,
                          borderStyle: post.styles?.self?.borderStyle,
                          borderColor: post.styles?.self?.borderColor ?? 'border-primary'
                      })
                    : undefined,
                post.styles?.self?.borderRadius ? mapStyles({ borderRadius: post.styles?.self?.borderRadius }) : undefined,
                post.styles?.self?.textAlign ? mapStyles({ textAlign: post.styles?.self?.textAlign }) : undefined,
                'overflow-hidden',
                mapCardHoverStyles(hoverEffect, sectionColors)
            )}
            {...(hasAnnotations && { 'data-sb-object-id': post.__metadata?.id })}
        >
            
            <div className={classNames('flex', 'gap-6', {'w-full':!blogList, 'grid':blogList, 'grid-cols-[31.8%_68.1%]':blogList, 'md:grid-cols-[1_1]':blogList}, mapFlexDirectionStyles(flexDirection, hasThumbnail))}>
                {hasThumbnail && (
                    <ImageBlock
                        {...post.featuredImage}
                        className={classNames({
                            'xs:w-[50%] xs:shrink-0': hasBigThumbnail && (flexDirection === 'row' || flexDirection === 'row-reversed'),
                            'xs:w-[28.4%] xs:shrink-0': !hasBigThumbnail && (flexDirection === 'row' || flexDirection === 'row-reversed')
                        })}
                        imageClassName="w-full h-full object-cover"
                        {...(hasAnnotations && { 'data-sb-field-path': 'featuredImage' })}
                    />
                )}
                <div
                    className={classNames('w-full', {
                        'xs:grow': hasThumbnail && (flexDirection === 'row' || flexDirection === 'row-reversed')
                    })}
                >
                    <TitleTag className="h3">
                        <span
                            className={classNames(mapCardTitleHoverStyles(hoverEffect, post.colors))}
                            {...(hasAnnotations && { 'data-sb-field-path': 'title' })}
                        >
                            {post.title}
                        </span>
                    </TitleTag>
                    <PostAttribution
                        showAuthor={showAuthor}
                        showDate={showDate}
                        date={post.date}
                        author={post.author}
                        className="mt-3"
                        hasAnnotations={hasAnnotations}
                    />
                    {showExcerpt && post.excerpt && (
                        <p className="mt-3" {...(hasAnnotations && { 'data-sb-field-path': 'excerpt' })}>
                            {post.excerpt}
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
}

function PostAttribution({ showDate, showAuthor, date, author, className = '', hasAnnotations }) {
    if (!showDate && !(showAuthor && author)) {
        return null;
    }
    return (
        <div className={classNames('text-sm', 'uppercase', className)}>
            {showAuthor && author && (
                <>
                    <span {...(hasAnnotations && { 'data-sb-field-path': 'author' })}>
                        <span {...(hasAnnotations && { 'data-sb-field-path': '.name' })}>{author.name}</span>
                    </span>
                    {showDate && <span className="mx-2">|</span>}
                </>
            )}
            {showDate && (
                <time dateTime={dayjs(date).format('YYYY-MM-DD HH:mm:ss')} {...(hasAnnotations && { 'data-sb-field-path': 'date' })}>
                    {dayjs(date).format('YYYY-MM-DD')}
                </time>
            )}
        </div>
    );
}

function mapFlexDirectionStyles(flexDirection: string, hasThumbnail: boolean) {
    switch (flexDirection) {
        case 'row':
            return hasThumbnail ? 'flex-col xs:flex-row xs:items-stretch' : 'flex-col';
        case 'row-reverse':
            return hasThumbnail ? 'flex-col xs:flex-row-reverse xs:items-stretch' : 'flex-col';
        case 'col':
            return 'flex-col';
        case 'col-reverse':
            return 'flex-col-reverse';
        default:
            return null;
    }
}

function mapCardHoverStyles(hoverEffect: string, colors: string) {
    switch (hoverEffect) {
        case 'standard':
        case 'thin-underline':
        case 'thick-underline':
            return 'group';
        case 'move-up':
            return 'transition duration-200 ease-in hover:-translate-y-1.5';
        case 'shadow':
            return colors === 'bg-dark-fg-light'
                ? 'transition duration-200 ease-in hover:shadow-2xl hover:shadow-black/60'
                : 'transition duration-200 ease-in hover:shadow-2xl';
        case 'shadow-plus-move-up':
            return colors === 'bg-dark-fg-light'
                ? 'transition duration-200 ease-in hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1.5'
                : 'transition duration-200 ease-in hover:shadow-2xl hover:-translate-y-1.5';
        default:
            return null;
    }
}

function mapCardTitleHoverStyles(hoverEffect: string, colors: string) {
    switch (hoverEffect) {
        case 'standard':
            return colors === 'bg-dark-fg-light'
                ? 'hover:underline focus:underline group-hover:underline group-focus:underline decoration-2 underline-offset-4'
                : 'hover:underline focus:underline group-hover:underline group-focus:underline decoration-2 underline-offset-4';
        case 'thin-underline':
            return colors === 'bg-dark-fg-light'
                ? 'bg-left-bottom bg-[length:0_1px] bg-no-repeat bg-gradient-to-r from-light to-light transition-[background-size] duration-300 ease-in-out group-hover:bg-[length:100%_1px]'
                : 'bg-left-bottom bg-[length:0_1px] bg-no-repeat bg-gradient-to-r from-dark to-dark transition-[background-size] duration-300 ease-in-out group-hover:bg-[length:100%_1px]';
        case 'thick-underline':
            return colors === 'bg-dark-fg-light'
                ? 'bg-left-bottom bg-[length:0_50%] bg-no-repeat bg-gradient-to-r from-light/30 to-light/30 transition-[background-size] duration-300 ease-in-out group-hover:bg-[length:100%_50%]'
                : 'bg-left-bottom bg-[length:0_50%] bg-no-repeat bg-gradient-to-r from-dark/20 to-dark/20 transition-[background-size] duration-300 ease-in-out group-hover:bg-[length:100%_50%]';
        default:
            return null;
    }
}
