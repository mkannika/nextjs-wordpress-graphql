type TMiscocmsBlog = {
  title: string;
  content: string;
  publishedAt: string;
  updatedAt: string;
  id: string;
};

export default async function MicroCms() {
  // ...existing code...
  const res = await fetch('https://56o5bi09cx.microcms.io/api/v1/blogs', {
    method: 'GET',
    headers: {
      'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_MICROCMS_KEY || '',
    },
  });
  const data = await res.json();
  const contents = data.contents as TMiscocmsBlog[];

  return (
    <main className="max-w-[800px] mx-auto my-10">
      <ol className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] flex flex-col gap-4">
        {contents.map((item) => (
          <li key={item.id} className="mb-2 tracking-[-.01em] space-y-2">
            <a
              className="text-blue-500 hover:underline"
              href={`/microcms/${item.id}`}
            >
              {item.title} - {new Date(item.publishedAt).toLocaleDateString()}
            </a>
            <p className="text-gray-500 text-sm">
              {new Date(item.updatedAt).toLocaleDateString()}
            </p>
            <div dangerouslySetInnerHTML={{ __html: item.content }} />
          </li>
        ))}
      </ol>
    </main>
  );
}
