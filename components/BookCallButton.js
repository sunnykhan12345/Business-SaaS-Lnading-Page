import Image from "next/image";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-base font-bold transition duration-300 focus:outline-none focus:ring-2 focus:ring-pink/50 focus:ring-offset-2 focus:ring-offset-ink";
const variants = {
  primary:
    "bg-white text-ink hover:-translate-y-0.5 hover:shadow-glow dark:bg-white dark:text-ink",
  gradient: "text-white shadow-glow hover:-translate-y-0.5 gradient-border",
  outline:
    "border border-black/10 bg-white/70 text-ink hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10",
  soft: "bg-black/5 text-ink hover:bg-black/10 dark:bg-white/[0.08] dark:text-white dark:hover:bg-white/[0.12]",
};

export default function BookCallButton({
  children,
  href = "#",
  variant = "primary",
  icon = true,
  className = "",
  ...props
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  return (
    <a href={href} className={classes} {...props}>
      <span>{children}</span>
      {icon && (
        <span className="grid h-6 w-6 place-items-center rounded-[36px] bg-black/[0.08] dark:bg-white">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.25 8.99985L3 8.99985"
              stroke="url(#paint0_linear_149_86)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.25 5.24994L14.2929 8.29283C14.6262 8.62617 14.7929 8.79283 14.7929 8.99994C14.7929 9.20705 14.6262 9.37371 14.2929 9.70705L11.25 12.7499"
              stroke="url(#paint1_linear_149_86)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_149_86"
                x1="8.625"
                y1="8.99985"
                x2="8.625"
                y2="9.99985"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF3FC5" />
                <stop offset="0.480769" stopColor="#6640FF" />
                <stop offset="1" stopColor="#FF5126" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_149_86"
                x1="13.125"
                y1="5.24994"
                x2="13.125"
                y2="12.7499"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF3FC5" />
                <stop offset="0.480769" stopColor="#6640FF" />
                <stop offset="1" stopColor="#FF5126" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      )}
    </a>
  );
}
