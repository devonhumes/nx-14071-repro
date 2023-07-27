import { child } from "@packages-with-bundling/child";

export function parent(): string {
  return child();
}
