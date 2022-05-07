//~ IMPORTATION MODULE
// const Level = require('./level');
// const Question = require('./question');
// const Answer = require('./answer');
// const Quiz = require('./quiz');
const User = require('./user');
// const Tag = require('./tag');



// // Une question appartien a un niveau 
// Question.belongsTo(Level, {
//     foreignKey: "level_id",
//     as: "level",
// });

// // Un niveau a plusieur questions
// // On fait appele au champ level_id de Question pour pouvoir réaliser la relation dans le sens inverse
// Level.hasMany(Question, {
//     foreignKey: "level_id",
//     as: "questions"
// });


// // Question à plusieurs réponses 
// Question.hasMany(Answer, {
//     foreignKey: "question_id",
//     as: "answers"
// });

// // Réciproque : Une réponse appartient a une question
// Answer.belongsTo(Question, {
//     foreignKey: "question_id",
//     as: "question"
// });

// // ATTETION Cas particulier : QUESTION ET REPONSE SONT LIEES DE DEUX FACON ! 
// // Une question appartient UNE bonne réponse
// Question.belongsTo(Answer, {
//     foreignKey : "answer_id",
//     as: "good_answer"
// });


// // Un Quiz à PLUSIEURS Questions
// // Quiz has Many Questions
// Quiz.hasMany(Question, {
//     foreignKey: "quiz_id",
//     as: "questions"
// });

// // Réciproque : UNE question appartient à UN quiz
// // Question belongs to Quiz
// Question.belongsTo(Quiz, {
//     foreignKey: "quiz_id",
//     as: "quiz"
// });


// // UN Quiz appartient à UN User 
// Quiz.belongsTo(User, {
//     foreignKey: "user_id",
//     as: "user"
// });

// // Réciproque : UN User possède PLUSIEURS Quiz
// User.hasMany(Quiz, {
//     foreignKey: "user_id",
//     as: "quizzes"
// });


// // -------------------------------------------------------
// // des Quiz appartiennent à PLUSIEURS tags
// Quiz.belongsToMany(Tag, {
//     foreignKey: "quiz_id",
//     through: "quiz_has_tag",
//     otherKey: "tag_id",
//     as: "tags",
// });

// // des Tag appartiennent à PLUSIEURS Quiz ... la réciproque
// Tag.belongsToMany(Quiz, {
//     foreignKey: "tag_id",
//     through: "quiz_has_tag",
//     otherKey: "quiz_id",
//     as: "quizzes"
// });


// module.exports = { Level, Question, Answer, Quiz, User, Tag }


module.exports = {User};