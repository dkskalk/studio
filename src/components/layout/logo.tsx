import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="#inicio">
      <span className="text-xl font-bold font-headline text-foreground tracking-tight">
        Neurohipnose Infantil<span className="text-accent">™</span>
      </span>
    </Link>
  );
}
