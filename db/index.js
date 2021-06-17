const mongoose = require("mongoose");

//1.몽고디비 접속할 때 필요한 정보를 만들어야 함
//2. 접속 시도
//3. 접속에 성공했을 때
//4. 접속에 실패했을 때

const connectData = {
  DB_ID: "4leaf",
  DB_PASSWORD: "fourleaf0309",
  DB_HOST: "210.114.1.127",
  DB_PORT: "27017",
  DB_USER: "admin",
  DB_NAME: "Desk_OEH",
};

const connect = () => {
  mongoose.connect(
    `mongodb://${connectData.DB_ID}:${connectData.DB_PASSWORD}@${connectData.DB_HOST}:${connectData.DB_PORT}/${connectData.DB_USER}`,
    //ID:PASSWORD@HOST:PORT/USER
    {
      dbName: connectData.DB_NAME,
      useNewUrlParser: true,
      useCreateIndex: true,
    },
    (error) => {
      if (error) {
        console.log(error);
        console.log(`🍎 Faild To MongoDB Connect :: ${connectData.DB_NAME}🍎`);
      } else {
        console.log(
          `🍏 SUCCESS TO COMMECT MONGODB :: ${connectData.DB_NAME}🍏`
        );
      }
    }
  );
};

module.exports = connect;
