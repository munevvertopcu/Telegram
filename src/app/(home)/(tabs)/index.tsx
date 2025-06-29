import { router } from 'expo-router';
import { ChannelList } from 'stream-chat-expo';

export default function MainTabScreen() {

    return (
        <ChannelList
            onSelect={(channel) => router.push({
                pathname: "/channel/[cid]",
                params: { cid: channel.cid },
            })} />
    )
}