import Login from "@/components/Login";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#eeeef6]">
      <div className="w-[450px] max-w-full">
        <Login />
      </div>
    </div>
  );
}