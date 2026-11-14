"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { mainNav, services } from "@/data/home";
import s from "./Header.module.css";

type NavLink = { href: string; label: string };

function SmartLink({ href, className, children, onClick }: { href: string; className?: string; children: React.ReactNode; onClick?: () => void }) {
  if (href.startsWith("http")) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link className={className} href={href} onClick={onClick}>
      {children}
    </Link>
  );
}

function ExternalMark() {
  return (
    <>
      <span aria-hidden="true"> ↗</span>
      <span className="sr-only"> (새 창)</span>
    </>
  );
}

function useCloseOnOutsideAndEscape(open: boolean, setOpen: (v: boolean) => void, ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointer = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onFocusOut = (e: FocusEvent) => {
      const next = e.relatedTarget as Node | null;
      if (ref.current && (!next || !ref.current.contains(next))) setOpen(false);
    };
    const root = ref.current;
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    root?.addEventListener("focusout", onFocusOut);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      root?.removeEventListener("focusout", onFocusOut);
    };
  }, [open, setOpen, ref]);
}

export function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  useCloseOnOutsideAndEscape(open, setOpen, ref);

  return (
    <div ref={ref} className={`${s.dd} ${open ? s.ddOpen : ""}`}>
      <button type="button" className="focus-ring" aria-expanded={open} aria-controls={menuId} onClick={() => setOpen((v) => !v)}>
        서비스
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <path d="M2 3.5 5 6.5 8 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      <div id={menuId} className={s.ddMenu}>
        {services.map((svc) => (
          <SmartLink key={svc.key} className="focus-ring" href={svc.href} onClick={() => setOpen(false)}>
            <b>
              {svc.name}
              {svc.href.startsWith("http") && <ExternalMark />}
            </b>
            <span>{svc.tagline}</span>
          </SmartLink>
        ))}
      </div>
    </div>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  useCloseOnOutsideAndEscape(open, setOpen, ref);
  const close = () => setOpen(false);
  const serviceLinks: NavLink[] = services.map((svc) => ({ href: svc.href, label: svc.name }));

  return (
    <div ref={ref} className={s.mobile}>
      <button type="button" className={`focus-ring ${s.mobileToggle}`} aria-expanded={open} aria-controls={open ? menuId : undefined} onClick={() => setOpen((v) => !v)}>
        메뉴
      </button>
      {open && (
        <div id={menuId} className={s.mobileMenu}>
          {[...mainNav, ...serviceLinks].map((item) => (
            <SmartLink key={item.href} className="focus-ring" href={item.href} onClick={close}>
              {item.label}
              {item.href.startsWith("http") && <ExternalMark />}
            </SmartLink>
          ))}
          <Link className={`focus-ring ${s.mobileCta}`} href="/contact" onClick={close}>
            연구 자문 문의
          </Link>
        </div>
      )}
    </div>
  );
}
