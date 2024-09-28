module.exports = {
  posts: [],

  getAll() {
    return this.posts;
  },

  newPost(title, description) {
    const ID = this.generateID();
    this.posts.push({ ID, title, description });
  },

  generateID() {
    return Math.random().toString(36).substring(2, 9);
  },

  deletePost(ID) {
    const index = this.posts.findIndex((post) => post.ID === ID);

    if (index !== -1) {
      this.posts.splice(index, 1);
      return true;
    } else {
      return false;
    }
  },
};
