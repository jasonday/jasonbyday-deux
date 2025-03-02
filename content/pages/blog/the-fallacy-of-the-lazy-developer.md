---
type: PostLayout
title: 'The Accessibility Blame Game: The Fallacy of the "Lazy Developer"'
date: '2025-02-03'
author: content/data/jason-day.json
excerpt: >-
  In the digital accessibility industry, a pervasive narrative persists: "If
  only developers cared more about accessibility..."But this narrative is not
  just unfair, it misrepresents the real problem. Accessibility failures are
  rarely about individual laziness; they stem from systemic organizational
  shortcomings.
featuredImage:
  type: ImageBlock
  url: /images/abstract-feature1.svg
  altText: Thumbnail
  elementId: ''
  styles:
    self:
      padding:
        - pt-0
        - pl-0
        - pb-0
        - pr-0
bottomSections:
  - type: DividerSection
    title: Divider
    elementId: ''
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-3
          - pl-3
          - pb-3
          - pr-3
  - type: RecentPostsSection
    title:
      type: TitleBlock
      text: Recent posts
      color: text-dark
      styles:
        self:
          textAlign: center
    recentCount: 3
    showThumbnail: true
    showExcerpt: true
    showDate: true
    showAuthor: true
    actions: []
    elementId: ''
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
slug: the-fallacy-of-the-lazy-developer
isFeatured: false
isDraft: false
seo:
  type: Seo
  metaTitle: lorem-ipsum
  metaDescription: lorem-ipsum
  addTitleSuffix: false
  metaTags: []
colors: bg-light-fg-dark
styles:
  self:
    flexDirection: col
    borderColor: border-dark
---
In the digital accessibility industry, a pervasive narrative persists: "If only developers cared more about accessibility..."But this narrative is not just unfair, it misrepresents the real problem. Accessibility failures are rarely about individual laziness; they stem from systemic organizational shortcomings. This article examines why blaming developers is counterproductive and proposes a holistic approach to improving digital accessibility across organizations.

