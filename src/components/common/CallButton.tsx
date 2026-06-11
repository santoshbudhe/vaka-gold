interface Props {
  phone: string;
  text?: string;
}

export default function CallButton({
  phone,
  text = "Call Us",
}: Props) {
  return (
    <a
      href={`tel:${phone}`}
      className="
        inline-flex
        items-center
        justify-center
      "
    >
      {text}
    </a>
  );
}