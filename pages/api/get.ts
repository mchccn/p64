import atob from "atob";
import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method.toLowerCase() !== "get") return res.status(405).end();

        const url = req.query.url;

        if (!url) return res.status(400).end();

        const r = await fetch(atob(url.toString()));

        return res.send(await r.text());
    } catch {
        return res.status(400).end();
    }
};
