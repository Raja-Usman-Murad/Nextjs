const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <main className="bg-blue-800 py-4">
        <div className="container mx-auto text-center text-white flex justify-center items-center h-full">
          <p>AUTH LAYOUT</p>
        </div>
      </main>
      {children}
    </>
  );
};

export default AuthLayout;
