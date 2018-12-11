import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Results extends Component {
  constructor() {
    super();
    this.state = {
      courses: [
        {
          name: 'React For beginners',
          image:
            'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?cs=srgb&dl=codes-coding-computer-270366.jpg&fm=jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, dolorum.',
        },
        {
          name: 'Vue For Beginners',
          image:
            'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?cs=srgb&dl=codes-coding-computer-270366.jpg&fm=jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, dolorum.',
        },
        {
          name: 'Angular For beginners',
          image:
            'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?cs=srgb&dl=codes-coding-computer-270366.jpg&fm=jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, dolorum.',
        },
        {
          name: 'Express JS For beginners',
          image:
            'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?cs=srgb&dl=codes-coding-computer-270366.jpg&fm=jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, dolorum.',
        },
        {
          name: 'Polymer For beginners',
          image:
            'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?cs=srgb&dl=codes-coding-computer-270366.jpg&fm=jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, dolorum.',
        },
        {
          name: 'MongoDb For beginners',
          image:
            'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?cs=srgb&dl=codes-coding-computer-270366.jpg&fm=jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, dolorum.',
        },
      ],
    };
  }

  render() {
    const { courses } = this.state;
    return (
      <div className="container">
        <div className="row">
          {courses.map(course => (
            <ItemContent
              name={course.name}
              description={course.description}
              image={course.image}
              key={course.name}
            />
          ))}
        </div>
      </div>
    );
  }
}

const ItemContent = (props) => {
  const { name, description, image } = props;
  return (
    <div className="col-md col-xl-3 col-lg-3 item">
      <img
        src={image}
        alt=""
        style={{ Height: '5px', Width: '100vw', marginTop: '10px' }}
        className="img-fluid"
      />
      <h3 className="title">{name}</h3>
      <p className="desc">{description}</p>
    </div>
  );
};

ItemContent.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
