import User from './userModel.js';

const resolvers = {
    Query: {
        getAllUsers: async () => await User.find()
    },
    Mutation: {
        createUser: async (_, { name, age, email }) => {
            const newUser = new User({ name, age, email });
            return await newUser.save();
        },
        updateUser: async (_, { id, name, age, email }) => await User.findByIdAndUpdate(id, { name, age, email }, { new: true }),
        deleteUser: async (_, { id }) => await User.findByIdAndDelete(id)
    }
};
export default resolvers