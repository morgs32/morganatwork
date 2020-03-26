import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  .list-group {
    border-top: 1px solid;
    border-bottom: 1px solid;
  }
  .list-group-item {
    padding: 0;
    
    p {
      margin: 0;
    }
  }

`;

const dateOptions = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric'
};

OpinionTable.propTypes = {};
OpinionTable.defaultProps = {};

export default function OpinionTable(props) {
  const {
    opinions,
  } = props;

  return (
    <StyledDiv>

      <h3 className="h3 mb-4">
        Opinions
      </h3>

      <ul className="list-group list-group-flush">
        {opinions.map((opinion) => {
          const {
            attributes,
          } = opinion;

          return (
            <li className="list-group-item">
              <div className="py-3 font-weight-bold" dangerouslySetInnerHTML={{ __html: attributes.title }} />
              <div className="pb-3 row">
                <div className="col-md-6">
                  {attributes.notes && <div className="mb-3" dangerouslySetInnerHTML={{ __html: attributes.notes }} />}
                  {attributes.quote && (
                    <blockquote className="blockquote mb-3" dangerouslySetInnerHTML={{ __html: attributes.quote }} />
                  )}
                </div>
                {attributes.photo && (
                  <div className="col-md-6">
                    <div className="position-relative h-75 text-right">
                      <div className="position-absolute fill">
                        <img height="100%" width="auto" className="OpinionTable__photo border border-dark rounded"
                             src={attributes.photo.url} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-4 d-flex flex-row justify-content-between">
                <a
                  href={attributes.link.url}
                >
                  Read the original article
                </a>

                <div className="text-black-50">
                  {attributes.publishedOn
                  && Intl
                  && Intl.DateTimeFormat
                  && new Intl.DateTimeFormat('default', dateOptions).format(new Date(attributes.publishedOn))}
                </div>
              </div>

            </li>
          );
        })}
      </ul>

    </StyledDiv>
  );
}

