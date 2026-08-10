import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({ children, href, variant = "primary" }: ButtonProps) {
  const className = variant === "primary" ? "site-button site-button--primary" : "site-button site-button--secondary";

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
}
