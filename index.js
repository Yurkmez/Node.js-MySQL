const express = require('express');
const path = require('path');
const todoRoutes = require('./routes/todo');
const sequelize = require('./utils/database');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
// Мидлваре для парсинга объектов json
app.use(express.json());

app.use('/api/todo', todoRoutes);

app.use((req, res, next) => {
    res.sendFile('index.html');
});

const PORT = process.env.PORT || 3000;
async function start() {
    try {
        await sequelize.sync();
        app.listen(PORT);
    } catch (error) {
        console.log(error);
    }
}
start();
