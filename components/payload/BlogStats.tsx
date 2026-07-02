import React from "react";
import { getPayload } from "payload";
import config from "@payload-config";

// Real post stats strip above the Blog list (admin.components.beforeListTable).
// Echoes the design's stat cards — Published / Drafts / Total / Latest — with
// live counts from Payload.
export const BlogStats = async () => {
  let published = 0;
  let total = 0;
  let latestLabel = "—";

  try {
    const payload = await getPayload({ config });
    const [totalRes, pubRes, latestRes] = await Promise.all([
      payload.count({ collection: "posts" }),
      payload.count({ collection: "posts", where: { published: { equals: true } } }),
      payload.find({ collection: "posts", sort: "-date", limit: 1, depth: 0 }),
    ]);
    total = totalRes.totalDocs;
    published = pubRes.totalDocs;
    const d = latestRes.docs[0]?.date as string | undefined;
    if (d) {
      latestLabel = new Date(d).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        timeZone: "UTC",
      });
    }
  } catch {
    /* fall through to zeros if the DB is unreachable */
  }

  const stats = [
    { label: "Published", value: String(published) },
    { label: "Drafts", value: String(Math.max(0, total - published)) },
    { label: "Total Posts", value: String(total) },
    { label: "Latest Post", value: latestLabel },
  ];

  return (
    <div className="lhs-blogstats">
      {stats.map((s) => (
        <div key={s.label} className="lhs-blogstats__card">
          <div className="lhs-blogstats__label">{s.label}</div>
          <div className="lhs-blogstats__value">{s.value}</div>
        </div>
      ))}
    </div>
  );
};

export default BlogStats;
