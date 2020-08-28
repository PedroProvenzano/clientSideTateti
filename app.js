const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("Bienvenido a Tateti");
})

app.listen(port, () => {
    console.log(`Servidor corriendo correctamente en puerto: ${port}`);
});