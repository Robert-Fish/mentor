const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require("graphql");
const axios = require("axios");
const keys = require("./keys.js");

// Course Type
const CourseType = new GraphQLObjectType({
  name: "Course",
  fields: () => ({
    title: { type: GraphQLString },
    url: { type: GraphQLString },
    price: { type: GraphQLString },
    image_480x270: { type: GraphQLString },
    id: { type: GraphQLInt },
    avg_rating: { type: GraphQLString },
    primary_category: { type: GraphQLString },
    price: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    courses: {
      type: new GraphQLList(CourseType),
      resolve(parent, args) {
        return axios
          .get(
            " https://www.udemy.com/api-2.0/courses/?page_size=20&ordering=highest-rated",
            {
              headers: {
                Authorization: keys.udemyKey
              }
            }
          )
          .then(res => res.data.results);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
