const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    console.log('server running ' + req.url)
    let urlString = url.parse(req.url, true);

    if (req.url === '/profile') {
        res.write('You are on the profile page!');
    } else if (urlString.pathname === '/products') {
        res.write('You are on the products page!\n');

        let productsList = ['milk', 'eggs', 'cheese', 'pork', 'shrimp', 'chicken'];
        let querySearch = urlString.query.search;
        if (querySearch) {
            if (productsList.includes(querySearch)) {
                res.write('Product "' + querySearch + '"found');
            } else {
                res.write('Product "' + querySearch + '" not found');
            }
        }

    } else if (req.url === '/cart') {
        res.write('You are on the cart page!');
    } else if (req.url === '/register') {
        res.write('You are on the profile page!');
    } else if (req.url === '/login') {
        res.write('You are on the login page!');
    }
    res.end();
}).listen(8080);