"use client";

import { useActionState } from "react";
import { CheckCircle, WarningCircle } from "@phosphor-icons/react/ssr";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  if (state.status === "success") {
    return (
      <div className="rounded-3xl bg-light-azure p-8 text-center sm:p-10">
        <CheckCircle size={40} weight="fill" className="mx-auto text-dark-blue" />
        <h3 className="mt-4 font-heading text-xl font-semibold text-navy">
          Message sent.
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-dark-blue">
          Thank you for reaching out. Expect a reply within one business day
          &mdash; or message on WhatsApp for a faster response.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5" noValidate>
      {state.status === "error" && state.formError ? (
        <div className="flex items-center gap-3 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          <WarningCircle size={20} className="shrink-0" />
          {state.formError}
        </div>
      ) : null}

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-heading text-sm font-semibold text-navy">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          disabled={isPending}
          className="rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-navy disabled:opacity-60"
        />
        {state.fieldErrors?.name ? (
          <p className="text-xs text-red-600">{state.fieldErrors.name}</p>
        ) : (
          <p className="text-xs text-dark-blue/60">As you&rsquo;d like to be addressed.</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-heading text-sm font-semibold text-navy">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          disabled={isPending}
          className="rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-navy disabled:opacity-60"
        />
        {state.fieldErrors?.email ? (
          <p className="text-xs text-red-600">{state.fieldErrors.email}</p>
        ) : (
          <p className="text-xs text-dark-blue/60">We&rsquo;ll reply here first.</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="destination" className="font-heading text-sm font-semibold text-navy">
          Study destination
          <span className="ml-1 font-normal text-dark-blue/60">(optional)</span>
        </label>
        <input
          id="destination"
          name="destination"
          type="text"
          placeholder="e.g. United Kingdom, Australia"
          disabled={isPending}
          className="rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-navy disabled:opacity-60"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-heading text-sm font-semibold text-navy">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          disabled={isPending}
          className="rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-navy disabled:opacity-60"
        />
        {state.fieldErrors?.message ? (
          <p className="text-xs text-red-600">{state.fieldErrors.message}</p>
        ) : (
          <p className="text-xs text-dark-blue/60">
            Tell us a little about what you&rsquo;re looking for.
          </p>
        )}
      </div>

      <Button type="submit" disabled={isPending} className="mt-2 self-start">
        {isPending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
