"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import createClient from "microlink.io";

const microlink = createClient();

export default function ProjectImage({ url, className }: { url: string; className?: string }) {
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  useEffect(() => {
    microlink
      .screenshot(url, {
        viewport: { isMobile: true, deviceScaleFactor: 1 },
        waitForTimeout:2000
      })
      .then((data) => setImgUrl(data.url))
      .catch(() => setImgUrl(null));
  }, [url]);

  if (!imgUrl) return null;

  return <Image src={imgUrl} alt={`Screenshot of ${url}`} width={1200} height={675} unoptimized className={className} />;
}
