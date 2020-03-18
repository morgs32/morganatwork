import React from 'react';
import ShortOpinion from './ShortOpinion';

export default {
  component: ShortOpinion,
  title: 'Components/ShortOpinion',
};

export const Example = () => {
  return (
    <div className="bg-dark">
      <div
        style={{
          maxWidth: 500
        }}
        className="container py-3"
      >
        <ShortOpinion
          shortOpinion={{
            'id': 'i-HLHEDK59ki',
            'type': 'row',
            'attributes': {
              'createdOn': '2020-03-12T10:40:04.304-07:00',
              'link': {
                '@context': 'http://schema.org/',
                '@type': 'WebPage',
                'url': 'https://daverupert.com/2018/04/pitfalls-of-card-uis/'
              },
              'notes': '<p>This article goes through some of the issues with using Cards too heavily in your UI. The risk of them becoming &quot;baby webpages&quot; is spot on.</p>',
              'quote': '<p>I’m of the opinion that all cards in a Card UI are destined to become baby webpages. Just like modals. Baby hero units with baby titles and baby body text and baby dropdown menu of actions and baby call to action bars, etc.</p>\n<p>In some ways this outcome is the opposite of what you were intending. You wanted a Card UI where everything was simple and uniform, but what you end up with is a CSS gallery website filled with baby websites.</p>',
              'title': '<p>Cards UI run amok</p>',
              'photo': {
                '@context': 'http://schema.org/',
                '@type': 'ImageObject',
                'name': 'image.png',
                'height': 836,
                'width': 1666,
                'url': require('./Stackshirts.png'),
                'status': 'live'
              }
            }
          }}
        />
      </div>
    </div>
  );
};
