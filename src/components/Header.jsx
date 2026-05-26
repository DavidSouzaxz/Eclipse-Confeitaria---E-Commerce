import React from "react";

export const Header = () => {
  return (
    <header className="w-full bg-eclipse-bg border-b border-white/5 pt-6 pb-4 px-4 lg:px-6 sticky top-0 z-40 backdrop-blur-md bg-opacity-95">
      <div className="px-0 lg:px-2 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-eclipse-text">
              Eclipse <span className="text-eclipse-purple">Confeitaria</span>
            </h1>
            <p className="text-xs lg:text-sm text-eclipse-muted mt-0.5 font-medium">
              Doces artesanais feitos com carinho
            </p>
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] lg:text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
              Aberto agora
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
