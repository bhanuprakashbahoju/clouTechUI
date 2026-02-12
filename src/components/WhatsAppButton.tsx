import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '917386906346';
const DEFAULT_MESSAGE = 'Hi ClouTech Academy! I\'m interested in learning more about your courses.';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 p-4 max-w-[260px] relative"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-sm text-gray-800 font-medium mb-1">Need help? 💬</p>
            <p className="text-xs text-gray-500 mb-3">Chat with us on WhatsApp for instant support.</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#25D366] text-white text-sm font-semibold py-2 rounded-lg hover:bg-[#1fb855] transition-colors"
            >
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setShowTooltip(!showTooltip)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.89 15.89 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.164 2.28-.844.18-1.946.324-5.658-1.216-4.752-1.97-7.806-6.8-8.04-7.116-.226-.316-1.89-2.518-1.89-4.802s1.196-3.404 1.62-3.87c.39-.43.924-.646 1.434-.646.174 0 .33.016.47.03.424.182.704.432.984 1.068l1.374 3.252c.188.43.316.774.036 1.27-.27.494-.404.802-.792 1.232-.39.43-.81.958-.388 1.388.42.43 1.868 3.076 4.008 4.278 1.5.84 2.71 1.098 3.194 1.318.43.194.788.166 1.088-.098.37-.328.828-.874 1.294-1.412.33-.388.748-.434 1.218-.26.476.166 3.018 1.424 3.536 1.684.518.26.862.39.99.608.124.218.124 1.276-.266 2.376z" />
        </svg>
      </motion.button>
    </div>
  );
}
