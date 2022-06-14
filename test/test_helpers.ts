import { readFileSync } from "fs";

export function buildApiResponse(fixturePath: string) {
  return JSON.parse(
    readFileSync(
      `./test/fixtures/${fixturePath}`,
      "utf8",
    )
      .toString(),
  );
}
