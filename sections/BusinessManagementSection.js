"use client";

import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { useApp } from "@/lib/AppProvider";
export default function BusinessManagementSection() {
  const { t } = useApp();
  const cards = t.businessManagement.cards;
  return (
    <section
      id="packages"
      // id="business-management"
      className="relative overflow-hidden bg-[#F8F6FF] py-16 dark:bg-[#0B0B10] sm:py-20 lg:py-24"
    >
      <Container>
        <Reveal className="mx-auto max-w-[760px] text-center">
          <h2 className="mx-auto max-w-[720px] text-balance text-[32px] font-light leading-[1.15] tracking-[-0.03em] text-ink dark:text-white sm:text-[42px] lg:text-[48px]">
            {t.businessManagement.title}
          </h2>
        </Reveal>
        <div className="mx-auto mt-16 xl:mt-20 grid max-w-[1180px] grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Lead To Converted Client */}
          <Reveal delay={0.05}>
            <article className="business-card h-[565px]">
              <div className="relative z-10 flex h-full flex-col">
                <h3 className="business-card-title">{cards.lead.title}</h3>
                <p className="business-card-desc">{cards.lead.description}</p>

                <div className="mt-5 flex-1 overflow-hidden rounded-[14px] bg-[#202027]">
                  <div className="lead-marquee flex h-full w-max gap-3 p-3">
                    <LeadColumn
                      title={cards.lead.newLeads}
                      color="green"
                      items={["Omar Y.", "Elias V.", "Fatima A.", "Karim D."]}
                    />

                    <LeadColumn
                      title={cards.lead.qualified}
                      color="purple"
                      items={["Sofia M.", "Layla Q.", "Aisha M.", "Nadia R."]}
                    />
                    <LeadColumn
                      title={cards.lead.converted}
                      color="orange"
                      items={["Mehdi K.", "Sarah N.", "Youssef B.", "Lina F."]}
                    />
                    <LeadColumn
                      title={cards.lead.newLeads}
                      color="green"
                      items={["Omar Y.", "Elias V.", "Fatima A.", "Karim D."]}
                    />
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
          {/* Card 2: Package Selection */}
          <Reveal delay={0.1}>
            <article className="business-card h-[565px]">
              <div className="relative z-10 flex h-full flex-col">
                <h3 className="business-card-title">{cards.package.title}</h3>
                <p className="business-card-desc">
                  {cards.package.description}
                </p>
                <div className="mt-5 flex-1 overflow-hidden rounded-[14px] bg-[#202027] p-4">
                  <div className="relative h-full overflow-hidden">
                    <div className="package-single-loop">
                      {cards.package.plans.map((plan) => (
                        <PackagePlan key={plan} name={plan} />
                      ))}
                      {cards.package.plans.map((plan) => (
                        <PackagePlan key={`${plan}-copy`} name={plan} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
          {/* Card 3: Document Collection */}
          <Reveal delay={0.15}>
            <article className="business-card h-[565px]">
              <div className="relative z-10 flex h-full flex-col">
                <h3 className="business-card-title">{cards.document.title}</h3>
                <p className="business-card-desc">
                  {cards.document.description}
                </p>
                <div className="mt-5 flex-1 overflow-hidden rounded-[14px] bg-[#202027] p-4">
                  <DocumentMock />
                </div>
              </div>
            </article>
          </Reveal>
          {/* Card 4: Payment Tracking */}
          <Reveal delay={0.2}>
            <article className="business-card h-[565px] md:col-span-1 lg:col-span-1">
              <div className="relative z-10 flex h-full flex-col">
                <h3 className="business-card-title">{cards.payment.title}</h3>
                <p className="business-card-desc">
                  {cards.payment.description}
                </p>
                <div className="mt-5 flex-1 overflow-hidden rounded-[14px] bg-[#202027] p-4">
                  <PaymentMock />
                </div>
              </div>
            </article>
          </Reveal>
          {/* Card 5: Task Completion */}
          <Reveal delay={0.25}>
            <article className="business-card h-[565px] md:col-span-1 lg:col-span-2">
              <div className="relative z-10 flex h-full flex-col">
                <h3 className="business-card-title">{cards.task.title}</h3>
                <p className="business-card-desc">{cards.task.description}</p>
                <div className="mt-5 flex-1 overflow-hidden rounded-[14px] bg-[#202027] p-4">
                  <TaskMock />
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
function LeadColumn({ title, items, color }) {
  const colorClass =
    color === "green"
      ? "bg-[#19C37D]"
      : color === "purple"
        ? "bg-[#8B3DFF]"
        : "bg-[#FF8A3D]";

  return (
    <div className="w-[132px] shrink-0">
      <div className="mb-2 flex items-center gap-2 rounded-t-[10px] bg-white/[0.08] px-3 py-2">
        <span
          className={`grid h-6 w-6 place-items-center rounded-full ${colorClass}`}
        >
          <span className="h-2 w-2 rounded-full bg-white" />
        </span>
        <span className="text-[11px] font-semibold text-white">{title}</span>
      </div>
      <div className="grid gap-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-[8px] bg-white px-3 py-2 text-[#111111]"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-[11px] font-bold leading-none">{item}</p>
              <span className="h-3 w-3 rounded-full bg-[#E5E5E5]" />
            </div>
            <p className="mt-1 text-[9px] text-black/55">Instagram</p>
            <p className="mt-1 text-[8px] text-black/45">20 min ago</p>
          </div>
        ))}
      </div>
    </div>
  );
}
function PackagePlan({ name }) {
  return (
    <div className="package-plan-item">
      <div className="package-plan-left-line" />
      <div className="package-plan-button">
        <span>{name}</span>
      </div>
    </div>
  );
}
function DocumentMock() {
  return (
    <div className="grid h-full content-start gap-3">
      <div className="rounded-[10px] bg-white/[0.06] px-4 py-3">
        <div className="h-2 w-[70%] rounded-full bg-white/30" />
        <div className="mt-3 h-2 w-[45%] rounded-full bg-white/10" />
      </div>
      <div className="rounded-[10px] bg-white/[0.06] px-4 py-3">
        <div className="h-2 w-[82%] rounded-full bg-white/30" />
        <div className="mt-3 h-2 w-[50%] rounded-full bg-white/10" />
      </div>
    </div>
  );
}

function PaymentMock() {
  return (
    <div className="grid h-full content-start gap-3">
      {["Paid", "Pending", "Overdue"].map((item, index) => (
        <div
          key={item}
          className="flex items-center justify-between rounded-[12px] bg-white/[0.06] px-4 py-3"
        >
          <span className="text-[12px] text-white/70">{item}</span>
          <span
            className={`h-2 w-16 rounded-full ${
              index === 0
                ? "bg-[#19C37D]"
                : index === 1
                  ? "bg-[#FFB020]"
                  : "bg-[#FF5126]"
            }`}
          />
        </div>
      ))}
    </div>
  );
}

function TaskMock() {
  return (
    <div className="grid h-full content-start gap-3">
      {[75, 55, 38, 90].map((value, index) => (
        <div key={value} className="rounded-[12px] bg-white/[0.06] px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="text-[12px] text-white/70">Task {index + 1}</span>
            <span className="text-[11px] text-white/45">{value}%</span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-white/[0.08]">
            <div
              className="h-full rounded-full bg-[linear-gradient(90deg,#FF3FC5,#6640FF,#FF5126)]"
              style={{ width: `${value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
