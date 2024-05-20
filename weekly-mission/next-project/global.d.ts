declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// global.d.ts

import type { MongoClient } from "mongodb";

declare global {
  namespace globalThis {
    var _mongo: Promise<MongoClient>;
  }
}

declare module "*.png";
declare module "*.jpg";
declare module "*.svg";
