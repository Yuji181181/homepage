export async function uploadToR2(
  r2: R2Bucket,
  key: string,
  body: ReadableStream | ArrayBuffer | string,
  contentType?: string,
): Promise<R2Object> {
  return await r2.put(key, body, {
    httpMetadata: contentType ? { contentType } : undefined,
  });
}

export async function getFromR2(
  r2: R2Bucket,
  key: string,
): Promise<R2ObjectBody | null> {
  return await r2.get(key);
}

export async function deleteFromR2(
  r2: R2Bucket,
  key: string,
): Promise<void> {
  await r2.delete(key);
}
