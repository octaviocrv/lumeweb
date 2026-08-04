import Image from "next/image";

type BrandSymbolProps = {
  className?: string;
};

export default function BrandSymbol({ className }: BrandSymbolProps) {
  return (
    <Image
      src="/brand/logo-lume-fundo-branco.svg"
      alt="Logo LUME"
      width={120}
      height={120}
      className={className}
    />
  );
}
