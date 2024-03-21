interface ITitle {
  title: string;
  center?: boolean;
  variant?: string;
  sx?: string[];
}

export default function Title({
  title,
  center,
  variant = "h3",
  sx = ["", ""],
}: ITitle) {
  switch (variant) {
    case "h1":
      return (
        <h1
          className={`font-bold text-5xl ${center && "text-center"} ${[...sx]}`}
        >
          {title}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`font-bold text-4xl ${center && "text-center"} ${sx.join(
            " "
          )}`}
        >
          {title}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`font-bold text-3xl ${center && "text-center"} ${sx.join(
            " "
          )}`}
        >
          {title}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`font-bold text-2xl ${center && "text-center"} ${sx.join(
            " "
          )}`}
        >
          {title}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={`font-bold text-xl ${center && "text-center"} ${sx.join(
            " "
          )}`}
        >
          {title}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={`font-bold text-lg ${center && "text-center"} ${sx.join(
            " "
          )}`}
        >
          {title}
        </h6>
      );
  }
}
