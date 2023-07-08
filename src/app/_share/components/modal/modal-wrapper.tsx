"use client";

type Props = {
  children: React.ReactNode;
};

export function ModalWrapper({ children }: Props) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
