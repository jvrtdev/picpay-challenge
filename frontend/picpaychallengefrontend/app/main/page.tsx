'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper"

export default function main() {
  return(
    <div className="">
      <MaxWidthWrapper>
        <nav className="flex items-center justify-between w-full">
          <h1>Minha carteira</h1>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </nav>

      </MaxWidthWrapper>
    </div>
  )
}