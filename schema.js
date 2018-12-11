const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require("graphql");
const axios = require("axios");

// Course Type
const CourseType = new GraphQLObjectType({
  name: "Course",
  fields: () => ({
    title: { type: GraphQLString },
    url: { type: GraphQLString },
    price: { type: GraphQLString },
    image_480x270: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    courses: {
      type: new GraphQLList(CourseType),
      resolve(parent, args) {
        return axios
          .get(" https://www.udemy.com/api-2.0/courses", {
            headers: {
              Authorization:
                "Basic Vk5iWkFheW1hZUN2WmREcHJVejUyQnVIQkdJTzIxWmdpYm1KYkRxODpqNnN3a2Z0OEpzMTJFN3BDUmppN3lvOGZDVWZsQloxS1I0MW9IM0JXUlZ4WDlRRFdDNlBoc0R5YjlzUHhZeHU5NERTRHhFbmREVzRlMTVYeE9PZkdHWXNsTHRFQXh6czZkanpackg1YXRwRVEzT3NsREVhWnE2SWxEYjlxWFVQaQ=="
            }
          })
          .then(res => res.data.results);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
