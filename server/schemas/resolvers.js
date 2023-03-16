const { Book, User } = require("../models");

const resolvers = {
  Query: {
    books: async () => {
      return await Book.find({});
    },
    me: async (parent, args) => {
      return await User.findById(args.id);
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      return await User.create({ username, email, password });
    },
    login: async (parent, { email, password }) => {
      return await Auth.findOrUpdateOrCreate({ email, password });
    },
    saveBook: async (parent, { input: BookInput }) => {
      return await User.create({ input: BookInput });
    },
    removeBook: async (parent, bookId) => {
      return await User.removeById(bookId);
    },
  },
};

module.exports = resolvers;
