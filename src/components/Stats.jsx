export default function Stats({ github }) {
  const username = github?.username;
  if (!username) return null;
  return (
    <section id="stats" className="py-20 px-6 w-full max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">GitHub Stats</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent`}
          alt="GitHub Stats"
          className="rounded-lg border border-gray-200 dark:border-gray-800"
          loading="lazy"
        />
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent`}
          alt="Top Languages"
          className="rounded-lg border border-gray-200 dark:border-gray-800"
          loading="lazy"
        />
      </div>
    </section>
  );
}


