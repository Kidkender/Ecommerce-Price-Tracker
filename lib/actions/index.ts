"use sever";

export async function scrapeAndStoreProduct(productUrl: string) {
  if (!productUrl) {
    return;
  }

  try {
    const scarpedProduct = await scrapeAmazonProduct(productUrl);
  } catch (error) {
    throw new Error(`Failed to create/update product : ${error}`);
  }
}
