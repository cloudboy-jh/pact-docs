import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { Terminal, Github, BookOpen } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2.5">
          <Image
            src="/pact-logo.png"
            alt="Pact"
            width={28}
            height={28}
            className="rounded"
          />
          <span className="font-bold tracking-tight">pact</span>
        </div>
      ),
    },
    links: [
      {
        text: 'Documentation',
        url: '/docs',
        icon: <BookOpen className="size-4" />,
        active: 'nested-url',
      },
      {
        text: 'GitHub',
        url: 'https://github.com/cloudboy-jh/pact',
        icon: <Github className="size-4" />,
        external: true,
      },
    ],
    githubUrl: 'https://github.com/cloudboy-jh/pact',
  };
}
