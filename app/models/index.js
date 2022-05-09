//~ IMPORTATION MODULE
const Category = require('./category.js');
const Role = require('./role.js');
const Snippet = require('./snippet.js');
const User = require('./user.js');

//~ -------------------------------------------- CATEGORY - USER
// user a plusieur category
User.hasMany(Category,{
    foreignKey:'user_id',
    as : 'categories'
})

// Category appartient a un user
Category.belongsTo(User,{
    foreignKey: 'user_id',
    as : 'creator'
})

//~ -------------------------------------------- CATEGORY - SNIPPET
// category possede plusieur snippet
Category.belongsToMany(Snippet,{
    through : 'category_has_snippet',
    foreignKey : 'category_id',
    otherKey : 'snippet_id',
    as : 'snippets'
})

// snippet possede plusieur category
Snippet.belongsToMany(Category,{
    through : 'category_has_snippet',
    foreignKey : 'snippet_id',
    otherKey : 'category_id',
    as : 'categories'
})

//~ -------------------------------------------- USER - SNIPPET

// user a plusieur snippet
User.hasMany(Snippet,{
    foreignKey:'user_id',
    as : 'snippets'
})

// snippet appartient a un user
Snippet.belongsTo(User,{
    foreignKey: 'user_id',
    as : 'user'
})

//~ -------------------------------------------- USER - ROLE

// role a plusieur user
Role.hasMany(User,{
    foreignKey: 'role_id',
    as : 'users'
})

// user appartient a un role
User.belongsTo(Role,{
    foreignKey:'role_id',
    as : 'role'
})





module.exports = { User, Category, Role, Snippet };