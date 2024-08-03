import { PerformancePage } from "./performance_page";

export function createPerformancePage(): { Page: React.ComponentType } {
  const Page = () => <PerformancePage />;

  return { Page };
}
