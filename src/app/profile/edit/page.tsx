import Link from "next/link";
import ProfileForm from "@/components/ProfileForm";

export default function EditProfilePage() {
  return (
    <main className="min-h-screen">
      <header className="bg-blue-600 text-white py-6 px-4 shadow-lg">
        <div className="max-w-2xl mx-auto flex items-center gap-4">
          <Link href="/profile" className="hover:bg-blue-700 p-2 rounded-lg transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Profil bearbeiten</h1>
            <p className="text-blue-100 mt-1">Aktualisieren Sie Ihre Bewerbungsdaten</p>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto p-4 py-8">
        <ProfileForm />
      </div>
    </main>
  );
}
