import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="#inicio">
      <span className="text-xl font-bold font-headline text-foreground tracking-tight">
        NeuroSoninho<span className="text-gray-400">™</span>
      </span>
    </Link>
  );
}
