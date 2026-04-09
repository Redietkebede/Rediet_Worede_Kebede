import { Container } from "@/components/ui";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-soft bg-surface/55">
      <Container>
        <div className="flex flex-col gap-3 py-8 text-sm text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Rediet Worede Kebede</p>
          <p>Open for opportunities and collaboration</p>
        </div>
      </Container>
    </footer>
  );
}
