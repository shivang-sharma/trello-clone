const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen bg-slate-100 flex flex-col items-center justify-center">
      {children}
    </main>
  );
};

export default ClerkLayout;
