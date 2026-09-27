const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>🚀 مرحبًا بك في مشروع الـ DevOps المتكامل الحقيقي! </h1><p>الـ Pipeline يعمل بنجاح 100%</p>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
