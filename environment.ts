export const Private_Secret_Key = process.env.JWT_SECRET_KEY || process.exit(1);

export const databaseUrl =
  process.env.DATABASE_URL ||
  (() => {
    console.error("DATABASE_URL is not set! Exiting...");
    process.exit(1);
  })();
export const directUrl =
  process.env.DIRECT_URL ||
  (() => {
    console.error("DIRECT_URL is not set! Exiting...");
    process.exit(1);
  })();
