import Image from "next/image"

// You can replace these with your actual project screenshots
export const projectImages = {
  hotelBooking: "/images/jewar-al-safwah.png",
  eLearning: "/images/e-learning-platform.png",
  parentalControl: "/images/parental-control-features.png",
  messaging: "/images/messaging-system.png",
}

// Optimized Image component for projects
export function ProjectImage({
  src,
  alt,
  className = "",
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div className={`relative overflow-hidden rounded-lg bg-muted ${className}`}>
      <Image
        src={src || "/placeholder.svg?height=400&width=600"}
        alt={alt}
        width={600}
        height={400}
        className="w-full h-full object-contain"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false}
      />
    </div>
  )
}
