require('dotenv').config();
const connectDB = require('./config/db');
const app = require('./app');

(async () => {
  await connectDB(process.env.MONGO_URI);
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`🚀 Server running on http://localhost:${port}`));
})();
