import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function SectionShell({ id, children, className = "" }: SectionShellProps) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      <div className="section-inner">{children}</div>
    </section>
  );
}
