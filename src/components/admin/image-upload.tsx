'use client';

import { CldUploadWidget } from 'next-cloudinary';
import { Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
  onRemove?: () => void;
  label?: string;
  description?: string;
}

export function ImageUpload({
  value,
  onChange,
  onRemove,
  label = 'Upload Image',
  description,
}: ImageUploadProps) {
  return (
    <div className="space-y-2">
      {label && <label className="text-sm font-medium">{label}</label>}
      {description && <p className="text-xs text-gray-500">{description}</p>}

      <div className="flex items-center gap-4">
        {value ? (
          <div className="relative w-32 h-32 rounded-lg border-2 border-gray-200 overflow-hidden">
            <Image
              src={value}
              alt="Uploaded image"
              fill
              className="object-cover"
            />
            {onRemove && (
              <button
                type="button"
                onClick={onRemove}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
        ) : (
          <div className="w-32 h-32 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
            <Upload className="h-8 w-8" />
          </div>
        )}

        <div className="flex-1">
          <CldUploadWidget
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'shifa-alhind'}
            onSuccess={(result: any) => {
              if (result.event === 'success') {
                onChange(result.info.secure_url);
              }
            }}
          >
            {({ open }) => (
              <Button
                type="button"
                variant="outline"
                onClick={() => open()}
                className="w-full sm:w-auto"
              >
                <Upload className="mr-2 h-4 w-4" />
                {value ? 'Change Image' : 'Upload Image'}
              </Button>
            )}
          </CldUploadWidget>

          {value && (
            <p className="mt-2 text-xs text-gray-500 break-all">{value}</p>
          )}
        </div>
      </div>
    </div>
  );
}

interface MultiImageUploadProps {
  values: string[];
  onChange: (values: string[]) => void;
  label?: string;
  description?: string;
  maxImages?: number;
}

export function MultiImageUpload({
  values,
  onChange,
  label = 'Upload Images',
  description,
  maxImages = 10,
}: MultiImageUploadProps) {
  const handleAdd = (url: string) => {
    if (values.length < maxImages) {
      onChange([...values, url]);
    }
  };

  const handleRemove = (index: number) => {
    const newValues = values.filter((_, i) => i !== index);
    onChange(newValues);
  };

  return (
    <div className="space-y-2">
      {label && <label className="text-sm font-medium">{label}</label>}
      {description && <p className="text-xs text-gray-500">{description}</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {values.map((url, index) => (
          <div
            key={index}
            className="relative w-full aspect-square rounded-lg border-2 border-gray-200 overflow-hidden"
          >
            <Image
              src={url}
              alt={`Image ${index + 1}`}
              fill
              className="object-cover"
            />
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        ))}

        {values.length < maxImages && (
          <CldUploadWidget
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'shifa-alhind'}
            onSuccess={(result: any) => {
              if (result.event === 'success') {
                handleAdd(result.info.secure_url);
              }
            }}
          >
            {({ open }) => (
              <button
                type="button"
                onClick={() => open()}
                className="w-full aspect-square rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 hover:border-primary-500 hover:text-primary-500 transition-colors"
              >
                <Upload className="h-8 w-8 mb-2" />
                <span className="text-xs">Add Image</span>
                <span className="text-xs">
                  ({values.length}/{maxImages})
                </span>
              </button>
            )}
          </CldUploadWidget>
        )}
      </div>
    </div>
  );
}
