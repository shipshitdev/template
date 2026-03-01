export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-100">
          Hello from{" "}
          <span className="text-blue-500">shipshit.dev</span>
        </h1>
        <p className="text-lg text-gray-400">
          Your production-ready Next.js starter is live.
        </p>
      </div>

      <div className="mt-4 rounded-lg border border-gray-800 bg-gray-900 p-6 text-sm text-gray-400">
        <p>
          Edit{" "}
          <code className="rounded bg-gray-800 px-1.5 py-0.5 font-mono text-gray-200">
            src/app/page.tsx
          </code>{" "}
          to get started.
        </p>
      </div>
    </main>
  );
}
