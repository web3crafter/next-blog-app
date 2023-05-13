import SideBar from "@/app/(shared)/SideBar"
import { prisma } from "@/app/api/client"
import { FormattedPost } from "@/app/types"
import { Post as PostType } from "@prisma/client"
import Content from "./Content"

type Props = {
  params: { id: string }
}
export const revalidate = 60

const getPost = async (id: string) => {
  const post: PostType | null = await prisma.post.findUnique({
    where: { id },
  })

  if (!post) {
    return null
  }

  const formattedPost = {
    ...post,
    createdAt: post?.createdAt?.toISOString(),
    updatedAt: post?.updatedAt?.toISOString(),
  }

  return formattedPost
}

const Post = async ({ params }: Props) => {
  const { id } = params
  const post: FormattedPost | null = await getPost(id)
  // console.log("post:", post)

  if (!post) {
    return <div>Post Not Found</div>
  }
  return (
    <main className="px-10 leading-7">
      <div className="gap-10 mb-5 md:flex">
        <div className="basis-3/4">
          <Content post={post} />
        </div>
        <div className="basis-1/4">
          <SideBar />
        </div>
      </div>
    </main>
  )
}
export default Post
