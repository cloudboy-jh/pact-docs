import Link from 'next/link';
import Image from 'next/image';
import { Terminal, Cpu, Palette, Key, Github, ArrowRight, Sparkles, FolderGit2 } from 'lucide-react';

const features = [
  { 
    icon: Terminal, 
    title: 'Shell configs', 
    description: 'zsh, bash, PowerShell — cross-platform' 
  },
  { 
    icon: Cpu, 
    title: 'Editor setup', 
    description: 'nvim, vscode, cursor configs' 
  },
  { 
    icon: Palette, 
    title: 'Themes', 
    description: 'Terminal & editor themes' 
  },
  { 
    icon: Key, 
    title: 'Secrets', 
    description: 'Safe in your OS keychain' 
  },
];

const steps = [
  {
    number: '1',
    title: 'Install the CLI',
    description: (
      <>
        Install via Homebrew or download from{' '}
        <Link href="https://github.com/cloudboy-jh/pact/releases" className="text-emerald-400 hover:text-emerald-300">
          GitHub Releases
        </Link>
      </>
    ),
  },
  {
    number: '2',
    title: 'Initialize',
    description: 'Run pact init to authenticate and create your my-pact repo',
  },
  {
    number: '3',
    title: 'Sync anywhere',
    description: 'Run pact sync on any machine to apply your setup',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(39,39,42,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(39,39,42,0.3)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <header className="p-6 flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <Image
              src="/pact-logo.png"
              alt="Pact"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="text-xl font-bold">pact</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/docs"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              Docs
            </Link>
            <Link
              href="https://github.com/cloudboy-jh/pact"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <Github size={18} />
              GitHub
            </Link>
          </div>
        </header>

        {/* Hero */}
        <main className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Your portable{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
                  dev identity
                </span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Shell, editor, AI prefs, themes — one kit, any machine. Edit in the browser, sync from terminal.
              </p>
            </div>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/docs"
                className="flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 rounded-lg font-medium hover:bg-zinc-100 transition-all"
              >
                <span>Get Started</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                href="https://github.com/cloudboy-jh/pact"
                className="flex items-center gap-2 px-6 py-3 bg-zinc-800 text-zinc-100 rounded-lg font-medium hover:bg-zinc-700 transition-all border border-zinc-700"
              >
                <Github size={18} />
                <span>View on GitHub</span>
              </Link>
            </div>

            <p className="text-sm text-zinc-500">
              Works on macOS, Linux, and Windows
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-xl hover:bg-zinc-900/50 hover:border-zinc-700/50 transition-all"
              >
                <feature.icon size={24} className="text-emerald-400 mb-4" />
                <h3 className="font-medium mb-1">{feature.title}</h3>
                <p className="text-sm text-zinc-500">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* How it works */}
          <div className="mt-24 space-y-8">
            <h2 className="text-2xl font-bold text-center">How it works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="text-center space-y-4">
                  <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto text-emerald-400 font-bold border border-zinc-700">
                    {step.number}
                  </div>
                  <h3 className="font-medium">{step.title}</h3>
                  <p className="text-sm text-zinc-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CLI preview */}
          <div className="mt-24">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 font-mono text-sm max-w-2xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-zinc-500">terminal</span>
              </div>
              <div className="space-y-2">
                <p>
                  <span className="text-emerald-400">$</span> brew install cloudboy-jh/tap/pact
                </p>
                <p className="text-zinc-500">Installing pact...</p>
                <p className="text-emerald-400">✓ Installed!</p>
                <p className="mt-4">
                  <span className="text-emerald-400">$</span> pact init
                </p>
                <p className="text-zinc-500">Authenticating with GitHub...</p>
                <p className="text-zinc-500">Cloning to ./.pact/...</p>
                <p className="text-emerald-400">✓ Pact initialized!</p>
                <p className="mt-4">
                  <span className="text-emerald-400">$</span> pact sync
                </p>
                <p className="text-zinc-500">Syncing all modules...</p>
                <p className="text-emerald-400">✓ 5 synced, 0 failed</p>
              </div>
            </div>
          </div>

          {/* What's in a Pact section */}
          <div className="mt-24 space-y-8">
            <h2 className="text-2xl font-bold text-center">What's in a Pact</h2>
            <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 font-mono text-sm max-w-2xl mx-auto">
              <pre className="text-zinc-300 overflow-x-auto">
{`username/my-pact/
├── pact.json              # Manifest
├── shell/                 # .zshrc, .bashrc, profile.ps1
├── editor/                # nvim, vscode, cursor configs
├── terminal/              # Ghostty, Kitty, Alacritty
├── git/                   # .gitconfig, .gitignore_global
├── prompts/               # AI prompts (default.md)
├── agents/                # CLAUDE.md, .cursorrules
├── tools/                 # lazygit, ripgrep, fzf configs
├── theme/                 # Colors, wallpapers, icons
└── ...`}
              </pre>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-24 text-center space-y-6 py-12 bg-zinc-900/30 border border-zinc-800/50 rounded-2xl">
            <Sparkles size={32} className="mx-auto text-emerald-400" />
            <h2 className="text-2xl font-bold">Ready to get started?</h2>
            <p className="text-zinc-400 max-w-md mx-auto">
              Stop copying dotfiles manually. Pact makes your dev environment portable.
            </p>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-zinc-900 rounded-lg font-medium hover:bg-emerald-400 transition-all"
            >
              Read the docs
              <ArrowRight size={18} />
            </Link>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 text-center text-sm text-zinc-500 border-t border-zinc-800/50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/pact-logo.png"
                alt="Pact"
                width={20}
                height={20}
                className="rounded opacity-50"
              />
              <span>Pact - Your portable dev identity</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/docs" className="hover:text-zinc-300 transition-colors">
                Documentation
              </Link>
              <Link href="https://github.com/cloudboy-jh/pact" className="hover:text-zinc-300 transition-colors">
                GitHub
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
