import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiZoomIn, FiZoomOut } from 'react-icons/fi';

interface CertModalProps {
  image: string;
  title: string;
  onClose: () => void;
}

export default function CertModal({ image, title, onClose }: CertModalProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLDivElement>(null);

  const zoomIn = useCallback(() => setScale((s) => Math.min(s + 0.25, 4)), []);
  const zoomOut = useCallback(() => setScale((s) => Math.max(s - 0.25, 0.5)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setScale((s) => Math.max(0.5, Math.min(s - e.deltaY * 0.002, 4)));
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (scale > 1) {
        setIsPanning(true);
        setPanStart({ x: e.clientX - position.x, y: e.clientY - position.y });
      }
    },
    [scale, position]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isPanning && scale > 1) {
        setPosition({ x: e.clientX - panStart.x, y: e.clientY - panStart.y });
      }
    },
    [isPanning, panStart, scale]
  );

  const handleMouseUp = useCallback(() => setIsPanning(false), []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative mx-4 flex max-h-[90vh] max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
            <h3 className="text-sm font-semibold text-white truncate pr-4">{title}</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={zoomOut}
                className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                <FiZoomOut size={16} />
              </button>
              <span className="min-w-[3ch] text-center text-xs text-gray-500">{Math.round(scale * 100)}%</span>
              <button
                onClick={zoomIn}
                className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                <FiZoomIn size={16} />
              </button>
              <button
                onClick={onClose}
                className="ml-2 rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                <FiX size={18} />
              </button>
            </div>
          </div>

          <div
            ref={imgRef}
            className="flex items-center justify-center overflow-hidden"
            style={{ height: 'calc(90vh - 56px)' }}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <img
              src={image}
              alt={title}
              draggable={false}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                cursor: scale > 1 ? (isPanning ? 'grabbing' : 'grab') : 'default',
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'contain',
                transition: isPanning ? 'none' : 'transform 0.15s ease',
              }}
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
