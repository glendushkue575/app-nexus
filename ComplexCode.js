/* 
  Filename: ComplexCode.js
  Description: This code simulates a complex social network system with extensive functionalities and advanced algorithms.
*/

// Import required libraries
const bcrypt = require('bcrypt');
const moment = require('moment');
const faker = require('faker');
const _ = require('lodash');

// Declare global variables
let users = [];
let posts = [];

// Define User class
class User {
  constructor(username, password) {
    this.id = users.length + 1;
    this.username = username;
    this.password = bcrypt.hashSync(password, 10);
    this.creationDate = moment();
    this.friends = [];
  }

  addFriend(user) {
    this.friends.push(user);
    user.friends.push(this);
  }

  createPost(content) {
    const post = new Post(content, this);
    posts.push(post);
  }
}

// Define Post class
class Post {
  constructor(content, user) {
    this.id = posts.length + 1;
    this.content = content;
    this.user = user;
    this.creationDate = moment();
    this.likes = [];
  }

  addLike(user) {
    this.likes.push(user);
  }
}

// Generate random users
for (let i = 0; i < 100; i++) {
  const username = faker.internet.userName();
  const password = faker.internet.password();
  const user = new User(username, password);
  users.push(user);
}

// Create friendships randomly
_.forEach(users, (user) => {
  const randomFriends = _.sampleSize(users, _.random(5, 15));

  _.forEach(randomFriends, (friend) => {
    user.addFriend(friend);
  });
});

// Create random posts
_.forEach(users, (user) => {
  const randomPostsCount = _.random(5, 20);

  for (let i = 0; i < randomPostsCount; i++) {
    const content = faker.lorem.sentences(_.random(1, 5));
    user.createPost(content);
  }
});

// Perform actions (e.g., like posts)
_.times(10000, () => {
  const randomUser = _.sample(users);
  const randomPost = _.sample(posts);
  randomPost.addLike(randomUser);
});

// Print results
console.log('Number of Users:', users.length);
console.log('Number of Posts:', posts.length);

// Helper functions
function findUserByUsername(username) {
  return _.find(users, { username: username });
}

function findPostsByUser(user) {
  return _.filter(posts, { user: user });
}