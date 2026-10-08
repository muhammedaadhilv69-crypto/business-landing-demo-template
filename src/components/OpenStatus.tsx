"use client";

import { useEffect, useState } from "react";
import type { Copy } from "@/content/site.config";
import { getOpenStatus, type OpenStatusState } from "@/lib/open-status";
import { cn } from "@/lib/utils";

type Props = {
  status: Copy["status"];
  time: Copy["time"];
  initialState: OpenStatusState;
};

export default function OpenStatus({ status, time, initialState }: Props) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const update = () => setState(getOpenStatus(status, time));
    const initialUpdate = setTimeout(update, 0);
    const interval = setInterval(update, 60_000);
    return () => {
      clearTimeout(initialUpdate);
      clearInterval(interval);
    };
  }, [status, time]);

  return (
    <div role="status" className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-3.5 py-1.5 text-[0.95rem] font-semibold">
      <span className={cn("size-2.5 rounded-full", state.open ? "bg-green-400" : "bg-red-400")} aria-hidden="true" />
      {state.text}
    </div>
  );
}
