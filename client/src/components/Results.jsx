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
      <h1 className="mb-4 text-center text-white">Latest Courses</h1>
      <div className="categories text-center mb-4">
        <button className="btn btn-html" type="button">
          html
        </button>
        <button className="btn btn-css" type="button">
          css
        </button>
        <button className="btn btn-js" type="button">
          js
        </button>
      </div>

      <div className="row">
        <Query query={COURSE_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <Spinner />;
            if (error) return <h3>{error}</h3>;
            return (
              <Fragment>
                {data.courses.map(course => (
                  <ItemContent
                    name={course.title}
                    key={course.title}
                    image={course.image_480x270}
                    url={course.url}
                    price={course.price}
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
  const {
    name, image, url, price,
  } = props;
  return (
    <div className="col-md-4 col-xl-3 col-xs-5">
      <a
        href={`http://udemy.com${url}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <div className="result">
          <img src={image} alt="" style={{ width: '100%' }} className="img-fluid" />
          <h3 className="title">{name}</h3>
          <h4 className="price">{price}</h4>
        </div>
      </a>
    </div>
  );
};

ItemContent.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  url: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

ItemContent.defaultProps = {
  image: 'null',
};
