import { Post } from "@prisma/client"
import Card from "app/(shared)/Card"

type Props = {
  techPosts: Array<Post>
}
const Tech = ({ techPosts }: Props) => {
  return (
    <section>
      <hr className="border-1" />
      {/* HEADER */}
      <div className="flex items-center gap-3 my-8">
        <h4 className="px-5 py-2 text-sm font-bold bg-accent-orange text-wh-900">
          HOT
        </h4>
        <p className="text-2xl font-bold">Latest News in Technology</p>
      </div>

      {/* FLEX */}
      {/* <div className="flex items-center justify-between gap-5">
        <div className="bg-wh-500 h-96 basis-1/2"></div>
        <div className="flex flex-col gap-3 h-96 basis-1/2">
          <div className="bg-wh-500 basis-1/3"></div>
          <div className="bg-wh-500 basis-1/3"></div>
          <div className="bg-wh-500 basis-1/3"></div>
        </div>
      </div> */}

      {/* GRID */}
      <div className="grid-cols-2 grid-rows-3 my-5 sm:grid gap-x-8 gap-y-8">
        {/* LARGE CARD */}
        <Card
          className="col-span-1 row-span-3 "
          imageHeight="h-96"
          isLongForm
          post={techPosts[0]}
        />
        {/* SMALL CARDS */}
        <Card
          className="flex justify-between col-span-1 row-span-1 gap-3 mt-10 sm:mt-0"
          imageHeight="h-48"
          isSmallCard
          post={techPosts[1]}
        />
        <Card
          className="flex justify-between col-span-1 row-span-1 gap-3 mt-10 sm:mt-0"
          imageHeight="h-48"
          isSmallCard
          post={techPosts[2]}
        />
        <Card
          className="flex justify-between col-span-1 row-span-1 gap-3 mt-10 sm:mt-0"
          imageHeight="h-48"
          isSmallCard
          post={techPosts[3]}
        />
      </div>
    </section>
  )
}
export default Tech
