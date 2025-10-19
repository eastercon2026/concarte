#!/usr/bin/env node

/**
 * Validates URLs in the "Conventions using ConCarte" section of README.md
 * Exits with code 1 if any URLs don't return 200 OK
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { remark } from "remark";
import { visit } from "unist-util-visit";
import type { Link, Heading, Text } from "mdast";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface UrlCheckResult {
  url: string;
  status: number;
  ok: boolean;
  error?: string;
}

function extractUrlsFromUseSection(readmePath: string): string[] {
  const content = fs.readFileSync(readmePath, "utf-8");
  const tree = remark.parse(content);

  const urls: string[] = [];
  let inExamplesSection = false;

  visit(tree, (node) => {
    if (node.type === "heading" && (node as Heading).depth === 2) {
      const heading = node as Heading;
      const headingText = heading.children
        .filter((child): child is Text => child.type === "text")
        .map((child) => child.value)
        .join("");

      if (headingText === "Conventions using ConCarte") {
        inExamplesSection = true;
      } else {
        inExamplesSection = false;
      }
    }

    if (inExamplesSection && node.type === "link") {
      const link = node as Link;
      urls.push(link.url);
    }
  });

  return urls;
}

async function checkUrl(url: string): Promise<UrlCheckResult> {
  try {
    const response = await fetch(url, {
      method: "GET",
      signal: AbortSignal.timeout(30000),
    });

    return {
      url,
      status: response.status,
      ok: response.status === 200,
    };
  } catch (error) {
    return {
      url,
      status: 0,
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

async function main() {
  const readmePath = path.join(__dirname, "..", "README.md");

  console.log('Extracting URLs from "Conventions using ConCarte" section...\n');

  const urls = extractUrlsFromUseSection(readmePath);

  if (urls.length === 0) {
    console.error('No URLs found in "Conventions using ConCarte" section');
    process.exit(1);
  }

  console.log("Found URLs to validate:");
  urls.forEach((url) => console.log(`  - ${url}`));
  console.log("");

  console.log("Checking URLs...\n");

  const results = await Promise.all(urls.map(checkUrl));

  results.forEach((result) => {
    if (result.ok) {
      console.log(`✓ ${result.url} - ${result.status} OK`);
    } else {
      const errorMsg = result.error ? ` (${result.error})` : "";
      console.log(`✗ ${result.url} - ${result.status} FAILED${errorMsg}`);
    }
  });

  console.log("");

  const failedUrls = results.filter((r) => !r.ok);

  if (failedUrls.length > 0) {
    console.log("❌ The following URLs failed:");
    failedUrls.forEach((result) => {
      const errorMsg = result.error ? ` (${result.error})` : "";
      console.log(`  - ${result.url} (HTTP ${result.status})${errorMsg}`);
    });
    process.exit(1);
  } else {
    console.log("✅ All URLs returned 200 OK");
  }
}

main().catch((error) => {
  console.error("Error:", error.message);
  process.exit(1);
});
