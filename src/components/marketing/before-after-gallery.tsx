'use client';

import { useState } from 'react';
import { Eye, EyeOff, X, ZoomIn, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface GalleryItem {
  id: string;
  patientName: string;
  treatment: string;
  type: 'before' | 'after';
  image?: string;
  thumbnail?: string;
  description?: string;
}

interface BeforeAfterGalleryProps {
  treatment?: string;
  locale?: 'en' | 'ar';
  variant?: 'slider' | 'grid' | 'minimal';
  limit?: number;
}

const mockGalleryData: GalleryItem[] = [
  {
    id: '1',
    patientName: 'Ahmed Al-Hammadi',
    treatment: 'Hair Transplant',
    type: 'before',
    description: 'Severe hair loss affecting confidence. Patient from UAE seeking affordable solution.',
  },
  {
    id: '2',
    patientName: 'Ahmed Al-Hammadi',
    treatment: 'Hair Transplant',
    type: 'after',
    description: 'Outstanding results after 3500+ grafts at Artemis Hospital. Patient feels confident and satisfied.',
  },
  {
    id: '3',
    patientName: 'Sarah Al-Hassan',
    treatment: 'Dental Implants',
    type: 'before',
    description: 'Missing multiple teeth causing eating difficulties. Patient from Saudi Arabia looking for quality dental care.',
  },
  {
    id: '4',
    patientName: 'Sarah Al-Hassan',
    treatment: 'Dental Implants',
    type: 'after',
    description: 'Beautiful new smile with full mouth rehabilitation. 16 implants completed successfully at Max Healthcare.',
  },
  {
    id: '5',
    patientName: 'Mohammed Al-Otaibi',
    treatment: 'Knee Replacement',
    type: 'before',
    description: 'Struggling with severe knee pain. Mobility severely limited. Patient from Qatar seeking solution.',
  },
  {
    id: '6',
    patientName: 'Mohammed Al-Otaibi',
    treatment: 'Knee Replacement',
    type: 'after',
    description: 'Walking normally within 2 weeks. Pain completely gone. Back to active lifestyle. Highly satisfied with Dr. Sharma.',
  },
  {
    id: '7',
    patientName: 'Fatima Al-Khalili',
    treatment: 'IVF Treatment',
    type: 'before',
    description: 'Multiple failed IVF attempts. Emotional and financial strain. Patient from Bahrain seeking hope.',
  },
  {
    id: '8',
    patientName: 'Fatima Al-Khalili',
    treatment: 'IVF Treatment',
    type: 'after',
    description: 'Successful on first attempt! Beautiful baby boy born. Dreams fulfilled. Grateful to entire Shifa AlHind team.',
  },
  {
    id: '9',
    patientName: 'Khalid Al-Salem',
    treatment: 'Heart Surgery',
    type: 'before',
    description: 'Critical heart condition requiring bypass. Time is of essence. Patient from Oman with family support.',
  },
  {
    id: '10',
    patientName: 'Khalid Al-Salem',
    treatment: 'Heart Surgery',
    type: 'after',
    description: 'Successful bypass with full recovery. Back home with family, living a normal life. Excellent cardiac care at Fortis.',
  },
];

/**
 * Before/After Photo Gallery Component
 * Shows visual proof of treatment results
 * Critical for building trust and conversion
 */
export function BeforeAfterGallery({
  treatment = 'Medical Treatment',
  locale = 'en',
  variant = 'slider',
  limit = 6,
}: BeforeAfterGalleryProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [viewMode, setViewMode] = useState<'paired' | 'grid'>('paired');

  const isRtl = locale === 'ar';

  const displayItems = limit > 0 ? mockGalleryData.slice(0, limit) : mockGalleryData;

  const getPairedItems = () => {
    const beforeItems = displayItems.filter(item => item.type === 'before');
    const afterItems = displayItems.filter(item => item.type === 'after');
    const pairs: Array<{ before: GalleryItem; after: GalleryItem }> = [];

    for (let i = 0; i < beforeItems.length; i++) {
      const beforeItem = beforeItems[i];
      const matchingAfter = afterItems.find(
        item => item.patientName === beforeItem.patientName && item.treatment === beforeItem.treatment
      );
      if (matchingAfter) {
        pairs.push({ before: beforeItem, after: matchingAfter });
      }
    }

    return pairs;
  };

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <>
      {/* Gallery Container */}
      <div className={`space-y-6 ${variant === 'slider' ? 'py-12' : 'py-8'}`}>
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">
            {isRtl ? 'قبل وبعد' : 'Before & After'}
          </h2>
          <p className="text-lg text-gray-600">
            {isRtl
              ? 'شاهد النتائج الحقيقية لمرضى حقيقيين'
              : 'See real results from real patients'}
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setViewMode('paired')}
            className={`flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-all ${
              viewMode === 'paired'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-500'
            }`}
          >
            <Eye className="h-5 w-5" />
            <span>{isRtl ? 'مقترنة' : 'Paired View'}</span>
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-2 rounded-lg px-6 py-3 font-medium transition-all ${
              viewMode === 'grid'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-500'
            }`}
          >
            <Grid className="h-5 w-5" />
            <span>{isRtl ? 'عرض الشبكة' : 'Grid View'}</span>
          </button>
        </div>

        {/* Gallery Content */}
        {viewMode === 'paired' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getPairedItems().map((pair, index) => (
              <div
                key={`${pair.before.id}-${pair.after.id}`}
                className="rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-all"
              >
                {/* Before Image */}
                <div className="relative group cursor-pointer" onClick={() => openModal(pair.before)}>
                  <div className="relative overflow-hidden">
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                      <span className="rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">
                        {isRtl ? 'قبل' : 'Before'}
                      </span>
                    </div>
                  </div>
                  {pair.before.image ? (
                    <img
                      src={pair.before.image}
                      alt={`${pair.before.patientName} - Before`}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-64 items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <User className="h-12 w-12 text-gray-400" />
                    </div>
                  )}
                </div>

                {/* After Image */}
                <div className="relative group cursor-pointer" onClick={() => openModal(pair.after)}>
                  <div className="relative overflow-hidden">
                    <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                      <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                        {isRtl ? 'بعد' : 'After'}
                      </span>
                    </div>
                  </div>
                  {pair.after.image ? (
                    <img
                      src={pair.after.image}
                      alt={`${pair.after.patientName} - After`}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-64 items-center justify-center bg-gradient-to-br from-green-100 to-green-200">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-green-600 p-3">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayItems.map((item) => (
              <div
                key={item.id}
                className="relative group cursor-pointer rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-all"
                onClick={() => openModal(item)}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
                      item.type === 'before' ? 'bg-gray-900' : 'bg-green-600'
                    }`}>
                      {item.type === 'before' ? (
                        <Eye className="h-4 w-4" />
                      ) : (
                        <EyeOff className="h-4 w-4" />
                      )}
                    </span>
                  </div>

                  <div className="h-64 md:h-80 w-full">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={`${item.type === 'before' ? 'Before' : 'After'} - ${item.patientName}`}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                        <User className="h-12 w-12 text-gray-400" />
                      </div>
                    )}
                  </div>

                  {/* Patient Name and Treatment on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-semibold text-sm">{item.patientName}</p>
                    <p className="text-xs text-gray-300">{item.treatment}</p>
                    <p className="mt-1 text-xs line-clamp-3">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Image Modal */}
        {showModal && selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={closeModal}
          >
            <div
              className="relative w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl animate-in zoom-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>

              {/* Modal Content */}
              <div className="p-6">
                {/* Header with navigation */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {selectedItem.patientName}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {selectedItem.treatment}
                    </p>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex gap-2">
                    {selectedItem.type === 'after' && (
                      <button
                        className="rounded-lg bg-white border border-gray-300 px-4 py-2 hover:border-blue-500 hover:bg-blue-50 transition-all"
                        onClick={() => {
                          const prevIndex = displayItems.findIndex(i => i.id === selectedItem.id && i.type === 'before');
                          if (prevIndex > 0) {
                            setSelectedId(displayItems[prevIndex - 1]?.id);
                          }
                        }}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                    )}

                    <button
                      className="rounded-lg bg-white border border-gray-300 px-4 py-2 hover:border-blue-500 hover:bg-blue-50 transition-all"
                      onClick={() => {
                        const nextIndex = displayItems.findIndex(i => i.id === selectedItem.id && i.type === 'after');
                        if (nextIndex < displayItems.length - 1) {
                          setSelectedId(displayItems[nextIndex + 1]?.id);
                        }
                      }}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Image */}
                {selectedItem.image ? (
                  <img
                    src={selectedItem.image}
                    alt={`${selectedItem.type} - ${selectedItem.patientName}`}
                    className="w-full h-96 object-contain rounded-lg bg-gray-100"
                  />
                ) : (
                  <div className="flex h-96 items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <User className="h-16 w-16 text-gray-400" />
                  </div>
                )}

                {/* Description */}
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <h4 className="mb-2 font-semibold text-gray-900">
                    {isRtl ? 'التفاصيل' : 'Details'}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{selectedItem.description}</p>

                  {/* Meta Info */}
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-blue-600" />
                      <span>{isRtl ? 'المرضى' : 'Patient'}: {selectedItem.patientName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <span className="font-medium">{isRtl ? 'الدولة' : 'Country'}:</span>
                        <span className="text-gray-900">
                          {['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman'].find(
                            c => selectedItem.description.includes(c)
                          ) || 'GCC'}
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ZoomIn className="h-4 w-4 text-green-600" />
                      <span>
                        {isRtl ? 'النوع' : 'Type'}: {selectedItem.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Close Button at Bottom */}
                <button
                  onClick={closeModal}
                  className="w-full mt-4 rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition-colors"
                >
                  {isRtl ? 'إغلاق' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Animations */}
        <style jsx>{`
          @keyframes zoom-in {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-zoom-in {
            animation-duration: 0.3s;
            animation-fill-mode: both;
          }
        `}</style>
      </div>
    </>
  );
}
