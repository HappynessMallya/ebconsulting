import { Image } from 'lucide-react';

interface ImageUploadPlaceholderProps {
  label?: string;
}

export default function ImageUploadPlaceholder({ label = 'Upload Image' }: ImageUploadPlaceholderProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400">
      <Image className="h-12 w-12 mb-2 opacity-50" />
      <p className="text-xs text-center px-4">{label}</p>
    </div>
  );
}

