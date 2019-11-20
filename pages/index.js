import React, { useMemo, useState } from 'react';
import classnames from 'classnames';
import _sortBy from 'lodash/sortBy';
import Flipper from 'react-spring-flip/lib/Flipper';

/* eslint-disable-next-line */
import cardModules from 'webpack-import-glob-loader!../projects';

import Card from '../src/components/Card/Card';

import './index.scss';

const cards = cardModules.map(({ default: Description, meta }) => ({ Description, ...meta }));

Index.propTypes = {};
Index.defaultProps = {};

export default function Index(props) {

  const [selectedType, setType] = useState(null);

  const sortedCards = useMemo(() => {
    if (selectedType) {
      return _sortBy(cards, (card) => card.types.includes(selectedType) ? 0 : 1);
    }
    return cards;
  }, [selectedType]);

  const selectType = (flipType) => {
    if (selectedType === flipType) {
      return setType(null);
    }
    setType(flipType);
  };

  return (
    <Flipper flipKey={selectedType || 'none'}>

      <div className="container Index">
        <div className="row">
          <div className="col-12 col-sm-10 col-md-8">
            <h1>
              Projects
            </h1>
            <h2 className="mb-4 display-1">
              I aim to build meaningful products and make it easier for
              other engineers to do the same.
            </h2>
          </div>
        </div>

        <div className="text-right">
          <div className="form-group">
            <label className="d-block">
              Sort by:
            </label>
            <span
              className={classnames('d-inline-block Index__buttonContainer', {
                'Index__button--work': selectedType === 'work',
                'Index__button--openSource': selectedType === 'openSource',
                'Index__button--hobbyProject': selectedType === 'hobbyProject'
              })}
            >
              <select
                value={selectedType}
                onChange={(event) => selectType(event.target.value)}
                className="custom-select Index__button"
              >
                <option value>Choose category</option>
                <option value="work">Work experience</option>
                <option value="openSource">Open source</option>
                <option value="hobbyProject">Hobby project</option>
              </select>
            </span>
          </div>
        </div>
        <div className="row d-flex flex-row">
          {sortedCards.map((card) => {

            const {
              title,
              website,
              github,
              types,
              Description,
            } = card;

            return (
              <div
                key={title}
                className="col-12 col-md-6 mb-4"
              >
                <Card
                  title={title}
                  website={website}
                  github={github}
                  hobbyProject={types.includes('hobbyProject')}
                  work={types.includes('work')}
                  openSource={types.includes('openSource')}
                >
                  <Description />
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </Flipper>
  );
}

