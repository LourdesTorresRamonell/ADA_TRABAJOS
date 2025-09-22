const net = require("net");
const { libroRequest } = require("./controllers/bookcontroller"); 

const server = net.createServer((socket) => {
    console.log("Cliente conectado");

    socket.on("data", (data) => {
        const libroid = data.toString().trim();
        console.log(`Se busca el libro con id: ${libroid}`);

        try {
            const response = libroRequest(libroid);
            socket.write(JSON.stringify(response));
        } catch (err) {
            socket.write(`Error: ${err.message}`);
        } finally {
            socket.end();
        }
    });

    socket.on("end", () => {
        console.log("Cliente desconectado");
    });

    socket.on("error", (err) => {
        console.log("Se produjo un error:", err.message);
    });
});

server.listen(4000, () => {
    console.log("Servidor escuchando en el puerto 4000");
});
