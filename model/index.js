const User = require('././users');
const Podcast = require('./podcast');

User.hasMany(Podcast, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Podcast.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = { User, Podcast };