## The Agile Illusion: Scrumfall
![Ron Burgundy - By "agile" you mean "waterfall in sprints"?](https://media.licdn.com/dms/image/v2/D5612AQHBbMrbw-qPSA/article-inline_image-shrink_1000_1488/B56ZVSAX.xGoAQ-/0/1740837585388?e=1746662400\&v=beta\&t=59ZdxBMnGPdY8LwjtGW79chbUGv13ooa1W7WCWemyz0)

Many tech companies tout their agile methodologies—daily stand-ups, sprint planning, iterative design—it all sounds great, but the reality often feels like waterfall projects timeboxed to two-week sprints. This "Scrumfall" approach combines the sequential phases of waterfall with the time constraints of Scrum, without embracing true agile collaboration. We're still in linear product development, with engineers at the end of the process. This approach leads to compressed timelines and lack of collaboration, resulting in less than ideal outcomes where it's easy to point the finger at the last person to touch the product when things go wrong.

When it comes to accessibility, these Scrumfall processes break down even further. Product requirements may include vague accessibility stories like "As a user, I want WCAG 2.1 AA compliance." Designs may be finalized without accessibility annotations or clear communication of intent. 

Imagine being a developer in this scenario. You're the last link in a chain where accessibility was an afterthought or wasn't properly planned for, and now, you're tasked with retrofitting accessibility into a nearly complete product.

What appears as "resistance" or "laziness" is often just the inevitable result of a broken process. 

## Time, Resources, and Priorities

We celebrate developers who master new frameworks over a weekend. We applaud their ability to adapt and learn. Yet, we're quick to criticize when they struggle with accessibility. Why the disconnect?

Consider:

*   Learning a new framework boosts a developer's resume and market value.

*   Organizations recognize and reward technical skill acquisition.

*   New skills get wrapped into new products, leading to recognition.

Now, contrast that with accessibility:

*   Is often the responsibility of individual specialists, or small teams, rather than collective ownership.

*   It rarely factors into performance reviews or promotions.

*   Is rarely celebrated in the same way shipping a new feature is.

*   Is frequently deprioritized when deadlines loom, or when an organization makes cuts.

*   May not be mandated.

The issue isn't that developers can't learn accessibility - **it's that organizations don't incentivize them to.** 

Inaccessible outcomes are rarely due to an individual, they're a reflection of organizational priorities.

## Collective Responsibility: Setting the Stage for Systemic Solutions

While developers often bear the brunt of accessibility criticisms, it's crucial to understand that accessibility shortfalls occur across the entire product development lifecycle. To truly understand the problem, we must acknowledge the role-specific failures that contribute to accessibility barriers and the significant challenge of inconsistent accessibility integration:

*   Sporadic Inclusion in User Stories: A product manager may write a user story like "As a user, I want to filter results," with no mention of keyboard navigation or screen reader compatibility. Accessibility is treated as an optional add-on, not a core requirement.

*   Design Gaps: A designer might create a visually appealing custom dropdown but overlook essential accessibility features like focus states and ARIA attributes. Accessibility is not consistently factored into the design process.

*   Developer Guesswork: Consequently, developers are left to guess about accessibility requirements. Should the dropdown announce selections? Should filter actions trigger screen reader notifications? This inconsistency forces developers into a no-win situation:

The cumulative result is a product that excludes users with disabilities.

As accessibility specialists, we often say, "accessibility is a team effort." This means we must move beyond individual blame and recognize that accessibility failures are often systemic, requiring collective solutions. By understanding how each role contributes to the problem, we can begin to implement the strategic interventions needed to transform our approach to accessibility.

### Shifting from Reactive to Proactive Approaches

This is precisely where accessibility experts must shift from reactive troubleshooters to proactive strategic partners. As specialists, we are frequently relegated to fixing accessibility problems rather than being empowered to prevent them in the first place. By the time we're consulted, key decisions have already been made, designs finalized, and code written - making remediation more difficult and expensive.

A strategic approach involves integrating accessibility expertise throughout the entire development lifecycle:

*   At the Leadership Level: Accessibility experts must advocate upward, helping leadership understand that accessibility is an organizational responsibility requiring proper allocation of resources, time, and training across all disciplines. This means framing accessibility not just as a compliance matter, but as a strategic business imperative that benefits all users.

*   Within Cross-Functional Teams: Rather than working in isolation, accessibility specialists should build bridges between product, design, and development teams. This collaborative approach ensures accessibility considerations are woven into requirements, designs, and implementation strategies from the beginning.

### Creating Consistent Accessibility Practices

Organizations that truly prioritize accessibility establish consistent practices across all roles, with accessibility experts guiding the process:

*   Explicit Accessibility Requirements: Product managers should embed accessibility requirements directly into user stories, such as: "As a keyboard-only user, I need to navigate through search filters using standard keyboard controls" or "As a screen reader user, I need to be notified when search results update." 

*   Comprehensive Design Specifications: Designers should provide detailed specifications that consistently include focus states, ARIA roles, expected screen reader announcements, and keyboard interaction patterns. 

*   Strategic Knowledge Dissemination: Rather than focusing solely on developer training, accessibility knowledge should be strategically distributed throughout the organization. This means providing specialized guidance tailored to each role's needs, empowering everyone to contribute to inclusive outcomes.

*   Incentive Alignment: Working with leadership, accessibility experts can help ensure that accessibility achievements are recognized and rewarded with the same enthusiasm as other technical accomplishments. This means incorporating accessibility metrics into performance reviews and celebrating successes across the organization.

When accessibility considerations are consistently integrated at every stage of development, and when accessibility experts act as allies and strategic partners rather than solely as “reviewers”, organizations can effectively transform the "lazy developer" narrative into one of shared responsibility and collective success. This proactive approach drives lasting cultural change, making accessibility a core value and not an afterthought.

## Tackling the whole problem

The "lazy developer" narrative doesn't just miss the mark, it actively harms our progress toward digital inclusion. When we encounter an accessibility issue, rather than asking "why didn't the developer fix this?" we should examine the entire process that produced the failure.

Consider a common accessibility issue: a heading that isn't properly marked up in HTML. Instead of placing blame, trace the journey:

*   Process Examination: Was the heading structure clearly documented in requirements? Did designers annotate their mockups to indicate heading levels? Was there a design walkthrough where this was discussed?

*   Knowledge Assessment: Do team members across disciplines understand why proper heading structure matters? Does everyone have access to accessibility guidelines and training?

*   Procedural Integration: Does the Definition of Ready include accessibility requirements? Does the Definition of Done include accessibility testing? Are there checkpoints throughout development where accessibility is verified?

*   Cultural Evaluation: Does leadership emphasize the importance of accessibility? Is time explicitly allocated for accessibility implementation?

When a component fails accessibility testing, the problem rarely begins and ends with developer implementation. By examining these broader questions, we can identify systemic breakdowns and address the root causes rather than symptoms.

## Moving Forward: From Blame to Collaboration

Shifting our perspective from blame to collaboration isn't just a mindset shift, but the key to lasting accessibility change. Organizations must move beyond pointing fingers and start integrating accessibility into every phase of development. The question isn't "Why didn't the developer fix this?" but rather, "How can we prevent these failures in the first place?" 

When organizations embrace collective responsibility for accessibility, they not only create more inclusive products but also improve their overall development processes in several key ways:

*   Increased team knowledge: When accessibility becomes everyone's responsibility, team members naturally develop a broader understanding of inclusive design principles that benefit all aspects of product development.

*   Faster problem-solving: As accessibility knowledge spreads throughout the team, identifying and fixing issues becomes more efficient. Problems that once required specialist intervention can be addressed directly by team members who encounter them.

*   Enhanced collaboration: A shared commitment to accessibility naturally fosters better communication and teamwork across disciplines, breaking down the silos that often lead to accessibility failures in the first place.

The path to truly accessible products begins with dismantling the "lazy developer" myth and embracing a culture where accessibility is woven into every role, every process, and every decision. Start today: examine your organization's approach, identify where accessibility gets lost in translation, and commit to building bridges instead of assigning blame. Because when we make accessibility everyone's responsibility, we get better products and a more inclusive digital landscape. 



