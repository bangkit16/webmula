"use server";

import createClient from "microlink.io";

const microlink = createClient();

export async function getProjectMetadata(url: string) {
  try {
    const { title, description } = await microlink.metadata(url);
    return { title: title || url, description: description || "" };
  } catch {
    return { title: url, description: "" };
  }
}

export async function getProjectScreenshot(url: string) {
  try {
    const { url: screenshotUrl } = await microlink.screenshot(url, {
      viewport: { isMobile: true, deviceScaleFactor: 1 },
      waitForTimeout: 2000,
    });
    return { screenshotUrl };
  } catch {
    return { screenshotUrl: null };
  }
}
