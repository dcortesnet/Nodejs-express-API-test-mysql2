const express = require('express');
const app = express();
const usersRoutes = require('./src/routes/user.route');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`Server listen on http://localhost:${PORT}`);
});

module.exports = {app}