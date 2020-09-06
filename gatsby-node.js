const createPages = require("./create/createPages")
const createPosts = require("./create/createPosts")

exports.createPagesStatefully = async ({ actions, graphql, reporter }, options) => {
  await createPages({ actions, graphql, reporter }, options)
  await createPosts({ actions, graphql, reporter }, options)
}