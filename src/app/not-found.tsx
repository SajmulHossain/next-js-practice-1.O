import Button from "./components/Button";

const NotFound = () => {
  return (
    <section className="flex flex-col h-screen justify-center items-center">
      <h3 className="font-bold text-3xl italic">404 Route not found</h3>
      <div className="space-x-4">
        <Button />
      </div>
    </section>
  );
};

export default NotFound;
