import Image from "next/image"

interface ImageContainer {
  src: string
}

function ImageContainer({ src }: ImageContainer) {
  return (
    <Image
      className="max-w-full rounded-lg h-full w-auto"
      src={src}
      alt="Image generated with AI"
      width={1024}
      height={1024}
      blurDataURL={src}
      priority
    />
  )
}

export default ImageContainer