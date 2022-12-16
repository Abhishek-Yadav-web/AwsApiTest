const express = require('express');
const app = express();
const userRouter = require('./router/UserRoute');

app.use('/api/v1',userRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})