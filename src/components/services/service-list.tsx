"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react/ssr";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { ServiceIcon } from "@/components/ui/service-icon";
import { cn } from "@/lib/cn";
import type { ServiceItem } from "@/lib/data/services";

const COLLAPSED_COUNT = 4;

export function ServiceList({ items }: { items: ServiceItem[] }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = items.length > COLLAPSED_COUNT;

  return (
    <div>
      <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const isOverflow = hasMore && index >= COLLAPSED_COUNT;
          return (
            <StaggerItem
              key={item.title}
              className={cn(isOverflow && !expanded && "hidden lg:block")}
            >
              <div className="bento-card">
                <div className="bento-card__surface flex h-full flex-col gap-4 p-7">
                  <div className="bento-card__icon flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                    <ServiceIcon name={item.icon} size={22} weight="light" />
                  </div>
                  <div>
                    <h3 className="bento-card__title font-heading text-base font-semibold">
                      {item.title}
                    </h3>
                    <p className="bento-card__desc mt-1.5 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerGroup>

      {hasMore ? (
        <div className="mt-8 flex justify-center lg:hidden">
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-6 py-3 font-heading text-sm font-semibold text-navy transition-colors active:scale-[0.97] hover:border-navy hover:bg-navy/5"
          >
            {expanded ? "Show less" : `View ${items.length - COLLAPSED_COUNT} more`}
            <CaretDown
              size={16}
              className={cn("transition-transform duration-300", expanded && "rotate-180")}
            />
          </button>
        </div>
      ) : null}
    </div>
  );
}
