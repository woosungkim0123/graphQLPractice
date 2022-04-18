const woosung = {
  name: "woosung",
  age: 30,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => woosung,
  },
};

export default resolvers;
