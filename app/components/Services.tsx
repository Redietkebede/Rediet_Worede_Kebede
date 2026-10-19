import { capabilities } from "@/app/data/portfolio";
import { Section } from "@/components/ui";

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Capabilities"
      title="Features I build and improve"
      description="The technical pieces I bring to a collaboration, shaped around what people need the software to do."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {capabilities.map((service) => (
          <article
            key={service.title}
            className="border-border-soft bg-surface/70 min-w-0 rounded-2xl border p-5 sm:p-6"
          >
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-text-secondary mt-3 text-sm leading-7">{service.description}</p>
            <ul className="text-text-secondary mt-4 list-disc space-y-2 pl-4 text-sm leading-6">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
