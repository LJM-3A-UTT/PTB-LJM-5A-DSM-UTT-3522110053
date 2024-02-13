interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full p-8">
      <div className="absolute w-full h-full bg-gray-900 opacity-50" />
      <div className="z-50 overflow-y-auto bg-white rounded-lg">
        <div className="px-6 py-4">
          <div className="flex justify-end">
            <button onClick={onClose}>
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
