export default function PageHeader({ children }: { children: string }) {
  return <h1 className="text-3xl font-bold text-slate-50 pb-4">{children}</h1>;
}
