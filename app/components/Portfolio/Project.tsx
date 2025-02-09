import { ProjectImage, StyledProjectCard } from "@/app/styles";
import { HeaderMd, StyledRichText } from "@/app/styles/utils/Typography";
import { ProjectProps } from "@/app/types/components/PortfolioTypes";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Tags from "../Tags/Tag";

export default function Project({
  title,
  description,
  url,
  image,
  tags,
}: ProjectProps) {
  return (
    <StyledProjectCard>
      <div>
        <ProjectImage>
          <Image
            src={`${image.url}?w=2000&fm=webp`}
            alt={image.alt}
            width={image.dimensions.width}
            height={image.dimensions.height}
            style={{ width: "100%", height: "auto" }}
          />
        </ProjectImage>
        <HeaderMd>
          <a href={url} target="_blank">
            {title.toUpperCase()}
          </a>
        </HeaderMd>
        <StyledRichText>
          <PortableText value={description} />
        </StyledRichText>
      </div>
      <Tags tags={tags} />
    </StyledProjectCard>
  );
}
