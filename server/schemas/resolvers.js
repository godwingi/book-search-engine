const { Book, User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    books: async () => {
      return await Book.find({});
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user.id });
      }
      throw new AuthenticationError("Your need to be logged in");
      //   return await User.findById(args.id);
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email!");
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect Password!");
      }
    },

    saveBook: async (parent, { input: BookInput }, context) => {
      if (context.user) {
        return await User.create({ input: BookInput }); //will this work?
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { bookId: bookId } },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in");
    },
  },
};

module.exports = resolvers;

// Mutation: {
//     addUser: async (parent, { username, email, password }) => {
//       return await User.create({ username, email, password });
//     },
//     login: async (parent, { email, password }) => {
//       return await Auth.findOrUpdateOrCreate({ email, password });
//     },
//     saveBook: async (parent, { input: BookInput }) => {
//       return await User.create({ input: BookInput });
//     },
//     removeBook: async (parent, bookId) => {
//       return await User.removeById(bookId);
//     },
//   },
// };
