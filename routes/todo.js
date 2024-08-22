const { Router } = require('express');
const router = Router();

// Получение списка задач
router.get('/', (req, res) => {
    res.json({ a: 1111111111 });
});
// Создание новой задачи
router.post('/', (req, res) => {});
// "Check out" задачи
router.put('/:id', (req, res) => {});
// Удалене задачи
router.delete('/:id', (req, res) => {});

module.exports = router;
