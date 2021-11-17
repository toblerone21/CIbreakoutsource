/*module.exports = {
    mongoURI: 'mongodb+srv://Breakout:JyJWAFVfjFXnDB1f@cibreakout.2kxfc.mongodb.net/Authenticate?retryWrites=true&w=majority'
}*/


dbPassword = 'mongodb://Breakout:JyJWAFVfjFXnDB1f@cibreakout-shard-00-00.2kxfc.mongodb.net:27017,cibreakout-shard-00-01.2kxfc.mongodb.net:27017,cibreakout-shard-00-02.2kxfc.mongodb.net:27017/Test?ssl=true&replicaSet=atlas-uldhkg-shard-0&authSource=admin&retryWrites=true&w=majority';
module.exports = {
    mongoURI: dbPassword
};