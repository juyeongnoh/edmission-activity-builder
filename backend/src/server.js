require("dotenv").config();

const app = require("./app");
const { sequelize } = require("./models");

const PORT = process.env.PORT || 3000;

// Database initialization and server start
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("✅ 데이터베이스 연결 성공");

    await sequelize.sync({ alter: true });
    console.log("✅ 데이터베이스 동기화 완료");

    app.listen(PORT, () => {
      console.log(`🚀 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
    });
  } catch (error) {
    console.error("❌ 서버 시작 실패:", error);
    process.exit(1);
  }
}

startServer();
