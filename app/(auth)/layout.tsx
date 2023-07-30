import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex items-start min-h-screen bg-cover bg-auth">
      <div className="mt-16 bg-white ml-28 px-9 py-11 min-w-[360px] rounded-lg">
        <Image
          src="/logo-with-text.svg"
          alt="Black Market"
          width={173}
          height={30}
          className="mx-auto mb-12"
        />
        {children}
      </div>
    </main>
  );
}
