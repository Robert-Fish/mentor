import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Spinner from './common/Spinner';

const COURSE_QUERY = gql`
  query CourseQuery {
    courses {
      title
      price
      url
      image_480x270
    }
  }
`;
export default function Results() {
  return (
    <div className="container mt-3">
      <div className="row">
        <Query query={COURSE_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <Spinner />;
            if (error) console.error(error);
            return (
              <Fragment>
                {data.courses.map(course => (
                  <ItemContent
                    name={course.title}
                    key={course.title}
                    image={course.image_480x270}
                  />
                ))}
              </Fragment>
            );
          }}
        </Query>
      </div>
    </div>
  );
}

const ItemContent = (props) => {
  const { name, description, image } = props;
  return (
    <div className="col-md-4 col-xl-3 col-xs-5">
      <div className="result">
        <img src={image} alt="" style={{ Height: '5px', Width: '100vw' }} className="img-fluid" />
        <h3 className="title">{name}</h3>
        <p className="desc">{description}</p>
      </div>
    </div>
  );
};

ItemContent.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
