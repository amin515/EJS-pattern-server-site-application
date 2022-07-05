
const mongoose = require('mongoose');

const connectmongoDB = async () => {
  try{
   
    let connect = await mongoose.connect(process.env.MONGO_DB);
    console.log(`mongodb connect with host : ${ connect.connection.host }`.bgMagenta.black)

  }catch( error ){
    console.log( error );
  }
}
module.exports = connectmongoDB;