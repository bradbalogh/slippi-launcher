import React from "react";

export function lazyLoadPerformancePage() {
  const LazyPage = React.lazy(async () => {
    const { createPerformancePage } = await import("./create");
    const { Page } = createPerformancePage();
    return { default: Page };
  });

  const Page: React.ComponentType = (props) => (
    <React.Suspense fallback={null}>
      <LazyPage {...props} />
    </React.Suspense>
  );

  return { Page };
}
