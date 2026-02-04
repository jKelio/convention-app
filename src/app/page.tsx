import ProfileForm from "@/components/ProfileForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="bg-blue-600 text-white py-6 px-4 shadow-lg">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold">Recruiting App</h1>
          <p className="text-blue-100 mt-1">Erstellen Sie Ihr Bewerbungsprofil</p>
        </div>
      </header>

      <div className="max-w-2xl mx-auto p-4 py-8">
        <ProfileForm />
      </div>
    </main>
  );
}
