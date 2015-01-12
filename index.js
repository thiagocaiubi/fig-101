 var restify = require("restify");
 var restifyServer = restify.createServer();
 var redis = require("redis");
 var redisClient = redis.createClient(6379, "redis_1");

restifyServer.get("/", function(req, res, next) {
    redisClient.incr("visits");

    redisClient.get("visits", function(err, reply) {
        res.json({
           visits: reply
        });
        next();
    });
});

restifyServer.listen(5000, function() {
    console.log("server listening at %s", restifyServer.url);
});
