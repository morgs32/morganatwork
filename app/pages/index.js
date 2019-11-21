import React, { useMemo, useState } from 'react';
import classnames from 'classnames';
import Flipper from 'react-spring-flip/lib/Flipper';
import _groupBy from 'lodash/groupBy';
import styled from 'styled-components';

/* eslint-disable-next-line */
import cardModules from 'webpack-import-glob-loader!../projects/index';

import ProjectCard from '../src/components/ProjectCard/ProjectCard';

const StyledDiv = styled.div`
  .Index__button {
    width: auto;
    background-color: transparent;
    font-weight: bold;
  }

  .Index__buttonContainer {
    border-radius: 0.25rem;
  }
  .Index__button--openSource {
    background: linear-gradient(-135deg, #FCE38A 0%, #F38181 100%);
  }
  .Index__button--work {
    background: linear-gradient(-135deg, #17EAD9 0%, #6078EA 100%);
  }
  .Index__button--hobbyProject {
    background: linear-gradient(-135deg, #43E695 0%, #3BB2B8 100%);
  }
  
  .Index__visibleCard {
    opacity: 1;
  }
  
  .Index__hiddenCard {
    position: relative;
    left: -10vw;
    z-index: 0;
    opacity: .5;
  }
`

const cards = cardModules.map(({ default: Description, meta }) => ({ Description, ...meta }));

Index.propTypes = {};
Index.defaultProps = {};

export default function Index(props) {

  const [selectedType, setType] = useState('none');

  const { visibleCards, hiddenCards } = useMemo(() => {
    if (selectedType !== 'none') {
      return _groupBy(cards, (card) => card.projectTypes.includes(selectedType) ? 'visibleCards' : 'hiddenCards');
    }
    return {
      visibleCards: cards,
      hiddenCards: [],
    };
  }, [selectedType]);

  const selectType = (flipType) => {
    if (selectedType === flipType) {
      return setType(null);
    }
    setType(flipType);
  };
  
  console.log('hiddenCards', hiddenCards);

  return (
    <Flipper flipKey={selectedType}>

      <StyledDiv className="container Index">
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
                <option value="none">Choose category</option>
                <option value="work">Work experience</option>
                <option value="openSource">Open source</option>
                <option value="hobbyProject">Hobby project</option>
              </select>
            </span>
          </div>
        </div>
        <div className="row d-flex flex-row">
          {visibleCards.map((card) => {
            return (
              <div
                key={card.title}
                style={{
                  zIndex: 1,
                }}
                className="col-12 col-md-6 mb-4 position-relative"
              >
                <div className="Index__visibleCard position-relative">
                  <ProjectCard card={card} />
                </div>
              </div>
            );
          })}
          {hiddenCards.map((card) => {
            return (
              <div
                key={card.title}
                style={{
                  zIndex: 0,
                }}
                className="col-12 col-md-6 mb-4 position-relative"
              >
                <div className="Index__hiddenCard position-relative">
                  <ProjectCard card={card} />
                </div>
              </div>
            );
          })}
        </div>
      </StyledDiv>
    </Flipper>
  );
}

