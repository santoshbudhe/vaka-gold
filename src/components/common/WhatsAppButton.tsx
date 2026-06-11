interface Props {
  whatsapp: string;
  text?: string;
}

export default function WhatsAppButton({
  whatsapp,
  text = "WhatsApp",
}: Props) {
  return (
    <a
      href={`https://wa.me/${whatsapp.replace(
        /\D/g,
        ""
      )}`}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
}