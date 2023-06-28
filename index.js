// nodemon dùng để lắng nghe thay đổi khi đăng lên web không dùng đến nó
// và thêm  --inspect để đi bug nhanh chóng mà không cần console nhiều xem trên web f12
const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => {
  return res.send('huhu')
})

app.listen(port, () => console.log(`http://localhost:${port}`))