import imageCompression from "browser-image-compression";

export async function compressImage(imageUrl: string): Promise<string> {
  const response = await fetch(imageUrl);
  const blob = await response.blob();

  const options = {
    maxSizeMB: 0.2,
    maxWidthOrHeight: 100,
    useWebWorker: true,
  };

  const compressedBlob = await imageCompression(blob, options);
  return URL.createObjectURL(compressedBlob);
}
