import defaultImage from '~/assets/placeholder.png'

interface CardProps {
  title: string
  urlImg?: string
  altImage?: string
  children?: React.ReactNode
}

export function Card({ title, altImage, urlImg, children }: CardProps) {
  return (
    <div className="relative flex flex-col items-center gap-2 border-2 border-transparent w-44 h-72 hover:border-gray-300">
      <img
        alt={altImage ?? title}
        className="object-cover w-full h-full bg-cover bg-black/90"
        src={urlImg ?? defaultImage}
        onError={e => (e.currentTarget.src = defaultImage)}
      />
      <span className="block px-2 text-center truncate whitespace-nowrap w-44 text-medium">
        {title}
      </span>
      {children ?? null}
    </div>
  )
}
