import Ably from "ably";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method.toLowerCase() !== "post") return res.status(405).end();

        const ably = new Ably.Realtime(process.env.ABLY);

        const channel = ably.channels.get("ngchat");

        channel.publish("message", req.body);

        res.status(200).end();
    } catch {
        return res.status(400).end();
    }
};
