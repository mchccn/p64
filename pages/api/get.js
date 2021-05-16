import fetch from "node-fetch";
import atob from "atob";

export default async (req, res) => {
	try {
		if (req.method.toLowerCase() !== "get") return;

		const url = req.query.url;

		if (!url) return res.send("fuck u");

		const r = await fetch(atob(url));

		return res.send(await r.text());
	} catch {
		return res.send("fuck u");
	}
}
