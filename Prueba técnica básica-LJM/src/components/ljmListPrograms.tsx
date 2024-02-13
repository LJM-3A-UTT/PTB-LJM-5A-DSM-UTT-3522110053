import { useState } from 'react'

import type { Entry } from '~/types'

import { CardProgram } from './ljmCardProgram'
import { Modal } from './ljmModal'

interface ListProgramsProps {
  data: Entry[]
}

export function ListPrograms({ data }: ListProgramsProps) {
  const [currentljmEntry, setCurrentljmEntry] = useState<Entry | null>(null)
  const [showljmModal, setShowljmModal] = useState(false)

  const handleClick = (entry: Entry) => {
    setCurrentljmEntry(entry)
    setShowljmModal(true)
  }

  const onClose = () => {
    setCurrentljmEntry(null)
    setShowljmModal(false)
  }

  return (
    <section
      className="justify-center wrapper-items sm:justify-items-start"
      style={{
        gap: '30px',
      }}
    >
      {data.map(item => (
        <CardProgram {...item} key={item.title} onClick={handleClick} />
      ))}
      {showljmModal && currentljmEntry ? (
        <Modal isOpen={showljmModal} onClose={onClose}>
          <div className="flex flex-col gap-4 sm:flex-row">
            <aside>
              <img
                alt={currentljmEntry.title}
                className="w-full max-w-xs"
                src={currentljmEntry.images['Poster Art'].url}
              />
            </aside>
            <aside className="flex flex-col justify-between gap-4">
              <div className="space-y-4">
                <h1 className="text-lg font-semibold">{currentljmEntry.title}</h1>
                <p className="text-sm max-w-prose sm:text-base">{currentljmEntry.description}</p>
              </div>
              <span>Lanzamiento: {currentljmEntry.releaseYear || 'N/A'}</span>
            </aside>
          </div>
        </Modal>
      ) : null}
    </section>
  )
}
