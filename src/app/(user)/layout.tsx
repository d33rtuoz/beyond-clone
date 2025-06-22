import Dock from '@/components/dock/dock';

export default function DockLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='grid grid-rows-[1fr_auto] h-screen'>
      <main className='p-4 overflow-y-scroll'>{children}</main>
      <Dock />
    </div>
  );
}
