interface INavItemProps {
  variant: "link" | "button";
  label: string;
  to?: string;
  onclick?: () => void;
}

export default function NavItem({
  variant,
  to,
  label,
  onclick,
}: INavItemProps) {
  return (
    <>
      <div className="hidden md:block">
        {variant === "link" ? (
          <a href={to} onClick={onclick}>
            {label}
          </a>
        ) : (
          <button onClick={onclick}>{label}</button>
        )}
      </div>
    </>
  );
}
