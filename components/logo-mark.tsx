import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  title?: string;
};

export function LogoMark({ className, title = "Muslim Settify" }: LogoMarkProps) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      role="img"
      aria-label={title}
      className={cn("shrink-0", className)}
    >
      <defs>
        <linearGradient id="settifyMark" x1="6" y1="30" x2="30" y2="6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0066FF" />
          <stop offset="1" stopColor="#00D4AA" />
        </linearGradient>
      </defs>
      {/* Minimal flame/leaf mark (fast to render; no network fetch) */}
      <path
        d="M18 3c4.6 3.1 7.2 7.2 7.2 12.2 0 6.5-4.6 11.8-10.2 11.8S4.8 21.7 4.8 15.2C4.8 11 7.2 7.3 11.5 4.2c-.2 1.1-.2 2.2 0 3.2.7 3.1 3 5.7 6.5 7.5 1.7-1.7 2.7-3.6 3-5.7.2-2.1-.2-4.1-1-6.2Z"
        fill="url(#settifyMark)"
      />
      <path
        d="M21.2 16.6c-.8 4-3.6 6.7-7 7.1 1 .4 2.1.6 3.3.6 4.6 0 8.3-3.9 8.3-8.8 0-1.7-.4-3.3-1.2-4.8.2 1.9-.2 3.8-.4 5.9Z"
        fill="#ffffff"
        opacity="0.22"
      />
    </svg>
  );
}

