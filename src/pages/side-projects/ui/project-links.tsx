import { buttonVariants } from '@xonic0506/sonic-ui';
import Image, { type StaticImageData } from 'next/image';

import { FigmaLogoImage, GithubLogoImage, NpmLogoImage } from '@/shared/assets';

import type { ProjectLinkKind, SideProject } from '../model/side-projects';

const LINK_LOGOS: Record<
  ProjectLinkKind,
  { label: string; image: StaticImageData; className?: string }
> = {
  // 검은 로고라 다크 테마에서는 뒤집어 보여요.
  github: {
    label: 'GitHub',
    image: GithubLogoImage,
    className: 'in-data-[theme=dark]:invert',
  },
  npm: { label: 'npm', image: NpmLogoImage },
  figma: { label: 'Figma', image: FigmaLogoImage },
};

// Figma `Site / Project Link`: 로고만 있는 외부 링크(ghost icon-md 모양, 로고 20).
// 카드 전체 링크(::after) 위에 올라오도록 relative를 줘요.
export function ProjectLinks({ project }: { project: SideProject }) {
  return (
    <ul className="relative flex gap-1">
      {project.links.map(({ kind, href }) => {
        const { label, image, className = '' } = LINK_LOGOS[kind];
        return (
          <li key={kind}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} ${label} (새 탭)`}
              className={buttonVariants({ variant: 'ghost', size: 'icon-md' })}
            >
              <Image
                src={image}
                alt=""
                width={20}
                height={20}
                className={className}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
