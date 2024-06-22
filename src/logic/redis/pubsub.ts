import {redisClientPub, redisClientSub} from "@/provider/redis";

export const publish = (message: string) => {
    redisClientPub.publish('chat', message);
}

export const subscribe = () => {
    redisClientSub.subscribe('chat')
}
