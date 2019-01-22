const redis = require('redis');

const redisClient = redis.createClient({
  host: "13.52.104.122",
  port: "6379"
});

redisClient.on("ready", () => {
  console.log('Connected to Redis!');
});

const readRedis = (id, callback) => {
  redisClient.get(id, (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, JSON.parse(res));
    }
  })
};

const writeRedis = (record, callback) => {
  redisClient.set(record.id, JSON.stringify(record), 'EX', 30, (err) => {
    if (err) {
      callback(err);
    } else {
      readRedis(record.id, callback);
    }
  });
};

module.exports.writeRedis = writeRedis;
module.exports.readRedis = readRedis;
