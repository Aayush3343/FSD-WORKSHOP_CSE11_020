import http from 'http';

const port = 3000;

const users = [
    {
        id: 1,
        name: "Aayush Sharma",
        phone: "9968888400",
        email: "aastik@gmail.com"
    },
    {
        id: 2,
        name: "Aastik Rai",
        phone: "7827536087",
        email: "aastik@gmail.com"
    },
    {
        id: 3,
        name: "Abhay Singh",
        phone: "919291929192",
        email: "adalla@gmail.com"
    },
    {
        id: 4,
        name: "Prashant music",
        phone: "6767575747474",
        email: "prashant@gmail.com"
    }
];

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === "/msg" && method === "GET") {

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");

        res.end("Hello World");
    }

    else if (url === "/sys" && method === "GET") {

        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");

        res.end("Page not found");
    }

    // GET all users
    else if (url === "/users" && method === "GET") {

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify(users));
    }

    // GET user by id
    else if (url.startsWith("/users/") && method === "GET") {

        const id = url.split("/")[2];

        const user = users.find((u) => u.id == id);

        if (!user) {
            return res.end("User not found");
        }

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify(user));
    }

    // CREATE user
    else if (url === "/create" && method === "POST") {

        let body = "";

        req.on("data", (content) => {
            body = body + content;
        });

        req.on("end", () => {

            const newUser = JSON.parse(body);

            users.push(newUser);

            res.statusCode = 201;
            res.setHeader("Content-Type", "application/json");

            res.end(JSON.stringify({
                user: newUser
            }));
        });
    }

    else {

        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");

        res.end("Route not found");
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});