// express 인스턴스 생성 및 app에  저장
const express = require('express');
const app = express();

// 포트 지정
const port = process.env.PORT || 8080;

// 화면 엔진 지정
app.set("view engine", "ejs");

// Express에서 static 파일 제공
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.render("test");
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});