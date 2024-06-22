import redisClient from "@/provider/redis";

export const publish = (message: string) => {
    redisClient.publish('chat', message);
}

export const subscribe = () => {
    redisClient.subscribe('chat')
}
