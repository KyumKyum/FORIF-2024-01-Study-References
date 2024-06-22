import Redis from "ioredis";

const redisClientSub = new Redis({
    host: 'localhost',
    port: 6379
})

const redisClientPub = new Redis({
    host: 'localhost',
    port: 6379
})

export {redisClientPub, redisClientSub};