const ListDetailsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {children}
      <main className="bg-blue-800 py-4">
        <div className="container mx-auto text-center text-white flex justify-center items-center h-full">
          <p>list carousel/slider</p>
        </div>
      </main>
    </>
  );
};

export default ListDetailsLayout;
